import { useState, useCallback } from 'react'
import type { Story, StoryRequest } from '../types'
import { generateFallbackStory } from '../utils/fallbackStory'
import { buildShortImagePrompt } from '../utils/imagePrompt'
import { buildDirectPollinationsUrl, callApi, fetchPollinationsImage } from '../utils/api'

interface GenerationState {
  isGenerating: boolean
  progress: number
  status: string
  error: string | null
}

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function isUsableDataUrl(url?: string): boolean {
  return !!url && url.startsWith('data:image/') && url.length > 12_000
}

async function generateImage(
  scene: string,
  request: StoryRequest,
  pageIndex: number,
): Promise<string> {
  const prompt = buildShortImagePrompt(
    scene,
    request.heroName,
    request.artStyle,
    request.category,
  )
  const seed = pageIndex * 42 + 7

  // 1) Hosting function (CF/Netlify) → base64
  const data = await callApi<{ imageUrl?: string }>('generate-image', { prompt, seed })
  if (isUsableDataUrl(data?.imageUrl)) return data!.imageUrl!

  // 2) Client-side fetch + validate (GitHub Pages path)
  const fetched = await fetchPollinationsImage(prompt, seed, 3)
  if (fetched) return fetched

  // 3) Last resort: direct URL (browser may still render it)
  return buildDirectPollinationsUrl(prompt, seed + 99)
}

export function useStoryGenerator() {
  const [state, setState] = useState<GenerationState>({
    isGenerating: false,
    progress: 0,
    status: '',
    error: null,
  })
  const [story, setStory] = useState<Story | null>(null)

  const updateState = (partial: Partial<GenerationState>) => {
    setState((prev) => ({ ...prev, ...partial }))
  }

  const generateStory = useCallback(async (request: StoryRequest) => {
    setStory(null)
    updateState({ isGenerating: true, progress: 5, status: 'Geschichte wird geschrieben …', error: null })

    const apiStory = await callApi<Story>('generate-story', request)
    const generatedStory = apiStory ?? generateFallbackStory(request)

    updateState({ progress: 30, status: 'Bilder werden gezeichnet … ✨' })

    const pagesWithImages = [...generatedStory.pages]
    const totalPages = pagesWithImages.length

    for (let i = 0; i < totalPages; i++) {
      const page = pagesWithImages[i]
      updateState({
        progress: 30 + Math.round(((i + 1) / totalPages) * 65),
        status: `Seite ${i + 1}/${totalPages} wird gestaltet … 🎨`,
      })

      const imageUrl = await generateImage(page.imagePrompt, request, i)
      // Keep a clean English prompt on the page for retries / regenerate
      const imagePrompt = buildShortImagePrompt(
        page.imagePrompt,
        request.heroName,
        request.artStyle,
        request.category,
      )
      pagesWithImages[i] = { ...page, imageUrl, imagePrompt }

      if (i < totalPages - 1) await delay(2800)
    }

    const finalStory: Story = { ...generatedStory, pages: pagesWithImages }
    setStory(finalStory)
    updateState({ isGenerating: false, progress: 100, status: 'Geschichte ist fertig! 📚' })
  }, [])

  const loadStory = useCallback((saved: Story) => {
    setStory(saved)
    updateState({ isGenerating: false, progress: 100, status: '' })
  }, [])

  const resetStory = useCallback(() => {
    setStory(null)
    setState({ isGenerating: false, progress: 0, status: '', error: null })
  }, [])

  return { ...state, story, generateStory, loadStory, resetStory }
}

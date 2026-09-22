export type StoryCategory =
  | 'adventure'
  | 'animals'
  | 'space'
  | 'underwater'
  | 'fairy'
  | 'dinosaurs'
  | 'superhero'
  | 'personalized'
  | 'custom'

export type ArtStyle =
  | 'watercolor'
  | 'cartoon'
  | 'pixar'
  | 'anime'
  | 'storybook'
  | 'clay'
  | 'pastel'

export type TextModel =
  | 'gpt-4o-mini'
  | 'gpt-4o'
  | 'claude-3-5-haiku-20241022'

export type ImageProvider =
  | 'pollinations'

export interface StoryPage {
  pageNumber: number
  text: string
  imagePrompt: string
  imageUrl?: string
}

export interface Story {
  title: string
  pages: StoryPage[]
  heroName?: string
  heroImage?: string
  category: StoryCategory
  artStyle: ArtStyle
}

export interface StoryRequest {
  category: StoryCategory
  prompt?: string
  heroName?: string
  heroImage?: string
  artStyle: ArtStyle
  textModel: TextModel
  imageProvider: ImageProvider
  pageCount: number
  ageGroup: '3-5' | '6-8' | '9-12'
}

export interface CategoryInfo {
  id: StoryCategory
  title: string
  emoji: string
  description: string
  gradient: string
  samplePrompts: string[]
  featured?: boolean
}

export interface ArtStyleInfo {
  id: ArtStyle
  name: string
  emoji: string
  promptSuffix: string
}

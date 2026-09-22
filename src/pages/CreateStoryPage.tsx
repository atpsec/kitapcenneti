import { useEffect, useState } from 'react'
import { CategoryGrid, scrollToCreateTop } from '../components/CategoryGrid'
import { OptionsPanel } from '../components/OptionsPanel'
import { PromptLibrary } from '../components/PromptLibrary'
import { CustomPrompt } from '../components/CustomPrompt'
import { PersonalizeHero } from '../components/PersonalizeHero'
import { LoadingAnimation } from '../components/LoadingAnimation'
import { StoryViewer } from '../components/StoryViewer'
import { SavedStories } from '../components/SavedStories'
import { useStoryGenerator } from '../hooks/useStoryGenerator'
import { useSavedStories } from '../hooks/useSavedStories'
import { consumeCreatePrefill } from '../hooks/useProgress'
import { getCategoryInfo } from '../data/prompts'
import type { ArtStyle, ImageProvider, StoryCategory, TextModel } from '../types'

type WizardStep = 1 | 2 | 3 | 4

export function CreateStoryPage() {
  const [step, setStep] = useState<WizardStep>(1)
  const [category, setCategory] = useState<StoryCategory | null>(null)
  const [selectedPrompt, setSelectedPrompt] = useState('')
  const [customPrompt, setCustomPrompt] = useState('')
  const [heroName, setHeroName] = useState('')
  const [heroImage, setHeroImage] = useState<string | null>(null)
  const [artStyle, setArtStyle] = useState<ArtStyle>('watercolor')
  const [textModel, setTextModel] = useState<TextModel>('gpt-4o-mini')
  const [imageProvider, setImageProvider] = useState<ImageProvider>('pollinations')
  const [ageGroup, setAgeGroup] = useState<'3-5' | '6-8' | '9-12'>('6-8')
  const [pageCount, setPageCount] = useState(6)

  const { isGenerating, progress, status, story, generateStory, loadStory, resetStory } = useStoryGenerator()
  const { savedStories, saveStory, deleteStory } = useSavedStories()
  const catInfo = category ? getCategoryInfo(category) : null

  useEffect(() => {
    const prefill = consumeCreatePrefill()
    if (!prefill) return
    if (prefill.heroName) setHeroName(prefill.heroName)
    if (prefill.prompt) {
      setCustomPrompt(prefill.prompt)
      setSelectedPrompt('')
    }
    if (prefill.category) {
      setCategory(prefill.category as StoryCategory)
      setStep(2)
    } else if (prefill.heroName) {
      setCategory('personalized')
      setStep(2)
    }
  }, [])

  const goTo = (next: WizardStep) => {
    setStep(next)
    scrollToCreateTop()
  }

  const handleSelectCategory = (cat: StoryCategory) => {
    setCategory(cat)
    setSelectedPrompt('')
    goTo(2)
  }

  const handleChangeCategory = () => {
    goTo(1)
  }

  const handleGenerate = () => {
    if (!category) {
      goTo(1)
      return
    }

    const prompt = customPrompt || selectedPrompt || undefined

    if (category === 'personalized' && !heroName.trim()) {
      alert('Bitte gib einen Held*innennamen ein!')
      goTo(2)
      return
    }

    if (category === 'custom' && !prompt) {
      alert('Bitte schreibe oder wähle eine Geschichtsidee!')
      goTo(2)
      return
    }

    generateStory({
      category,
      prompt,
      heroName: heroName.trim() || undefined,
      heroImage: heroImage || undefined,
      artStyle,
      textModel,
      imageProvider,
      pageCount,
      ageGroup,
    })
  }

  if (story) {
    return <StoryViewer story={story} onReset={resetStory} onSave={saveStory} />
  }

  return (
    <div className="page create-page" id="create-wizard">
      <header className="page-header">
        <h1>✨ KI-Märchenbuch</h1>
        <p>Jeder Schritt bleibt auf dem Bildschirm – Kategorie auswählen, Details eingeben, erstellen.</p>
      </header>

      <ol className="create-steps" aria-label="Erstellungsschritte">
        <li className={step === 1 ? 'is-current' : step > 1 ? 'is-done' : undefined}>1. Kategori</li>
        <li className={step === 2 ? 'is-current' : step > 2 ? 'is-done' : undefined}>2. Detay</li>
        <li className={step === 3 ? 'is-current' : step > 3 ? 'is-done' : undefined}>3. Stil</li>
        <li className={step === 4 ? 'is-current' : undefined}>4. Erstellen</li>
      </ol>

      {step === 1 && <SavedStories stories={savedStories} onLoad={loadStory} onDelete={deleteStory} />}

      {step > 1 && category && (
        <CategoryGrid
          selected={category}
          onSelect={handleSelectCategory}
          compact
          onChangeRequest={handleChangeCategory}
        />
      )}

      {step === 1 && (
        <CategoryGrid selected={category} onSelect={handleSelectCategory} />
      )}

      {step === 2 && category && catInfo && (
        <section className="create-panel" aria-labelledby="create-step-2-title">
          <h2 id="create-step-2-title" className="section__title">
            <span className="section__title-emoji">{catInfo.emoji}</span>
            2. {category === 'personalized' ? 'Held*in eingeben' : 'Geschichtendetails'}
          </h2>
          <p className="section-hint">
            {category === 'personalized'
              ? 'Namen eingeben (Foto optional) und fortfahren.'
              : `${catInfo.title}: Wähle eine Idee oder schreibe deine eigene.`}
          </p>

          {category === 'personalized' ? (
            <PersonalizeHero
              heroName={heroName}
              heroImage={heroImage}
              onNameChange={setHeroName}
              onImageChange={setHeroImage}
            />
          ) : (
            <div className="panel create-step-note">
              <p>
                In dieser Kategorie ist kein Name erforderlich. Wenn Sie möchten, können Sie einen Heldennamen hinzufügen.
              </p>
              <label className="create-optional-name">
                Heldenname (optional)
                <input
                  type="text"
                  value={heroName}
                  onChange={(e) => setHeroName(e.target.value)}
                  placeholder="z. B. Emma"
                  maxLength={30}
                />
              </label>
            </div>
          )}

          <PromptLibrary
            category={category}
            selectedPrompt={selectedPrompt}
            onSelectPrompt={(p) => {
              setSelectedPrompt(p)
              setCustomPrompt('')
            }}
          />
          <CustomPrompt
            value={customPrompt}
            onChange={(v) => {
              setCustomPrompt(v)
              if (v) setSelectedPrompt('')
            }}
          />

          <div className="create-nav">
            <button type="button" className="create-nav__ghost" onClick={handleChangeCategory}>
              ← Kategori
            </button>
            <button
              type="button"
              className="create-nav__next"
              onClick={() => {
                if (category === 'personalized' && !heroName.trim()) {
                  alert('Bitte gib einen Held*innennamen ein!')
                  return
                }
                if (category === 'custom' && !(customPrompt || selectedPrompt)) {
                  alert('Bitte schreibe oder wähle eine Geschichtsidee!')
                  return
                }
                goTo(3)
              }}
            >
              Weiter → Stil
            </button>
          </div>
        </section>
      )}

      {step === 3 && category && (
        <section className="create-panel" aria-labelledby="create-step-3-title">
          <h2 id="create-step-3-title" className="section__title">
            <span className="section__title-emoji">⚙️</span>
            3. Stil & Ayarlar
          </h2>
          <p className="section-hint">Wählen Sie Bildstil, Altersgruppe und Seitenanzahl.</p>
          <OptionsPanel
            artStyle={artStyle}
            textModel={textModel}
            imageProvider={imageProvider}
            ageGroup={ageGroup}
            pageCount={pageCount}
            onArtStyleChange={setArtStyle}
            onTextModelChange={setTextModel}
            onImageProviderChange={setImageProvider}
            onAgeGroupChange={setAgeGroup}
            onPageCountChange={setPageCount}
          />
          <div className="create-nav">
            <button type="button" className="create-nav__ghost" onClick={() => goTo(2)}>
              ← Detay
            </button>
            <button type="button" className="create-nav__next" onClick={() => goTo(4)}>
              Weiter → Erstellen
            </button>
          </div>
        </section>
      )}

      {step === 4 && category && catInfo && (
        <section className="create-panel create-panel--ready" aria-labelledby="create-step-4-title">
          <h2 id="create-step-4-title" className="section__title">
            <span className="section__title-emoji">🚀</span>
            4. Sie sind bereit!
          </h2>
          <ul className="create-summary">
            <li>
              <span>Kategori</span>
              <strong>{catInfo.emoji} {catInfo.title}</strong>
            </li>
            {heroName && (
              <li>
                <span>Held</span>
                <strong>{heroName}</strong>
              </li>
            )}
            <li>
              <span>Fikir</span>
              <strong>
                {selectedPrompt || customPrompt
                  ? (selectedPrompt || customPrompt).slice(0, 80) + ((selectedPrompt || customPrompt).length > 80 ? '…' : '')
                  : 'Automatisch / nach Kategorie'}
              </strong>
            </li>
            <li>
              <span>Stil</span>
              <strong>{artStyle} · {ageGroup} Jahre · {pageCount} Seiten</strong>
            </li>
          </ul>
          <button className="generate-btn" onClick={handleGenerate} disabled={isGenerating}>
            <span className="generate-btn__emoji">✨</span>
            Erstelle meine Geschichte!
            <span className="generate-btn__emoji">📚</span>
          </button>
          <div className="create-nav">
            <button type="button" className="create-nav__ghost" onClick={() => goTo(3)}>
              ← Stil
            </button>
          </div>
        </section>
      )}

      {isGenerating && <LoadingAnimation progress={progress} status={status} />}
    </div>
  )
}

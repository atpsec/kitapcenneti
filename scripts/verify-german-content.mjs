import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import ts from 'typescript'

const root = process.cwd()
const scratch = path.join(root, 'tmp', 'german-content-check')
const dataFiles = ['audioStories', 'world', 'collections', 'activities']

const visibleMarkers = /\b(?:Mizah|Bruderschaft|Sharing|Hope sagte|White Cloud|Colorful Candy Park|Whispering Forest|Soft Pillow Station|Left Sock|Right Sock|Back to School|Creative Writers Club|Space Explorers Basket|Sea Wave Box|Curiosity Science Box|School Morning Basket|Masal seç|Kısa oyun|Duygu check-in|Boyama|dostluk|doğa|uzay|okul|sanat|spor|deniz|mevsim|hayvan|cesaret|uyku|koleksiyon|keşfet|oyna|daha fazla|Canlı Arena|Masallar|Oyunlar)\b/i

function strings(value) {
  if (typeof value === 'string') return [value]
  if (Array.isArray(value)) return value.flatMap(strings)
  if (value && typeof value === 'object') return Object.values(value).flatMap(strings)
  return []
}

async function loadData(name) {
  const sourcePath = path.join(root, 'src', 'data', `${name}.ts`)
  const source = await fs.readFile(sourcePath, 'utf8')
  const output = ts.transpileModule(source, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ESNext },
  }).outputText
  const outputPath = path.join(scratch, `${name}.mjs`)
  await fs.writeFile(outputPath, output, 'utf8')
  return import(`${pathToFileURL(outputPath).href}?v=${Date.now()}`)
}

await fs.rm(scratch, { recursive: true, force: true })
await fs.mkdir(scratch, { recursive: true })

try {
  const [audio, world, collections, activities] = await Promise.all(dataFiles.map(loadData))
  const checks = [
    ['audio stories', audio.AUDIO_STORIES, ['title', 'theme', 'summary', 'text']],
    ['world regions', world.WORLD_REGIONS, ['title', 'blurb', 'tags', 'links']],
    ['collections', collections.COLLECTIONS, ['title', 'description', 'tags', 'items']],
    ['quiz questions', activities.QUIZ_QUESTIONS, ['question', 'options']],
  ]
  const failures = []

  for (const [name, records, fields] of checks) {
    for (const record of records) {
      const visible = fields.flatMap((field) => strings(record[field]))
      for (const value of visible) {
        if (visibleMarkers.test(value)) failures.push(`${name}/${record.id}: ${value}`)
      }
    }
  }

  for (const story of audio.AUDIO_STORIES) {
    if (!/^\d+ Min\.$/.test(story.duration)) failures.push(`audio stories/${story.id}: invalid duration ${story.duration}`)
  }

  const requiredCulture = ['Deutschland entdecken', 'Die Brüder Grimm', 'Wattenmeer']
  const allVisible = checks.flatMap(([, records, fields]) => records.flatMap((record) => fields.flatMap((field) => strings(record[field]))))
  for (const phrase of requiredCulture) {
    if (!allVisible.some((value) => value.includes(phrase))) failures.push(`missing German culture phrase: ${phrase}`)
  }

  if (failures.length) {
    console.error(failures.slice(0, 20).join('\n'))
    process.exitCode = 1
  } else {
    console.log(`German content check passed: ${audio.AUDIO_STORIES.length} stories, ${world.WORLD_REGIONS.length} regions, ${collections.COLLECTIONS.length} collections.`)
  }
} finally {
  await fs.rm(scratch, { recursive: true, force: true })
}

import { build } from 'esbuild'
import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const root = process.cwd()
const dataDir = path.join(root, 'src', 'data')
const scratch = path.join(root, 'tmp', 'german-runtime-check')
const files = (await fs.readdir(dataDir)).filter((name) => name.endsWith('.ts')).sort()

const safeName = (name) => name.replace(/[^a-zA-Z0-9_]/g, '_')
const imports = files.map((name) => `import * as ${safeName(name)} from '../../src/data/${name}'`).join('\n')
const moduleMap = files.map((name) => `'${name}': ${safeName(name)}`).join(',\n  ')
const entry = path.join(scratch, 'entry.mjs')
const bundle = path.join(scratch, 'bundle.mjs')

const visibleMarkers = [
  /\bTümü\b/i,
  /\bMasal seç\b/i,
  /\bKısa oyun\b/i,
  /\bDuygu check-in\b/i,
  /\bDuygu soru kartı\b/i,
  /\bDuygu kelimesi söyle\b/i,
  /\bDuygu seç\b/i,
  /\bDuygu diyarı\b/i,
  /\bMasallar\b/i,
  /\bOyunlar\b/i,
  /\bPaylaş\b/i,
  /\bBoyama\b/i,
  /\bTürkçe\b/i,
  /\bAmacı söyle\b/i,
  /\bÖrnek göster\b/i,
  /\bUygulat\b/i,
  /\bKapat\b/i,
  /\bDostluk\b/i,
  /\bDoğa\b/i,
  /\bUzay\b/i,
  /\bOkul\b/i,
  /\bSanat\b/i,
  /\bSpor\b/i,
  /\bDeniz\b/i,
  /\bMevsim\b/i,
  /\bHayvan\b/i,
  /\bCesaret\b/i,
  /\bUyku\b/i,
  /\bKoleksiyon\b/i,
  /\bKeşfet\b/i,
  /\bOyna\b/i,
  /\bdaha fazla\b/i,
]

function collect(value, location, seen = new Set(), matches = []) {
  if (typeof value === 'string') {
    if (!location.endsWith('.id') && visibleMarkers.some((marker) => marker.test(value))) matches.push({ location, value })
    return matches
  }
  if (!value || typeof value !== 'object' || seen.has(value)) return matches
  seen.add(value)
  if (Array.isArray(value)) value.forEach((item, index) => collect(item, `${location}[${index}]`, seen, matches))
  else Object.entries(value).forEach(([key, item]) => collect(item, `${location}.${key}`, seen, matches))
  return matches
}

await fs.rm(scratch, { recursive: true, force: true })
await fs.mkdir(scratch, { recursive: true })
await fs.writeFile(entry, `${imports}\n\nexport const modules = {\n  ${moduleMap}\n}\n`, 'utf8')

try {
  await build({ entryPoints: [entry], bundle: true, platform: 'node', format: 'esm', outfile: bundle, logLevel: 'silent' })
  const runtime = await import(`${pathToFileURL(bundle).href}?v=${Date.now()}`)
  const matches = Object.entries(runtime.modules).flatMap(([name, namespace]) => collect(namespace, name))
  if (matches.length) {
    console.error(matches.slice(0, 80).map(({ location, value }) => `${location}: ${value}`).join('\n'))
    if (matches.length > 80) console.error(`…and ${matches.length - 80} more.`)
    process.exitCode = 1
  } else {
    console.log(`German runtime check passed: ${files.length} data modules scanned.`)
  }
} finally {
  await fs.rm(scratch, { recursive: true, force: true })
}

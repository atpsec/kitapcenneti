import { jsPDF } from 'jspdf'
import type { Story } from '../types'
import { escapeAttr, escapeHtml } from './escapeHtml'

export async function downloadSvgAsPdf(svgMarkup: string, filename: string, title: string) {
  const svgBlob = new Blob([svgMarkup], { type: 'image/svg+xml;charset=utf-8' })
  const url = URL.createObjectURL(svgBlob)

  const img = new Image()
  img.src = url

  await new Promise<void>((resolve, reject) => {
    img.onload = () => resolve()
    img.onerror = () => reject(new Error('SVG yüklenemedi'))
  })

  const canvas = document.createElement('canvas')
  canvas.width = 1000
  canvas.height = 1100
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('Canvas desteklenmiyor')
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#2d3436'
  ctx.font = '700 36px Nunito, Fredoka, Arial, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText(title, 500, 50)
  ctx.fillStyle = '#888'
  ctx.font = '600 20px Nunito, Arial, sans-serif'
  ctx.fillText('Kitap Cenneti — Lizenzfreie Malvorlage', 500, 85)
  // Keep the SVG's original aspect ratio so circles, faces and frames stay
  // round when the printable is rasterized for the PDF.
  const maxWidth = 800
  const maxHeight = 820
  const scale = Math.min(maxWidth / img.width, maxHeight / img.height)
  const drawWidth = img.width * scale
  const drawHeight = img.height * scale
  ctx.drawImage(img, (canvas.width - drawWidth) / 2, 110, drawWidth, drawHeight)
  ctx.fillStyle = '#666'
  ctx.font = '500 18px Nunito, Arial, sans-serif'
  ctx.fillText('Für Bildung und Freude zu Hause frei nutzbar.', 500, 960)
  URL.revokeObjectURL(url)

  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 10, 10, 190, 209)
  pdf.save(`${filename}.pdf`)
}

/** Türkçe karakterler için canvas üzerinden çizim (jsPDF yerleşik fontları TR desteklemez) */
export function downloadCertificatePdf(childName: string, achievement: string) {
  const width = 1600
  const height = 1131
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    alert('Zertifikat konnte nicht erstellt werden.')
    return
  }

  // background
  const grad = ctx.createLinearGradient(0, 0, width, height)
  grad.addColorStop(0, '#fff7fb')
  grad.addColorStop(1, '#f3f0ff')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, width, height)

  // borders
  ctx.strokeStyle = '#ff6b9d'
  ctx.lineWidth = 14
  ctx.strokeRect(40, 40, width - 80, height - 80)
  ctx.strokeStyle = '#a66cff'
  ctx.lineWidth = 4
  ctx.strokeRect(60, 60, width - 120, height - 120)

  ctx.textAlign = 'center'
  ctx.fillStyle = '#ff6b9d'
  ctx.font = '800 72px Fredoka, Nunito, Arial, sans-serif'
  ctx.fillText('ERFOLGSZERTIFIKAT', width / 2, 220)

  ctx.fillStyle = '#2d3436'
  ctx.font = '600 36px Nunito, Arial, sans-serif'
  ctx.fillText('Präsentiert von Kitap Cenneti', width / 2, 300)

  ctx.fillStyle = '#667eea'
  ctx.font = '800 64px Fredoka, Nunito, Arial, sans-serif'
  ctx.fillText(childName || 'Kleiner Held', width / 2, 430)

  ctx.fillStyle = '#2d3436'
  ctx.font = '600 34px Nunito, Arial, sans-serif'
  ctx.fillText('hat diesen Erfolg erreicht:', width / 2, 520)

  ctx.fillStyle = '#a66cff'
  ctx.font = '700 40px Nunito, Arial, sans-serif'
  wrapText(ctx, achievement, width / 2, 620, width - 280, 52)

  ctx.fillStyle = '#636e72'
  ctx.font = '600 28px Nunito, Arial, sans-serif'
  const date = new Date().toLocaleDateString('de-DE')
  ctx.fillText(`Datum: ${date}`, width / 2, 820)
  ctx.fillText('Lies, träume und teile weiter!', width / 2, 880)
  ctx.font = '700 26px Nunito, Arial, sans-serif'
  ctx.fillStyle = '#ff6b9d'
  ctx.fillText('📚 Kitap Cenneti', width / 2, 960)

  const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
  const w = pdf.internal.pageSize.getWidth()
  const h = pdf.internal.pageSize.getHeight()
  pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, w, h)
  pdf.save(`sertifika-${(childName || 'kahraman').replace(/\s+/g, '_')}.pdf`)
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
) {
  const words = text.split(' ')
  let line = ''
  let yy = y
  for (const word of words) {
    const test = line ? `${line} ${word}` : word
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, yy)
      line = word
      yy += lineHeight
    } else {
      line = test
    }
  }
  if (line) ctx.fillText(line, x, yy)
}

export function printHtml(title: string, bodyHtml: string) {
  const win = window.open('', '_blank', 'noopener,noreferrer,width=800,height=900')
  if (!win) {
    alert('Das Pop-up wurde blockiert. Bitte erlaube es im Browser.')
    return
  }
  const safeTitle = escapeHtml(title)
  const safeAttr = escapeAttr(title)
  // bodyHtml must be composed by callers from trusted/escaped fragments only
  win.document.open()
  win.document.write(`<!doctype html><html><head><meta charset="utf-8"/><title>${safeAttr}</title>
    <style>
      body{font-family:Nunito,Georgia,serif;padding:40px;color:#222}
      h1{text-align:center}
      .meta{text-align:center;color:#666;margin-bottom:24px}
      @media print{body{padding:0}}
    </style></head><body>
    <h1>${safeTitle}</h1>
    <div class="meta">Kitap Cenneti</div>
    ${bodyHtml}
    </body></html>`)
  win.document.close()
  // Prefer programmatic print after load — avoid inline script injection surface
  win.addEventListener('load', () => {
    try {
      win.focus()
      win.print()
    } catch {
      /* ignore */
    }
  })
  // Some browsers fire load before listener attaches on document.write docs
  setTimeout(() => {
    try {
      win.focus()
      win.print()
    } catch {
      /* ignore */
    }
  }, 250)
}

async function loadImage(src: string): Promise<HTMLImageElement | null> {
  if (!src) return null
  return new Promise((resolve) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => resolve(img)
    img.onerror = () => resolve(null)
    img.src = src
  })
}

function wrapCanvasText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number,
  maxLines = 8,
) {
  const words = text.split(' ')
  let line = ''
  let yy = y
  let lines = 0
  for (const word of words) {
    const test = line ? `${line} ${word}` : word
    if (ctx.measureText(test).width > maxWidth && line) {
      ctx.fillText(line, x, yy)
      line = word
      yy += lineHeight
      lines++
      if (lines >= maxLines) {
        ctx.fillText(line + '…', x, yy)
        return
      }
    } else {
      line = test
    }
  }
  if (line) ctx.fillText(line, x, yy)
}

/** Illustrated storybook PDF — images + Turkish text via canvas (TR-safe). */
export async function downloadStoryPdf(story: Story) {
  const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' })
  const pageW = pdf.internal.pageSize.getWidth()
  const pageH = pdf.internal.pageSize.getHeight()

  // Cover
  {
    const canvas = document.createElement('canvas')
    canvas.width = 1600
    canvas.height = 1131
    const ctx = canvas.getContext('2d')!
    const grad = ctx.createLinearGradient(0, 0, 1600, 1131)
    grad.addColorStop(0, '#fff5f7')
    grad.addColorStop(1, '#e8f4fd')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, 1600, 1131)
    ctx.textAlign = 'center'
    ctx.fillStyle = '#ff6b9d'
    ctx.font = '800 48px Fredoka, Nunito, Arial, sans-serif'
    ctx.fillText('Kitap Cenneti', 800, 280)
    ctx.fillStyle = '#2d3436'
    ctx.font = '800 64px Fredoka, Nunito, Arial, sans-serif'
    wrapCanvasText(ctx, story.title, 800, 420, 1200, 72, 3)
    ctx.fillStyle = '#636e72'
    ctx.font = '600 32px Nunito, Arial, sans-serif'
    ctx.fillText(story.heroName ? `Held: ${story.heroName}` : 'Dein eigenes Geschichtenbuch', 800, 620)
    ctx.fillText(new Date().toLocaleDateString('de-DE'), 800, 680)
    ctx.fillStyle = '#a66cff'
    ctx.font = '700 28px Nunito, Arial, sans-serif'
    ctx.fillText('Für gemeinsames Lesen zu Hause erstellt', 800, 900)
    pdf.addImage(canvas.toDataURL('image/jpeg', 0.92), 'JPEG', 0, 0, pageW, pageH)
  }

  for (let i = 0; i < story.pages.length; i++) {
    pdf.addPage()
    const page = story.pages[i]
    const canvas = document.createElement('canvas')
    canvas.width = 1600
    canvas.height = 1131
    const ctx = canvas.getContext('2d')!
    ctx.fillStyle = '#fffafc'
    ctx.fillRect(0, 0, 1600, 1131)

    const img = page.imageUrl ? await loadImage(page.imageUrl) : null
    if (img) {
      // Cover left half with image
      const targetW = 900
      const targetH = 900
      const scale = Math.min(targetW / img.width, targetH / img.height)
      const dw = img.width * scale
      const dh = img.height * scale
      ctx.fillStyle = '#f0e6ff'
      ctx.fillRect(40, 80, 920, 920)
      ctx.drawImage(img, 40 + (920 - dw) / 2, 80 + (920 - dh) / 2, dw, dh)
    } else {
      ctx.fillStyle = '#f8e8f0'
      ctx.fillRect(40, 80, 920, 920)
      ctx.textAlign = 'center'
      ctx.fillStyle = '#a66cff'
      ctx.font = '800 120px Fredoka, Arial, sans-serif'
      ctx.fillText('📚', 500, 560)
    }

    ctx.textAlign = 'left'
    ctx.fillStyle = '#ff6b9d'
    ctx.font = '800 28px Nunito, Arial, sans-serif'
    ctx.fillText(`Seite ${page.pageNumber}`, 1000, 140)

    ctx.fillStyle = '#2d3436'
    ctx.font = '700 34px Nunito, Arial, sans-serif'
    wrapCanvasText(ctx, page.text, 1000, 220, 540, 48, 12)

    ctx.fillStyle = '#999'
    ctx.font = '600 20px Nunito, Arial, sans-serif'
    ctx.fillText('Kitap Cenneti', 1000, 1040)

    pdf.addImage(canvas.toDataURL('image/jpeg', 0.9), 'JPEG', 0, 0, pageW, pageH)
  }

  const safe = story.title.replace(/[^\wğüşıöçĞÜŞİÖÇ\- ]+/gi, '').trim().replace(/\s+/g, '_') || 'masal'
  pdf.save(`${safe}.pdf`)
}

/** Daily quest checklist printable */
export function downloadQuestChecklistPdf(
  quests: { emoji: string; title: string; stars: number; minutes: number }[],
  childName = '',
) {
  const canvas = document.createElement('canvas')
  canvas.width = 1200
  canvas.height = 1600
  const ctx = canvas.getContext('2d')!
  const grad = ctx.createLinearGradient(0, 0, 0, 1600)
  grad.addColorStop(0, '#fff7fb')
  grad.addColorStop(1, '#eef8ff')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, 1200, 1600)

  ctx.textAlign = 'center'
  ctx.fillStyle = '#ff6b9d'
  ctx.font = '800 54px Fredoka, Nunito, Arial, sans-serif'
  ctx.fillText('Heutige Aufgaben', 600, 100)
  ctx.fillStyle = '#2d3436'
  ctx.font = '700 32px Nunito, Arial, sans-serif'
  ctx.fillText(childName || 'Kleiner Held', 600, 160)
  ctx.fillStyle = '#636e72'
  ctx.font = '600 24px Nunito, Arial, sans-serif'
  ctx.fillText(new Date().toLocaleDateString('de-DE'), 600, 210)

  quests.forEach((q, i) => {
    const y = 300 + i * 200
    ctx.fillStyle = '#ffffff'
    ctx.strokeStyle = '#ffd6e5'
    ctx.lineWidth = 4
    roundRect(ctx, 80, y, 1040, 160, 24)
    ctx.fill()
    ctx.stroke()
    // checkbox
    ctx.strokeStyle = '#a66cff'
    ctx.lineWidth = 5
    ctx.strokeRect(120, y + 50, 60, 60)
    ctx.textAlign = 'left'
    ctx.fillStyle = '#2d3436'
    ctx.font = '800 40px Fredoka, Nunito, Arial, sans-serif'
    ctx.fillText(`${q.emoji}  ${q.title}`, 220, y + 75)
    ctx.fillStyle = '#636e72'
    ctx.font = '600 26px Nunito, Arial, sans-serif'
    ctx.fillText(`~${q.minutes} Min. · ${q.stars} Sterne`, 220, y + 120)
  })

  ctx.textAlign = 'center'
  ctx.fillStyle = '#ff6b9d'
  ctx.font = '700 24px Nunito, Arial, sans-serif'
  ctx.fillText('Kitap Cenneti — Zu Hause drucken, abhaken und feiern!', 600, 1500)

  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 8, 8, 194, 280)
  pdf.save('gunluk-gorevler.pdf')
}

/** Feeling cards printable pack */
export function downloadFeelingsPackPdf(
  feelings: { emoji: string; label: string; tip: string }[],
) {
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
  const pageW = pdf.internal.pageSize.getWidth()
  const pageH = pdf.internal.pageSize.getHeight()

  for (let i = 0; i < feelings.length; i += 2) {
    if (i > 0) pdf.addPage()
    const canvas = document.createElement('canvas')
    canvas.width = 1200
    canvas.height = 1600
    const ctx = canvas.getContext('2d')!
    ctx.fillStyle = '#fffaf8'
    ctx.fillRect(0, 0, 1200, 1600)
    ctx.textAlign = 'center'
    ctx.fillStyle = '#ff6b9d'
    ctx.font = '800 44px Fredoka, Nunito, Arial, sans-serif'
    ctx.fillText('Gefühlskarten', 600, 70)
    ctx.fillStyle = '#999'
    ctx.font = '600 22px Nunito, Arial, sans-serif'
    ctx.fillText('Kitap Cenneti', 600, 110)

    ;[feelings[i], feelings[i + 1]].filter(Boolean).forEach((f, idx) => {
      const y = 180 + idx * 650
      ctx.fillStyle = '#ffffff'
      ctx.strokeStyle = '#ffe0ec'
      ctx.lineWidth = 6
      roundRect(ctx, 80, y, 1040, 580, 28)
      ctx.fill()
      ctx.stroke()
      ctx.fillStyle = '#2d3436'
      ctx.font = '800 90px Fredoka, Arial, sans-serif'
      ctx.fillText(f.emoji, 600, y + 160)
      ctx.font = '800 48px Fredoka, Nunito, Arial, sans-serif'
      ctx.fillText(f.label, 600, y + 250)
      ctx.fillStyle = '#444'
      ctx.font = '600 30px Nunito, Arial, sans-serif'
      wrapCanvasText(ctx, f.tip, 600, y + 340, 880, 42, 5)
    })

    pdf.addImage(canvas.toDataURL('image/jpeg', 0.92), 'JPEG', 0, 0, pageW, pageH)
  }

  pdf.save('duygu-kartlari.pdf')
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number,
) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

import type { PageId } from '../types/nav'

interface FooterProps {
  onNavigate?: (page: PageId) => void
}

export function Footer({ onNavigate }: FooterProps) {
  const go = (id: PageId) => {
    if (onNavigate) onNavigate(id)
    else window.location.hash = id
  }

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__brand">📚 Kitap Cenneti</p>
        <p className="footer__text">
          Çocuklar ve aileler için güvenli, merak uyandıran küçük keşifler ✨
        </p>
        <div className="footer__nav">
          <button onClick={() => go('portal')}>Portal</button>
          <button onClick={() => go('library')}>Kütüphane</button>
          <button onClick={() => go('paths')}>Öğrenme Yolları</button>
          <button onClick={() => go('teachers')}>Öğretmen</button>
          <button onClick={() => go('blog')}>Aile Blog</button>
          <button onClick={() => go('about')}>Hakkımızda</button>
          <button onClick={() => go('privacy')}>Gizlilik</button>
          <button onClick={() => go('terms')}>Koşullar</button>
          <button onClick={() => go('contact')}>İletişim</button>
        </div>
        <div className="footer__links">
          <button type="button" onClick={() => go('world')}>Dünya Haritası</button>
          <span>•</span>
          <button type="button" onClick={() => go('shop')}>Ücretsiz Paketler</button>
          <span>•</span>
          <button type="button" onClick={() => go('calendar')}>Haftalık Plan</button>
          <span>•</span>
          <button type="button" onClick={() => go('journal')}>Gelişim Günlüğü</button>
        </div>
        <p className="footer__tech">GitHub Pages · React · Vite</p>
      </div>
    </footer>
  )
}

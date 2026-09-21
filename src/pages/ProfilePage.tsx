import { useEffect, useState } from 'react'
import type { PageId } from '../types/nav'
import {
  setFamilyPin,
  usePortalProfile,
  type PortalProfile,
} from '../hooks/usePortalProfile'
import { showToast } from '../components/Toast'
import { useProgress } from '../hooks/useProgress'
import { STICKERS } from '../data/stickers'
import { SocialShare } from '../components/SocialShare'
import { useMembership } from '../hooks/useMembership'

const AVATARS = ['🦊', '🐻', '🦄', '🐱', '🐼', '🦁', '🐸', '🦉', '🐯', '🐨']
const INTERESTS = ['masal', 'oyun', 'boyama', 'uzay', 'hayvan', 'stem', 'müzik', 'duygu']

interface Props {
  onNavigate: (page: PageId) => void
}

export function ProfilePage({ onNavigate }: Props) {
  const {
    profile,
    profiles,
    saveProfile,
    switchProfile,
    addProfile,
    removeProfile,
    pinEnabled,
  } = usePortalProfile()
  const { stars, streak, badges, stickers } = useProgress()
  const { membership, isPlus } = useMembership()
  const [draft, setDraft] = useState<PortalProfile>(profile)
  const [pin, setPin] = useState('')
  const [pin2, setPin2] = useState('')

  useEffect(() => {
    setDraft(profile)
  }, [profile])

  const toggleInterest = (tag: string) => {
    setDraft((d) => ({
      ...d,
      interests: d.interests.includes(tag)
        ? d.interests.filter((t) => t !== tag)
        : [...d.interests, tag].slice(0, 6),
    }))
  }

  return (
    <div className="page">
      <header className="page-header">
        <h1>🧒 Portal Profili</h1>
        <p>Kardeş profilleri, yaş grubu, aile PIN kilidi — her çocuk kendi dünyasında.</p>
      </header>

      <section className="account-strip">
        <div className="account-strip__icon">✦</div>
        <div>
          <span className="membership-eyebrow">Aile hesabı</span>
          <strong>{isPlus ? 'Aile+ aktif' : 'Ücretsiz plan'}</strong>
          <small>{membership.email || 'Ebeveyn e-postası henüz eklenmedi'}</small>
        </div>
        <button type="button" className="btn btn--small btn--primary" onClick={() => onNavigate('membership')}>
          {isPlus ? 'Üyeliği yönet' : 'Aile+ planlarını gör'} <span>→</span>
        </button>
      </section>

      <section className="section">
        <h2 className="section__title">Profiller ({profiles.length}/{isPlus ? 5 : 1})</h2>
        <div className="profile-switcher">
          {profiles.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`profile-chip ${p.id === profile.id ? 'is-active' : ''}`}
              onClick={() => switchProfile(p.id)}
            >
              <span>{p.avatar}</span>
              <strong>{p.childName || 'İsimsiz'}</strong>
              <small>{p.ageGroup}</small>
            </button>
          ))}
          <button
            type="button"
            className="btn btn--ghost"
            onClick={() => {
              if (!isPlus) {
                onNavigate('membership')
                return
              }
              const n = addProfile(5)
              if (n) showToast('Yeni kardeş profili eklendi')
              else showToast('En fazla 5 profil')
            }}
          >
            + {isPlus ? 'Kardeş ekle' : 'Aile+ ile kardeş ekle'}
          </button>
          {profiles.length > 1 && (
            <button
              type="button"
              className="btn btn--ghost"
              onClick={() => {
                removeProfile(profile.id)
                showToast('Profil silindi')
              }}
            >
              Bu profili sil
            </button>
          )}
        </div>
      </section>

      <div className="portal-dash-grid" style={{ marginBottom: 20 }}>
        <div className="portal-dash-card">
          <span>⭐</span>
          <h2>{stars}</h2>
          <p>Yıldız</p>
        </div>
        <div className="portal-dash-card">
          <span>🔥</span>
          <h2>{streak}</h2>
          <p>Gün serisi</p>
        </div>
        <div className="portal-dash-card">
          <span>🏅</span>
          <h2>{badges.length}</h2>
          <p>Rozet</p>
        </div>
        <div className="portal-dash-card">
          <span>🏷️</span>
          <h2>
            {stickers.length}/{STICKERS.length}
          </h2>
          <p>Sticker</p>
        </div>
      </div>

      <div className="panel journal-form">
        <label>
          Çocuğun adı
          <input
            value={draft.childName}
            onChange={(e) => setDraft({ ...draft, childName: e.target.value })}
            maxLength={30}
            placeholder="Örn. Elif"
          />
        </label>

        <p>
          <strong>Avatar</strong>
        </p>
        <div className="library-filters">
          {AVATARS.map((a) => (
            <button
              key={a}
              type="button"
              className={`stem-chip ${draft.avatar === a ? 'is-active' : ''}`}
              onClick={() => setDraft({ ...draft, avatar: a })}
            >
              {a}
            </button>
          ))}
        </div>

        <label>
          Yaş grubu
          <select
            value={draft.ageGroup}
            onChange={(e) =>
              setDraft({ ...draft, ageGroup: e.target.value as PortalProfile['ageGroup'] })
            }
          >
            <option value="3-5">3–5 yaş</option>
            <option value="6-8">6–8 yaş</option>
            <option value="9-12">9–12 yaş</option>
          </select>
        </label>

        <p>
          <strong>İlgi alanları</strong>
        </p>
        <div className="library-filters">
          {INTERESTS.map((tag) => (
            <button
              key={tag}
              type="button"
              className={`stem-chip ${draft.interests.includes(tag) ? 'is-active' : ''}`}
              onClick={() => toggleInterest(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <label>
          Haftalık hedef
          <input
            value={draft.goal}
            onChange={(e) => setDraft({ ...draft, goal: e.target.value })}
            maxLength={80}
            placeholder="Örn. Her gün 1 masal"
          />
        </label>

        <div className="btn-row">
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              saveProfile(draft)
              showToast('Profil kaydedildi')
            }}
          >
            Kaydet
          </button>
          <button type="button" className="btn btn--ghost" onClick={() => onNavigate('paths')}>
            Yaşıma uygun yol
          </button>
          <button type="button" className="btn btn--ghost" onClick={() => onNavigate('certificates')}>
            Sertifikalar
          </button>
        </div>
      </div>

      <section className="section">
        <h2 className="section__title">🔐 Aile PIN kilidi</h2>
        <div className="panel journal-form">
          <p>Aile moduna geçişte 4 haneli PIN ister. Çocukların ayarlara kaçmasını zorlaştırır.</p>
          <label>
            Yeni PIN
            <input
              type="password"
              inputMode="numeric"
              maxLength={4}
              value={pin}
              onChange={(e) => setPin(e.target.value.replace(/\D/g, '').slice(0, 4))}
              placeholder="••••"
            />
          </label>
          <label>
            Tekrar
            <input
              type="password"
              inputMode="numeric"
              maxLength={4}
              value={pin2}
              onChange={(e) => setPin2(e.target.value.replace(/\D/g, '').slice(0, 4))}
              placeholder="••••"
            />
          </label>
          <div className="btn-row">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => {
                if (pin.length !== 4 || pin !== pin2) {
                  showToast('PIN 4 hane olmalı ve eşleşmeli')
                  return
                }
                setFamilyPin(pin)
                setPin('')
                setPin2('')
                showToast('Aile kilidi ayarlandı')
              }}
            >
              PIN kaydet
            </button>
            {pinEnabled && (
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => {
                  setFamilyPin(null)
                  showToast('Aile kilidi kaldırıldı')
                }}
              >
                Kilidi kaldır
              </button>
            )}
          </div>
          <small>Durum: {pinEnabled ? 'aktif 🔐' : 'kapalı'}</small>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Aile içi paylaşım</h2>
        <SocialShare
          payload={{
            title: `${profile.avatar} ${profile.childName || 'Çocuğum'} — Kitap Cenneti`,
            text: `⭐ ${stars} yıldız · 🔥 ${streak} gün · 🏷️ ${stickers.length} sticker. Birlikte okuyoruz!`,
            page: 'profile',
            hashtags: ['KitapCenneti', 'Aile', 'Okuma'],
          }}
        />
      </section>
    </div>
  )
}

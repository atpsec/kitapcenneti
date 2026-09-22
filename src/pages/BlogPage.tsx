import { useMemo, useState } from 'react'
import { BLOG_POSTS } from '../data/blog'
import { AdSlot } from '../components/AdSlot'
import { announceActivityResult } from '../components/Toast'
import { completeActivity } from '../hooks/useProgress'
import { SocialShare } from '../components/SocialShare'
import { ContentPortalBar } from '../components/ContentPortalBar'
import { useContentItemId } from '../hooks/useContentItemId'

export function BlogPage() {
  const [activeId, setActiveId] = useContentItemId('blog', BLOG_POSTS[0].id)
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState('Alle')
  const post = BLOG_POSTS.find((p) => p.id === activeId) || BLOG_POSTS[0]

  const tags = useMemo(
    () => ['Alle', ...Array.from(new Set(BLOG_POSTS.flatMap((p) => p.tags)))],
    [],
  )

  const list = useMemo(() => {
    const q = query.trim().toLowerCase()
    return BLOG_POSTS.filter((p) => {
      if (tag !== 'Alle' && !p.tags.includes(tag)) return false
      if (!q) return true
      return `${p.title} ${p.summary} ${p.tags.join(' ')} ${p.body.join(' ')}`.toLowerCase().includes(q)
    })
  }, [query, tag])

  return (
    <div className="page">
      <header className="page-header">
        <h1>📝 Familienblog-Portal</h1>
        <p>
          {BLOG_POSTS.length} Ratgeber zu Alltag, Lesen, Gefühlen, Bildschirmzeit und Schule. Suchen, filtern und teilen.
        </p>
      </header>

      <AdSlot slot="top" format="horizontal" />

      <ContentPortalBar
        count={list.length}
        label="Blog"
        query={query}
        onQuery={setQuery}
        placeholder="Konu, etiket veya anahtar kelime…"
        filters={tags.map((t) => ({ id: t, label: t }))}
        activeFilter={tag}
        onFilter={setTag}
      />

      <div className="blog-layout">
        <div className="blog-list">
          {list.map((p) => (
            <button
              key={p.id}
              className={`blog-list__item ${activeId === p.id ? 'is-active' : ''}`}
              onClick={() => {
                setActiveId(p.id)
                announceActivityResult(completeActivity('blog'))
              }}
            >
              <span>{p.emoji}</span>
              <div>
                <strong>{p.title}</strong>
                <small>
                  {p.minutes} dk · {p.tags.join(' · ')}
                </small>
              </div>
            </button>
          ))}
        </div>

        <article className="panel blog-article">
          <p className="blog-article__meta">
            {post.emoji} {post.minutes} Min. Lesezeit · {post.tags.join(' · ')}
          </p>
          <h2>{post.title}</h2>
          <p className="blog-article__summary">{post.summary}</p>
          <AdSlot slot="in-article" />
          {post.body.map((para) => (
            <p key={para.slice(0, 24)} className="blog-article__p">
              {para}
            </p>
          ))}
          <SocialShare
            payload={{
              title: post.title,
              text: post.summary,
              page: 'blog',
              itemId: post.id,
              hashtags: ['KitapCenneti', 'Aile', ...post.tags.slice(0, 2)],
            }}
          />
        </article>
      </div>
    </div>
  )
}

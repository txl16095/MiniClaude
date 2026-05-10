import { useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import type { ReactNode } from 'react'

export interface TocItem {
  id: string
  text: string
  level: 2 | 3
}

interface MarkdownDocProps {
  title: string
  description?: string
  content: ReactNode
  toc?: TocItem[]
}

export default function MarkdownDoc({ title, description, content, toc }: MarkdownDocProps) {
  const { lang } = useLanguage()

  useEffect(() => {
    document.title = `${title} - MiniClaude`
    window.scrollTo(0, 0)
  }, [title])

  return (
    <div className="flex gap-8">
      {/* Main content */}
      <article className="flex-1 min-w-0">
        <h1 className="font-display text-3xl md:text-4xl text-white mb-3">{title}</h1>
        {description && (
          <p className="text-white/50 text-sm mb-8">{description}</p>
        )}
        <div className="prose-custom">
          {content}
        </div>
      </article>

      {/* Right outline */}
      {toc && toc.length > 0 && (
        <aside className="w-48 shrink-0 hidden xl:block sticky top-20 self-start">
          <nav className="border-l border-white/10 pl-4">
            <div className="text-xs font-bold text-white/30 uppercase tracking-wider mb-2">
              {lang === 'zh' ? '本页导航' : 'On this page'}
            </div>
            <ul className="space-y-1">
              {toc.map(item => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`block text-xs hover:text-accent transition-colors ${
                      item.level === 3 ? 'pl-3 text-white/40' : 'text-white/50'
                    }`}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}
    </div>
  )
}

// ─── Shared style component for doc content ────────────────────────────

export function DocStyles() {
  return (
    <style>{`
      .prose-custom h2 {
        font-family: var(--font-display);
        font-size: 1.5rem;
        color: white;
        margin: 2.5rem 0 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid rgb(255 255 255 / 0.1);
        scroll-margin-top: 5rem;
      }
      .prose-custom h3 {
        font-family: var(--font-display);
        font-size: 1.15rem;
        color: white;
        margin: 1.5rem 0 0.75rem;
        scroll-margin-top: 5rem;
      }
      .prose-custom p {
        color: rgb(255 255 255 / 0.7);
        font-size: 0.9rem;
        line-height: 1.75;
        margin: 0.75rem 0;
      }
      .prose-custom a {
        color: var(--color-accent);
        text-decoration: none;
      }
      .prose-custom a:hover {
        text-decoration: underline;
      }
      .prose-custom code {
        color: var(--color-accent);
        background: rgb(255 255 255 / 0.08);
        padding: 0.15em 0.4em;
        border-radius: 4px;
        font-size: 0.85em;
      }
      .prose-custom pre {
        background: rgb(0 0 0 / 0.4);
        border: 1px solid rgb(255 255 255 / 0.1);
        padding: 1rem 1.25rem;
        overflow-x: auto;
        font-size: 0.8rem;
        margin: 1rem 0;
        line-height: 1.6;
      }
      .prose-custom pre code {
        background: none;
        color: var(--color-accent);
        padding: 0;
        font-size: inherit;
      }
      .prose-custom table {
        width: 100%;
        border-collapse: collapse;
        margin: 1rem 0;
        font-size: 0.85rem;
      }
      .prose-custom th {
        background: rgb(255 255 255 / 0.06);
        color: white;
        font-weight: 600;
        padding: 0.6rem 0.8rem;
        text-align: left;
        border: 1px solid rgb(255 255 255 / 0.1);
      }
      .prose-custom td {
        padding: 0.6rem 0.8rem;
        border: 1px solid rgb(255 255 255 / 0.1);
        color: rgb(255 255 255 / 0.7);
      }
      .prose-custom ul, .prose-custom ol {
        color: rgb(255 255 255 / 0.7);
        font-size: 0.9rem;
        line-height: 1.75;
        padding-left: 1.5rem;
        margin: 0.75rem 0;
      }
      .prose-custom li {
        margin: 0.25rem 0;
      }
      .prose-custom blockquote {
        border-left: 3px solid var(--color-accent);
        padding: 0.5rem 1rem;
        margin: 1rem 0;
        background: rgb(255 255 255 / 0.03);
        color: rgb(255 255 255 / 0.5);
        font-size: 0.9rem;
      }
      .prose-custom hr {
        border: none;
        border-top: 1px solid rgb(255 255 255 / 0.1);
        margin: 2rem 0;
      }
      .prose-custom .badge {
        display: inline-block;
        padding: 0.1em 0.5em;
        font-size: 0.75rem;
        font-weight: 600;
        border-radius: 4px;
      }
      .prose-custom .badge-green {
        background: rgb(27 167 132 / 0.15);
        color: var(--color-accent);
      }
      .prose-custom .badge-yellow {
        background: rgb(234 179 8 / 0.15);
        color: #eab308;
      }
      .prose-custom .badge-red {
        background: rgb(239 68 68 / 0.15);
        color: #ef4444;
      }
    `}</style>
  )
}

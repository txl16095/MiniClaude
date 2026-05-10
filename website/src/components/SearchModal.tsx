import { useState, useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchIndex } from '../lib/navData'
import MiniSearch from 'minisearch'

const miniSearch = new MiniSearch({
  fields: ['title', 'content'],
  storeFields: ['title', 'path', 'section'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: { title: 2 },
  },
})
miniSearch.addAll(searchIndex)

interface SearchModalProps {
  open: boolean
  onClose: () => void
}

export default function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (open) {
      setQuery('')
      setResults([])
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  const handleSearch = useCallback((q: string) => {
    setQuery(q)
    if (q.trim().length < 1) {
      setResults([])
      return
    }
    const r = miniSearch.search(q, { prefix: true, fuzzy: 0.2 })
    setResults(r.slice(0, 20))
  }, [])

  const handleSelect = (path: string) => {
    onClose()
    navigate(path)
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        // toggle
        if (open) onClose()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-xl mx-4 bg-dark border border-white/20 shadow-2xl">
        {/* Search input */}
        <div className="flex items-center border-b border-white/10 px-4">
          <svg className="w-4 h-4 text-white/40 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => handleSearch(e.target.value)}
            placeholder="搜索文档... (Esc 关闭)"
            className="w-full px-3 py-4 bg-transparent text-white text-sm font-mono outline-none placeholder:text-white/30"
          />
          <kbd className="hidden sm:inline text-xs text-white/30 font-mono px-2 py-0.5 border border-white/20 rounded ml-2">Ctrl+K</kbd>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto">
          {results.length === 0 && query.trim().length > 0 && (
            <div className="px-4 py-8 text-center text-white/40 text-sm font-mono">
              没有找到相关结果
            </div>
          )}
          {results.length === 0 && query.trim().length === 0 && (
            <div className="px-4 py-8 text-center text-white/40 text-sm font-mono">
              输入关键词搜索文档
            </div>
          )}
          {results.map((r, i) => (
            <button
              key={r.id ?? i}
              onClick={() => handleSelect(r.path)}
              className="w-full text-left px-4 py-3 hover:bg-accent/10 transition-colors border-b border-white/5 last:border-b-0"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs text-white/30 font-mono">{r.section}</span>
                <span className="text-sm text-white font-mono">{r.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

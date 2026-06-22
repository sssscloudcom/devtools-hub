import { useState, useMemo } from 'react'

export default function RegexTester() {
  const [pattern, setPattern] = useState('')
  const [flags, setFlags] = useState('g')
  const [testStr, setTestStr] = useState('')
  const [error, setError] = useState('')

  const matches = useMemo(() => {
    if (!pattern || !testStr) return { list: [], highlighted: '' }
    try {
      const regex = new RegExp(pattern, flags)
      const list: { match: string; index: number; groups: string[] }[] = []
      let m: RegExpExecArray | null

      if (flags.includes('g')) {
        while ((m = regex.exec(testStr)) !== null) {
          list.push({ match: m[0], index: m.index, groups: m.slice(1) })
          if (!m[0]) regex.lastIndex++
        }
      } else {
        m = regex.exec(testStr)
        if (m) list.push({ match: m[0], index: m.index, groups: m.slice(1) })
      }

      // Highlight matches
      let highlighted = testStr
      if (list.length > 0) {
        const parts: { text: string; isMatch: boolean }[] = []
        let lastIdx = 0
        for (const match of list) {
          if (match.index > lastIdx) {
            parts.push({ text: testStr.slice(lastIdx, match.index), isMatch: false })
          }
          parts.push({ text: match.match, isMatch: true })
          lastIdx = match.index + match.match.length
        }
        if (lastIdx < testStr.length) {
          parts.push({ text: testStr.slice(lastIdx), isMatch: false })
        }
        highlighted = parts.map(p => p.isMatch ? `<mark class="bg-yellow-300 dark:bg-yellow-600 rounded px-0.5">${p.text}</mark>` : p.text).join('')
      }

      setError('')
      return { list, highlighted }
    } catch (e: any) {
      setError(e.message)
      return { list: [], highlighted: '' }
    }
  }, [pattern, flags, testStr])

  const flagOptions = [
    { flag: 'g', name: 'Global' },
    { flag: 'i', name: 'Case insensitive' },
    { flag: 'm', name: 'Multiline' },
    { flag: 's', name: 'Dot all' },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Regex Tester</h1>
        <p className="text-slate-500 mt-1">Test regular expressions with live matching and highlighting</p>
      </div>

      {/* Pattern Input */}
      <div className="mb-4">
        <label className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 block">Pattern</label>
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono">/</span>
            <input
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              className="input-field pl-8 pr-2 font-mono"
              placeholder="Enter regex pattern..."
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 font-mono">/{flags}</span>
          </div>
        </div>
      </div>

      {/* Flags */}
      <div className="flex flex-wrap gap-3 mb-6">
        {flagOptions.map(({ flag, name }) => (
          <label key={flag} className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={flags.includes(flag)}
              onChange={(e) => {
                setFlags(e.target.checked ? flags + flag : flags.replace(flag, ''))
              }}
              className="rounded"
            />
            <span className="text-sm font-mono font-medium text-brand-500">{flag}</span>
            <span className="text-sm text-slate-500">{name}</span>
          </label>
        ))}
      </div>

      {/* Test String */}
      <div className="mb-6">
        <label className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 block">Test string</label>
        <textarea
          value={testStr}
          onChange={(e) => setTestStr(e.target.value)}
          className="input-field min-h-[120px]"
          placeholder="Enter text to test against..."
        />
      </div>

      {/* Results */}
      {error ? (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl text-sm">
          {error}
        </div>
      ) : (
        <div className="space-y-4">
          {/* Highlighted */}
          {matches.highlighted && (
            <div>
              <label className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 block">
                Matches ({matches.list.length})
              </label>
              <div
                className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 font-mono text-sm whitespace-pre-wrap break-all"
                dangerouslySetInnerHTML={{ __html: matches.highlighted || testStr }}
              />
            </div>
          )}

          {/* Match List */}
          {matches.list.length > 0 && (
            <div>
              <label className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 block">Match details</label>
              <div className="space-y-2">
                {matches.list.map((m, i) => (
                  <div key={i} className="flex items-center gap-4 p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-sm">
                    <span className="text-slate-400 font-mono">#{i + 1}</span>
                    <code className="font-mono font-medium text-brand-500">"{m.match}"</code>
                    <span className="text-slate-400">index: {m.index}</span>
                    {m.groups.length > 0 && (
                      <span className="text-slate-400">groups: {m.groups.map((g, j) => `$${j + 1}="${g}"`).join(', ')}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
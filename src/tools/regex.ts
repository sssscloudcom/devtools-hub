// Regex Tester Tool - Native JS Implementation
import { getLang, t } from '../i18n'

export function regexTester() {
  const lang = getLang()
  const i18n = t(lang)
  const tool = i18n.tools.regex
  
  return `
    <div class="tool-header">
      <h1 class="tool-title">${tool.title}</h1>
      <p class="tool-desc">${tool.desc}</p>
    </div>
    
    <div class="editor-panel" style="margin-bottom: 16px">
      <div class="editor-header">
        <span class="editor-label">${tool.patternLabel || 'Pattern'}</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px">
        <span style="color: var(--text-secondary); font-family: 'JetBrains Mono', monospace;">/</span>
        <input id="regex-pattern" type="text" class="input-text" style="font-family: 'JetBrains Mono', monospace;" placeholder="${tool.patternPlaceholder || 'Enter regex pattern...'}">
        <span style="color: var(--text-secondary); font-family: 'JetBrains Mono', monospace;">/<span id="regex-flags-display">g</span></span>
      </div>
    </div>
    
    <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 24px">
      <label class="regex-flag-label" style="display: flex; align-items: center; gap: 8px; padding: 8px 12px; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 6px; cursor: pointer">
        <input type="checkbox" id="flag-g" checked class="regex-flag">
        <span style="font-family: 'JetBrains Mono', monospace; font-weight: 600; color: var(--primary)">g</span>
        <span style="font-size: 13px; color: var(--text-secondary)">${tool.flagGlobal || 'Global'}</span>
      </label>
      <label class="regex-flag-label" style="display: flex; align-items: center; gap: 8px; padding: 8px 12px; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 6px; cursor: pointer">
        <input type="checkbox" id="flag-i" class="regex-flag">
        <span style="font-family: 'JetBrains Mono', monospace; font-weight: 600; color: var(--primary)">i</span>
        <span style="font-size: 13px; color: var(--text-secondary)">${tool.flagCaseInsensitive || 'Case insensitive'}</span>
      </label>
      <label class="regex-flag-label" style="display: flex; align-items: center; gap: 8px; padding: 8px 12px; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 6px; cursor: pointer">
        <input type="checkbox" id="flag-m" class="regex-flag">
        <span style="font-family: 'JetBrains Mono', monospace; font-weight: 600; color: var(--primary)">m</span>
        <span style="font-size: 13px; color: var(--text-secondary)">${tool.flagMultiline || 'Multiline'}</span>
      </label>
      <label class="regex-flag-label" style="display: flex; align-items: center; gap: 8px; padding: 8px 12px; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 6px; cursor: pointer">
        <input type="checkbox" id="flag-s" class="regex-flag">
        <span style="font-family: 'JetBrains Mono', monospace; font-weight: 600; color: var(--primary)">s</span>
        <span style="font-size: 13px; color: var(--text-secondary)">${tool.flagDotAll || 'Dot all'}</span>
      </label>
    </div>
    
    <div class="editor-panel" style="margin-bottom: 24px">
      <div class="editor-header">
        <span class="editor-label">${tool.testStringLabel || 'Test string'}</span>
      </div>
      <textarea id="regex-test-input" class="editor" style="min-height: 120px" placeholder="${tool.testStringPlaceholder || 'Enter text to test against...'}"></textarea>
    </div>
    
    <div id="regex-error" class="error hidden" style="margin-bottom: 16px"></div>
    
    <div class="editor-panel" style="margin-bottom: 24px">
      <div class="editor-header">
        <span class="editor-label">${tool.matchesLabel || 'Matches'} (<span id="regex-match-count">0</span>)</span>
      </div>
      <div id="regex-highlighted" class="diff-output" style="min-height: 100px; font-family: 'JetBrains Mono', monospace;">
        <span style="color: var(--text-secondary)">${tool.matchesPlaceholder || 'Matches will be highlighted here...'}</span>
      </div>
    </div>
    
    <div class="editor-panel">
      <div class="editor-header">
        <span class="editor-label">${tool.matchDetailsLabel || 'Match details'}</span>
      </div>
      <div id="regex-match-list" style="color: var(--text-secondary); font-size: 14px">
        ${tool.noMatchesYet || 'No matches yet'}
      </div>
    </div>
  `
}

export function bindRegexTesterEvents() {
  const lang = getLang()
  const i18n = t(lang)
  const tool = i18n.tools.regex
  const patternInput = document.getElementById('regex-pattern') as HTMLInputElement
  const testInput = document.getElementById('regex-test-input') as HTMLTextAreaElement
  const errorDiv = document.getElementById('regex-error') as HTMLDivElement
  const highlightedDiv = document.getElementById('regex-highlighted') as HTMLDivElement
  const matchCountSpan = document.getElementById('regex-match-count') as HTMLSpanElement
  const matchListDiv = document.getElementById('regex-match-list') as HTMLDivElement
  const flagsDisplay = document.getElementById('regex-flags-display') as HTMLSpanElement
  
  const flags = ['g', 'i', 'm', 's']
  
  function getFlags(): string {
    return flags.filter(f => (document.getElementById(`flag-${f}`) as HTMLInputElement)?.checked).join('')
  }
  
  function updateFlagsDisplay() {
    if (flagsDisplay) flagsDisplay.textContent = getFlags()
  }
  
  function escapeHtml(text: string): string {
    return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  }
  
  function runRegex() {
    const pattern = patternInput?.value || ''
    const testStr = testInput?.value || ''
    const flagStr = getFlags()
    
    if (!pattern || !testStr) {
      highlightedDiv.innerHTML = '<span style="color: var(--text-secondary)">' + (tool.enterPatternAndString || 'Enter pattern and test string...') + '</span>'
      matchCountSpan.textContent = '0'
      matchListDiv.innerHTML = '<span style="color: var(--text-secondary)">' + (tool.noMatchesYet || 'No matches yet') + '</span>'
      errorDiv.classList.add('hidden')
      return
    }
    
    try {
      const regex = new RegExp(pattern, flagStr)
      const matches: { match: string; index: number; groups: string[] }[] = []
      let m: RegExpExecArray | null
      
      if (flagStr.includes('g')) {
        while ((m = regex.exec(testStr)) !== null) {
          matches.push({ match: m[0], index: m.index, groups: m.slice(1) })
          if (!m[0]) regex.lastIndex++
        }
      } else {
        m = regex.exec(testStr)
        if (m) matches.push({ match: m[0], index: m.index, groups: m.slice(1) })
      }
      
      // Highlight matches
      let highlighted = ''
      if (matches.length > 0) {
        let lastIdx = 0
        for (const match of matches) {
          if (match.index > lastIdx) {
            highlighted += escapeHtml(testStr.slice(lastIdx, match.index))
          }
          highlighted += `<mark style="background: var(--primary); color: white; padding: 1px 4px; border-radius: 3px;">${escapeHtml(match.match)}</mark>`
          lastIdx = match.index + match.match.length
        }
        if (lastIdx < testStr.length) {
          highlighted += escapeHtml(testStr.slice(lastIdx))
        }
      } else {
        highlighted = escapeHtml(testStr)
      }
      
      highlightedDiv.innerHTML = highlighted || '<span style="color: var(--text-secondary)">' + (tool.noMatches || 'No matches') + '</span>'
      matchCountSpan.textContent = matches.length.toString()
      errorDiv.classList.add('hidden')
      
      // Match details
      if (matches.length > 0) {
        matchListDiv.innerHTML = matches.map((m, i) => `
          <div style="display: flex; align-items: center; gap: 12px; padding: 8px 12px; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 6px; margin-bottom: 8px; font-size: 13px">
            <span style="color: var(--text-secondary); font-family: 'JetBrains Mono', monospace">#${i + 1}</span>
            <code style="font-family: 'JetBrains Mono', monospace; color: var(--primary)">"${escapeHtml(m.match)}"</code>
            <span style="color: var(--text-secondary)">index: ${m.index}</span>
            ${m.groups.length > 0 ? `<span style="color: var(--text-secondary)">groups: ${m.groups.map((g, j) => `$${j + 1}="${escapeHtml(g)}"`).join(', ')}</span>` : ''}
          </div>
        `).join('')
      } else {
        matchListDiv.innerHTML = '<span style="color: var(--text-secondary)">' + (tool.noMatches || 'No matches') + '</span>'
      }
    } catch (e: any) {
      errorDiv.textContent = e.message
      errorDiv.classList.remove('hidden')
      highlightedDiv.innerHTML = '<span style="color: var(--text-secondary)">' + (tool.invalidRegex || 'Invalid regex') + '</span>'
      matchCountSpan.textContent = '0'
      matchListDiv.innerHTML = '<span style="color: var(--text-secondary)">' + i18n.common.error + '</span>'
    }
  }
  
  // Bind events
  patternInput?.addEventListener('input', runRegex)
  testInput?.addEventListener('input', runRegex)
  
  flags.forEach(f => {
    const checkbox = document.getElementById(`flag-${f}`)
    checkbox?.addEventListener('change', () => {
      updateFlagsDisplay()
      runRegex()
    })
  })
  
  // Initial run
  updateFlagsDisplay()
}

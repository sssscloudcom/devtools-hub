// Markdown Editor Tool - Native JS Implementation
import { getLang, t } from '../i18n'

export function markdownEditor() {
  const lang = getLang()
  const i18n = t(lang)
  const tool = i18n.tools.markdown
  
  return `
    <div class="tool-header">
      <h1 class="tool-title">${tool.title}</h1>
      <p class="tool-desc">${tool.desc}</p>
    </div>
    
    <div style="display: flex; gap: 12px; margin-bottom: 16px; flex-wrap: wrap">
      <button class="btn-small" id="md-bold" title="Bold (Ctrl+B)"><strong>B</strong></button>
      <button class="btn-small" id="md-italic" title="Italic (Ctrl+I)"><em>I</em></button>
      <button class="btn-small" id="md-h1" title="Heading 1">H1</button>
      <button class="btn-small" id="md-h2" title="Heading 2">H2</button>
      <button class="btn-small" id="md-link" title="Link">🔗</button>
      <button class="btn-small" id="md-code" title="Code">{'<>'}</button>
      <button class="btn-small" id="md-list" title="List">• List</button>
      <button class="btn-small" id="md-quote" title="Quote">" Quote</button>
      <button class="btn-small" id="md-clear" title="Clear">${i18n.common.clear}</button>
    </div>
    
    <div class="tool-grid">
      <div class="editor-panel">
        <div class="editor-header">
          <span class="editor-label">${tool.editorLabel || 'Markdown'}</span>
          <button class="btn-small" onclick="navigator.clipboard.writeText(document.getElementById('md-input').value)" id="md-copy-btn">${i18n.common.copy}</button>
        </div>
        <textarea id="md-input" class="editor" style="min-height: 400px" placeholder="${tool.inputPlaceholder || 'Write your Markdown here...'}">## Welcome to Markdown Editor

This is a **live preview** editor.

### Features
- Real-time preview
- Basic formatting toolbar
- Copy to clipboard

\`\`\`javascript
console.log('Hello, Markdown!')
\`\`\`

> Blockquote example

[Visit GitHub](https://github.com)</textarea>
      </div>
      
      <div class="editor-panel">
        <div class="editor-header">
          <span class="editor-label">${tool.previewLabel || 'Preview'}</span>
        </div>
        <div id="md-preview" class="md-preview" style="min-height: 400px; overflow: auto"></div>
      </div>
    </div>
  `
}

export function bindMarkdownEditorEvents() {
  const input = document.getElementById('md-input') as HTMLTextAreaElement
  const preview = document.getElementById('md-preview') as HTMLDivElement
  
  // Simple Markdown parser
  function parseMarkdown(md: string): string {
    let html = md
    
    // Escape HTML
    html = html.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    
    // Code blocks
    html = html.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code class="language-$1">$2</code></pre>')
    
    // Inline code
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>')
    
    // Headers
    html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>')
    html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>')
    html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>')
    
    // Bold and Italic
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>')
    html = html.replace(/__([^_]+)__/g, '<strong>$1</strong>')
    html = html.replace(/_([^_]+)_/g, '<em>$1</em>')
    
    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
    
    // Lists
    html = html.replace(/^- (.+)$/gm, '<li>$1</li>')
    html = html.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    
    // Blockquote
    html = html.replace(/^&gt; (.+)$/gm, '<blockquote>$1</blockquote>')
    
    // Paragraphs
    html = html.replace(/\n\n/g, '</p><p>')
    html = '<p>' + html + '</p>'
    
    // Clean up empty paragraphs
    html = html.replace(/<p>\s*<\/p>/g, '')
    html = html.replace(/<p>\s*(<h[1-6]>)/g, '$1')
    html = html.replace(/(<\/h[1-6]>)\s*<\/p>/g, '$1')
    html = html.replace(/<p>\s*(<ul>)/g, '$1')
    html = html.replace(/(<\/ul>)\s*<\/p>/g, '$1')
    html = html.replace(/<p>\s*(<pre>)/g, '$1')
    html = html.replace(/(<\/pre>)\s*<\/p>/g, '$1')
    html = html.replace(/<p>\s*(<blockquote>)/g, '$1')
    html = html.replace(/(<\/blockquote>)\s*<\/p>/g, '$1')
    
    return html
  }
  
  function updatePreview() {
    preview.innerHTML = parseMarkdown(input.value)
  }
  
  function insertMarkdown(before: string, after: string = '') {
    const start = input.selectionStart
    const end = input.selectionEnd
    const selected = input.value.substring(start, end)
    const replacement = before + selected + after
    input.value = input.value.substring(0, start) + replacement + input.value.substring(end)
    input.selectionStart = start + before.length
    input.selectionEnd = start + before.length + selected.length
    input.focus()
    updatePreview()
  }
  
  // Toolbar buttons
  document.getElementById('md-bold')?.addEventListener('click', () => insertMarkdown('**', '**'))
  document.getElementById('md-italic')?.addEventListener('click', () => insertMarkdown('*', '*'))
  document.getElementById('md-h1')?.addEventListener('click', () => insertMarkdown('# '))
  document.getElementById('md-h2')?.addEventListener('click', () => insertMarkdown('## '))
  document.getElementById('md-link')?.addEventListener('click', () => insertMarkdown('[', '](url)'))
  document.getElementById('md-code')?.addEventListener('click', () => insertMarkdown('`', '`'))
  document.getElementById('md-list')?.addEventListener('click', () => insertMarkdown('- '))
  document.getElementById('md-quote')?.addEventListener('click', () => insertMarkdown('> '))
  document.getElementById('md-clear')?.addEventListener('click', () => {
    input.value = ''
    updatePreview()
  })
  
  // Keyboard shortcuts
  input?.addEventListener('keydown', (e) => {
    if (e.ctrlKey || e.metaKey) {
      switch (e.key.toLowerCase()) {
        case 'b':
          e.preventDefault()
          insertMarkdown('**', '**')
          break
        case 'i':
          e.preventDefault()
          insertMarkdown('*', '*')
          break
      }
    }
  })
  
  // Live preview
  input?.addEventListener('input', updatePreview)
  
  // Add styles for preview
  const style = document.createElement('style')
  style.textContent = `
    .md-preview h1 { font-size: 2em; font-weight: 700; margin: 0.67em 0; border-bottom: 1px solid var(--border); padding-bottom: 0.3em }
    .md-preview h2 { font-size: 1.5em; font-weight: 600; margin: 0.83em 0; border-bottom: 1px solid var(--border); padding-bottom: 0.3em }
    .md-preview h3 { font-size: 1.25em; font-weight: 600; margin: 1em 0 }
    .md-preview p { margin: 1em 0; line-height: 1.6 }
    .md-preview ul { margin: 1em 0; padding-left: 2em }
    .md-preview li { margin: 0.5em 0 }
    .md-preview code { background: var(--code-bg); color: var(--code-text); padding: 2px 6px; border-radius: 4px; font-family: 'JetBrains Mono', monospace; font-size: 0.9em }
    .md-preview pre { background: var(--code-bg); padding: 16px; border-radius: 8px; overflow-x: auto }
    .md-preview pre code { background: none; padding: 0 }
    .md-preview blockquote { border-left: 4px solid var(--primary); margin: 1em 0; padding: 0.5em 1em; background: var(--bg); color: var(--text-secondary) }
    .md-preview a { color: var(--primary); text-decoration: none }
    .md-preview a:hover { text-decoration: underline }
  `
  document.head.appendChild(style)
  
  // Initial preview
  updatePreview()
}

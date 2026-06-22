import { useState, useMemo } from 'react'

function markdownToHtml(md: string): string {
  let html = md
    // Code blocks
    .replace(/```(\w*)\n([\s\S]*?)```/g, '<pre class="bg-slate-800 text-slate-100 p-4 rounded-xl overflow-x-auto text-sm my-3"><code>$2</code></pre>')
    // Inline code
    .replace(/`([^`]+)`/g, '<code class="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm font-mono text-brand-500">$1</code>')
    // Headers
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-bold mt-4 mb-2">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-5 mb-2">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="text-2xl font-bold mt-6 mb-3">$1</h1>')
    // Bold & Italic
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-brand-500 hover:underline" target="_blank" rel="noopener">$1</a>')
    // Images
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="max-w-full rounded-xl my-3" />')
    // Horizontal rule
    .replace(/^---$/gm, '<hr class="my-6 border-slate-200 dark:border-slate-700" />')
    // Blockquote
    .replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-brand-500 pl-4 my-3 text-slate-600 dark:text-slate-400 italic">$1</blockquote>')
    // Unordered list
    .replace(/^- (.+)$/gm, '<li class="ml-4 list-disc">$1</li>')
    // Ordered list
    .replace(/^\d+\. (.+)$/gm, '<li class="ml-4 list-decimal">$1</li>')
    // Paragraphs (lines that aren't already tagged)
    .replace(/^(?!<[hbluoip]|<li|<hr|<pre|<code|<blockquote|<strong|<em|<a |<img)(.+)$/gm, '<p class="my-1">$1</p>')
    // Line breaks
    .replace(/\n\n/g, '\n')

  return html
}

const sampleMd = `# Markdown Editor

A **live preview** markdown editor.

## Features

- Format text with *italic* and **bold**
- Create [links](https://example.com)
- Write \`inline code\`

### Code Block

\`\`\`javascript
const greeting = "Hello, World!"
console.log(greeting)
\`\`\`

> This is a blockquote

---

1. First item
2. Second item
3. Third item`

export default function MarkdownEditor() {
  const [md, setMd] = useState(sampleMd)

  const html = useMemo(() => markdownToHtml(md), [md])

  const copyHtml = () => {
    navigator.clipboard.writeText(html)
  }

  return (
    <div>
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold">Markdown Editor</h1>
          <p className="text-slate-500 mt-1">Write markdown with live preview</p>
        </div>
        <button onClick={copyHtml} className="btn-secondary text-sm">Copy HTML</button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Editor */}
        <div>
          <label className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 block">Markdown</label>
          <textarea
            value={md}
            onChange={(e) => setMd(e.target.value)}
            className="input-field min-h-[500px] resize-y"
            placeholder="Write your markdown here..."
            spellCheck={false}
          />
        </div>

        {/* Preview */}
        <div>
          <label className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 block">Preview</label>
          <div
            className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 min-h-[500px] overflow-auto prose-sm"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
  )
}
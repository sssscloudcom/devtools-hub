// UUID Generator Tool
import { getLang, t } from '../i18n'

export function uuidGenerator(this: any) {
  const lang = getLang()
  const i18n = t(lang)
  const tool = i18n.tools.uuid
  
  return `
    <div class="tool-header">
      <h1 class="tool-title">${tool.title}</h1>
      <p class="tool-desc">${tool.desc}</p>
    </div>
    <div class="uuid-options" style="margin-bottom: 24px">
      <label style="display: flex; align-items: center; gap: 12px">
        <span class="editor-label">${tool.countLabel}</span>
        <input type="number" id="uuid-count" class="input-text" style="width: 80px" value="5" min="1" max="100">
      </label>
    </div>
    <div class="tool-actions">
      <button id="uuid-generate" class="btn-primary">${tool.generate}</button>
      <button id="uuid-copy-all" class="btn-secondary">${tool.copyAll}</button>
    </div>
    <div class="editor-panel" style="margin-top: 24px">
      <div class="editor-header">
        <span class="editor-label">${tool.outputLabel}</span>
        <button class="btn-small" onclick="document.getElementById('uuid-output').value=''">${i18n.common.clear}</button>
      </div>
      <textarea id="uuid-output" class="editor output" style="height: 300px" readonly placeholder="${tool.outputPlaceholder}"></textarea>
    </div>
  `
}

export function bindUuidGeneratorEvents(router: any) {
  const countInput = document.getElementById('uuid-count') as HTMLInputElement
  const output = document.getElementById('uuid-output') as HTMLTextAreaElement
  const generateBtn = document.getElementById('uuid-generate')
  const copyAllBtn = document.getElementById('uuid-copy-all')
  
  // Generate UUID v4
  function generateUuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = Math.random() * 16 | 0
      const v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  }
  
  generateBtn?.addEventListener('click', () => {
    const count = parseInt(countInput.value) || 5
    const uuids = []
    for (let i = 0; i < Math.min(count, 100); i++) {
      uuids.push(generateUuid())
    }
    output.value = uuids.join('\n')
  })
  
  copyAllBtn?.addEventListener('click', async () => {
    const text = output.value
    if (!text.trim()) return
    try {
      await navigator.clipboard.writeText(text)
      const originalText = copyAllBtn.textContent
      copyAllBtn.textContent = '已复制!'
      setTimeout(() => {
        copyAllBtn.textContent = originalText
      }, 1500)
    } catch (e) {
      console.error('Copy failed:', e)
    }
  })
}
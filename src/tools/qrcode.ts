// QR Code Generator Tool
import { getLang, t } from '../i18n'

export function qrCodeGenerator(this: any) {
  const lang = getLang()
  const i18n = t(lang)
  const tool = i18n.tools.qrcode
  
  return `
    <div class="tool-header">
      <h1 class="tool-title">${tool.title}</h1>
      <p class="tool-desc">${tool.desc}</p>
    </div>
    <div class="editor-panel">
      <div class="editor-header">
        <span class="editor-label">${tool.inputLabel}</span>
      </div>
      <textarea id="qr-input" class="editor" style="height: 100px" placeholder="${tool.inputPlaceholder}"></textarea>
    </div>
    <div class="qr-options" style="margin: 16px 0; display: flex; gap: 16px; align-items: center">
      <label style="display: flex; align-items: center; gap: 8px">
        <span class="editor-label">${tool.sizeLabel}</span>
        <select id="qr-size" class="select">
          <option value="128">128px</option>
          <option value="256" selected>256px</option>
          <option value="512">512px</option>
        </select>
      </label>
      <label style="display: flex; align-items: center; gap: 8px">
        <span class="editor-label">${tool.colorLabel}</span>
        <input type="color" id="qr-color" value="#000000" style="width: 40px; height: 32px; border: 1px solid var(--border); border-radius: 4px">
      </label>
    </div>
    <div class="tool-actions">
      <button id="qr-generate" class="btn-primary">${tool.generate}</button>
      <button id="qr-download" class="btn-secondary">${tool.download}</button>
    </div>
    <div class="qr-output" style="margin-top: 24px; text-align: center">
      <div style="background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 8px; padding: 32px; display: inline-block">
        <canvas id="qr-canvas" style="display: none"></canvas>
        <img id="qr-image" style="display: none; border-radius: 8px">
        <p id="qr-placeholder" style="color: var(--text-secondary); padding: 64px">${tool.placeholder}</p>
      </div>
    </div>
  `
}

export function bindQrCodeGeneratorEvents(router: any) {
  const qrInput = document.getElementById('qr-input') as HTMLTextAreaElement
  const qrSize = document.getElementById('qr-size') as HTMLSelectElement
  const qrColor = document.getElementById('qr-color') as HTMLInputElement
  const qrCanvas = document.getElementById('qr-canvas') as HTMLCanvasElement
  const qrImage = document.getElementById('qr-image') as HTMLImageElement
  const qrPlaceholder = document.getElementById('qr-placeholder') as HTMLParagraphElement
  const generateBtn = document.getElementById('qr-generate')
  const downloadBtn = document.getElementById('qr-download')
  
  // Simple QR Code generator (using canvas)
  function generateQRCode(text: string, size: number, color: string): boolean {
    if (!text) return false
    
    // Use external QR code library via CDN (qrcode-generator)
    // For simplicity, we'll use a basic implementation
    // In production, use a proper library like qrcode.js
    
    // Fallback: use QR code API
    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}&color=${color.slice(1)}&bgcolor=ffffff`
    
    qrImage.src = apiUrl
    qrImage.style.display = 'block'
    qrImage.width = size
    qrImage.height = size
    qrPlaceholder.style.display = 'none'
    qrCanvas.style.display = 'none'
    
    return true
  }
  
  generateBtn?.addEventListener('click', () => {
    const text = qrInput.value.trim()
    if (!text) {
      alert('Please enter text or URL')
      return
    }
    
    const size = parseInt(qrSize.value)
    const color = qrColor.value
    
    generateQRCode(text, size, color)
  })
  
  downloadBtn?.addEventListener('click', () => {
    if (qrImage.style.display === 'none') {
      alert('Generate QR code first')
      return
    }
    
    const link = document.createElement('a')
    link.download = 'qrcode.png'
    link.href = qrImage.src
    link.click()
  })
  
  // Auto-generate on input change
  qrInput.addEventListener('input', () => {
    const text = qrInput.value.trim()
    if (text.length > 0) {
      const size = parseInt(qrSize.value)
      const color = qrColor.value
      generateQRCode(text, size, color)
    }
  })
}
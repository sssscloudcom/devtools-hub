// JWT Decoder Tool
import { getLang, t } from '../i18n'

export function jwtDecoder(this: any) {
  const lang = getLang()
  const i18n = t(lang)
  const tool = i18n.tools.jwt
  
  return `
    <div class="tool-header">
      <h1 class="tool-title">${tool.title}</h1>
      <p class="tool-desc">${tool.desc}</p>
    </div>
    <div class="editor-panel">
      <div class="editor-header">
        <span class="editor-label">${tool.inputLabel}</span>
        <button class="btn-small" onclick="document.getElementById('jwt-input').value='';document.getElementById('jwt-header').value='';document.getElementById('jwt-payload').value='';document.getElementById('jwt-signature').value=''">${i18n.common.clear}</button>
      </div>
      <textarea id="jwt-input" class="editor" style="height: 150px" placeholder="${tool.inputPlaceholder}"></textarea>
    </div>
    <div class="tool-actions">
      <button id="jwt-decode" class="btn-primary">${tool.decode}</button>
    </div>
    <div class="jwt-output" style="margin-top: 24px">
      <div class="jwt-section">
        <div class="editor-header">
          <span class="editor-label">${tool.headerLabel}</span>
          <button class="btn-small" onclick="navigator.clipboard.writeText(document.getElementById('jwt-header').value)">${i18n.common.copy}</button>
        </div>
        <textarea id="jwt-header" class="editor output" style="height: 120px" readonly placeholder="${tool.headerPlaceholder}"></textarea>
      </div>
      <div class="jwt-section" style="margin-top: 16px">
        <div class="editor-header">
          <span class="editor-label">${tool.payloadLabel}</span>
          <button class="btn-small" onclick="navigator.clipboard.writeText(document.getElementById('jwt-payload').value)">${i18n.common.copy}</button>
        </div>
        <textarea id="jwt-payload" class="editor output" style="height: 180px" readonly placeholder="${tool.payloadPlaceholder}"></textarea>
      </div>
      <div class="jwt-section" style="margin-top: 16px">
        <div class="editor-header">
          <span class="editor-label">${tool.signatureLabel}</span>
        </div>
        <input id="jwt-signature" class="input-text output" readonly placeholder="${tool.signaturePlaceholder}">
      </div>
    </div>
  `
}

export function bindJwtDecoderEvents(router: any) {
  const lang = getLang()
  const i18n = t(lang)
  const jwtInput = document.getElementById('jwt-input') as HTMLTextAreaElement
  const jwtHeader = document.getElementById('jwt-header') as HTMLTextAreaElement
  const jwtPayload = document.getElementById('jwt-payload') as HTMLTextAreaElement
  const jwtSignature = document.getElementById('jwt-signature') as HTMLInputElement
  const decodeBtn = document.getElementById('jwt-decode')
  
  decodeBtn?.addEventListener('click', () => {
    const token = jwtInput.value.trim()
    if (!token) return
    
    try {
      const parts = token.split('.')
      if (parts.length !== 3) {
        throw new Error(i18n.common.invalidJwt)
      }
      
      // Decode header
      const header = JSON.parse(atob(parts[0]))
      jwtHeader.value = JSON.stringify(header, null, 2)
      
      // Decode payload
      const payload = JSON.parse(atob(parts[1]))
      jwtPayload.value = JSON.stringify(payload, null, 2)
      
      // Signature (base64)
      jwtSignature.value = parts[2]
      
    } catch (e: any) {
      jwtHeader.value = ''
      jwtPayload.value = ''
      jwtSignature.value = ''
      alert(i18n.common.error + ': ' + e.message)
    }
  })
}
// Color Converter Tool - Native JS Implementation
import { getLang, t } from '../i18n'

export function colorConverter() {
  const lang = getLang()
  const i18n = t(lang)
  const tool = i18n.tools.color
  
  return `
    <div class="tool-header">
      <h1 class="tool-title">${tool.title}</h1>
      <p class="tool-desc">${tool.desc}</p>
    </div>
    
    <div class="editor-panel" style="margin-bottom: 24px">
      <div class="editor-header">
        <span class="editor-label">${tool.colorPicker || 'Color Picker'}</span>
      </div>
      <div style="display: flex; align-items: center; gap: 16px">
        <input type="color" id="color-picker" value="#3b82f6" style="width: 80px; height: 60px; border: 2px solid var(--border); border-radius: 8px; cursor: pointer">
        <div id="color-preview" style="flex: 1; height: 60px; background: #3b82f6; border-radius: 8px; border: 1px solid var(--border)"></div>
      </div>
    </div>
    
    <div class="tool-grid" style="margin-bottom: 24px">
      <div class="editor-panel">
        <div class="editor-header">
          <span class="editor-label">${tool.hex || 'HEX'}</span>
          <button class="btn-small" onclick="navigator.clipboard.writeText(document.getElementById('color-hex').value)">${i18n.common.copy}</button>
        </div>
        <input id="color-hex" type="text" class="input-text" style="font-family: 'JetBrains Mono', monospace" value="#3b82f6" placeholder="#RRGGBB">
      </div>
      
      <div class="editor-panel">
        <div class="editor-header">
          <span class="editor-label">${tool.rgb || 'RGB'}</span>
          <button class="btn-small" onclick="navigator.clipboard.writeText(document.getElementById('color-rgb').value)">${i18n.common.copy}</button>
        </div>
        <input id="color-rgb" type="text" class="input-text" style="font-family: 'JetBrains Mono', monospace" value="rgb(59, 130, 246)" placeholder="rgb(r, g, b)">
      </div>
      
      <div class="editor-panel">
        <div class="editor-header">
          <span class="editor-label">${tool.hsl || 'HSL'}</span>
          <button class="btn-small" onclick="navigator.clipboard.writeText(document.getElementById('color-hsl').value)">${i18n.common.copy}</button>
        </div>
        <input id="color-hsl" type="text" class="input-text" style="font-family: 'JetBrains Mono', monospace" value="hsl(217, 91%, 60%)" placeholder="hsl(h, s%, l%)">
      </div>
      
      <div class="editor-panel">
        <div class="editor-header">
          <span class="editor-label">${tool.rgba || 'RGBA'}</span>
          <button class="btn-small" onclick="navigator.clipboard.writeText(document.getElementById('color-rgba').value)">${i18n.common.copy}</button>
        </div>
        <input id="color-rgba" type="text" class="input-text" style="font-family: 'JetBrains Mono', monospace" value="rgba(59, 130, 246, 1)" placeholder="rgba(r, g, b, a)">
      </div>
    </div>
    
    <div class="editor-panel" style="margin-bottom: 24px">
      <div class="editor-header">
        <span class="editor-label">${tool.alpha || 'Alpha (Opacity)'}</span>
      </div>
      <input type="range" id="color-alpha" min="0" max="100" value="100" style="width: 100%">
      <div style="display: flex; justify-content: space-between; font-size: 13px; color: var(--text-secondary); margin-top: 4px">
        <span>0%</span>
        <span id="color-alpha-value">100%</span>
      </div>
    </div>
    
    <div class="editor-panel">
      <div class="editor-header">
        <span class="editor-label">${tool.cssVariables || 'CSS Variables'}</span>
      </div>
      <textarea id="color-css-vars" class="editor output" style="min-height: 80px" readonly></textarea>
    </div>
  `
}

export function bindColorConverterEvents() {
  const picker = document.getElementById('color-picker') as HTMLInputElement
  const preview = document.getElementById('color-preview') as HTMLDivElement
  const hexInput = document.getElementById('color-hex') as HTMLInputElement
  const rgbInput = document.getElementById('color-rgb') as HTMLInputElement
  const hslInput = document.getElementById('color-hsl') as HTMLInputElement
  const rgbaInput = document.getElementById('color-rgba') as HTMLInputElement
  const alphaSlider = document.getElementById('color-alpha') as HTMLInputElement
  const alphaValue = document.getElementById('color-alpha-value') as HTMLSpanElement
  const cssVars = document.getElementById('color-css-vars') as HTMLTextAreaElement
  
  let currentColor = { r: 59, g: 130, b: 246 }
  let alpha = 1
  
  function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }
  
  function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
    r /= 255; g /= 255; b /= 255
    const max = Math.max(r, g, b), min = Math.min(r, g, b)
    let h = 0, s = 0
    const l = (max + min) / 2
    
    if (max !== min) {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
        case g: h = ((b - r) / d + 2) / 6; break
        case b: h = ((r - g) / d + 4) / 6; break
      }
    }
    
    return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) }
  }
  
  function updateAll() {
    const { r, g, b } = currentColor
    const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`
    const hsl = rgbToHsl(r, g, b)
    
    picker.value = hex
    preview.style.background = `rgba(${r}, ${g}, ${b}, ${alpha})`
    hexInput.value = hex
    rgbInput.value = `rgb(${r}, ${g}, ${b})`
    hslInput.value = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
    rgbaInput.value = `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(2)})`
    
    cssVars.value = `--color-primary: ${hex};
--color-primary-rgb: ${r}, ${g}, ${b};
--color-primary-hsl: ${hsl.h}, ${hsl.s}%, ${hsl.l}%;
--color-primary-rgba: rgba(${r}, ${g}, ${b}, ${alpha.toFixed(2)});`
  }
  
  picker?.addEventListener('input', (e) => {
    const hex = (e.target as HTMLInputElement).value
    const rgb = hexToRgb(hex)
    if (rgb) {
      currentColor = rgb
      updateAll()
    }
  })
  
  hexInput?.addEventListener('input', (e) => {
    const hex = (e.target as HTMLInputElement).value
    const rgb = hexToRgb(hex)
    if (rgb) {
      currentColor = rgb
      updateAll()
    }
  })
  
  alphaSlider?.addEventListener('input', (e) => {
    alpha = parseInt((e.target as HTMLInputElement).value) / 100
    alphaValue.textContent = `${Math.round(alpha * 100)}%`
    updateAll()
  })
  
  // Initial update
  updateAll()
}
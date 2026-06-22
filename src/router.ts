import { getLang, t } from './i18n'
import { regexTester, bindRegexTesterEvents } from './tools/regex'
import { colorConverter, bindColorConverterEvents } from './tools/color'
import { unitConverter, bindUnitConverterEvents } from './tools/unit'
import { markdownEditor, bindMarkdownEditorEvents } from './tools/markdown'

// HTML转义函数
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export class Router {
  routes: Record<string, Function> = {}
  private boundEvents: Set<string> = new Set() // 跟踪已绑定的事件
  private timestampInterval: number | null = null // 时间戳定时器

  constructor() {
    this.routes = {
      '/': this.home,
      '/json': this.jsonFormatter,
      '/xml': this.xmlFormatter,
      '/base64': this.base64,
      '/url': this.urlEncoder,
      '/hash': this.hash,
      '/timestamp': this.timestamp,
      '/diff': this.diff,
      '/regex': this.regexTester,
      '/color': this.colorConverter,
      '/unit': this.unitConverter,
      '/markdown': this.markdownEditor,
    }
  }

  init() {
    window.addEventListener('popstate', () => {
      this.render()
    })
  }

  render() {
    const path = window.location.pathname
    const content = document.getElementById('content')!
    const handler = this.routes[path] || this.routes['/']
    content.innerHTML = handler.call(this)
    this.bindEvents()
  }

  private cleanup() {
    // 清理时间戳定时器
    if (this.timestampInterval) {
      clearInterval(this.timestampInterval)
      this.timestampInterval = null
    }
  }

  private bindOnce(id: string, event: string, handler: () => void) {
    const key = `${id}:${event}`
    if (!this.boundEvents.has(key)) {
      const el = document.getElementById(id)
      if (el) {
        el.addEventListener(event, handler)
        this.boundEvents.add(key)
      }
    }
  }

  bindEvents() {
    const lang = getLang()
    const i18n = t(lang)
    
    // JSON Formatter
    const jsonInput = document.getElementById('json-input') as HTMLTextAreaElement
    const jsonOutput = document.getElementById('json-output') as HTMLTextAreaElement
    const jsonError = document.getElementById('json-error') as HTMLDivElement

    document.getElementById('format-btn')?.addEventListener('click', () => {
      if (!jsonInput.value.trim()) return
      try {
        const parsed = JSON.parse(jsonInput.value)
        jsonOutput.value = JSON.stringify(parsed, null, 2)
        jsonError.textContent = ''
        jsonError.classList.add('hidden')
      } catch (e: any) {
        jsonError.textContent = e.message
        jsonError.classList.remove('hidden')
      }
    })

    document.getElementById('minify-btn')?.addEventListener('click', () => {
      if (!jsonInput.value.trim()) return
      try {
        const parsed = JSON.parse(jsonInput.value)
        jsonOutput.value = JSON.stringify(parsed)
        jsonError.textContent = ''
        jsonError.classList.add('hidden')
      } catch (e: any) {
        jsonError.textContent = e.message
        jsonError.classList.remove('hidden')
      }
    })

    document.getElementById('copy-btn')?.addEventListener('click', () => {
      if (jsonOutput?.value) {
        navigator.clipboard.writeText(jsonOutput.value)
        const btn = document.getElementById('copy-btn')!
        btn.textContent = i18n.common.copied
        setTimeout(() => btn.textContent = i18n.common.copy, 2000)
      }
    })

    document.getElementById('clear-btn')?.addEventListener('click', () => {
      jsonInput.value = ''
      jsonOutput.value = ''
      jsonError.textContent = ''
      jsonError.classList.add('hidden')
    })

    // Base64
    const base64Input = document.getElementById('base64-input') as HTMLTextAreaElement
    const base64Output = document.getElementById('base64-output') as HTMLTextAreaElement
    const base64Mode = document.getElementById('base64-mode') as HTMLSelectElement

    document.getElementById('base64-process')?.addEventListener('click', () => {
      if (!base64Input.value.trim()) return
      try {
        if (base64Mode.value === 'encode') {
          base64Output.value = btoa(unescape(encodeURIComponent(base64Input.value)))
        } else {
          base64Output.value = decodeURIComponent(escape(atob(base64Input.value)))
        }
      } catch (e: any) {
        base64Output.value = 'Error: ' + e.message
      }
    })

    // URL Encoder
    const urlInput = document.getElementById('url-input') as HTMLTextAreaElement
    const urlOutput = document.getElementById('url-output') as HTMLTextAreaElement
    const urlMode = document.getElementById('url-mode') as HTMLSelectElement

    document.getElementById('url-process')?.addEventListener('click', () => {
      if (!urlInput.value.trim()) return
      try {
        urlOutput.value = urlMode.value === 'encode' 
          ? encodeURIComponent(urlInput.value)
          : decodeURIComponent(urlInput.value)
      } catch (e: any) {
        urlOutput.value = 'Error: ' + e.message
      }
    })

    // Hash
    const hashInput = document.getElementById('hash-input') as HTMLTextAreaElement
    const hashSha256Btn = document.getElementById('hash-sha256') as HTMLButtonElement
    const hashSha1Btn = document.getElementById('hash-sha1') as HTMLButtonElement
    
    const setHashButtonActive = (active: 'sha256' | 'sha1') => {
      if (hashSha256Btn && hashSha1Btn) {
        if (active === 'sha256') {
          hashSha256Btn.className = 'btn-primary'
          hashSha1Btn.className = 'btn-secondary'
        } else {
          hashSha256Btn.className = 'btn-secondary'
          hashSha1Btn.className = 'btn-primary'
        }
      }
    }
    
    document.getElementById('hash-sha256')?.addEventListener('click', async () => {
      if (!hashInput.value.trim()) return
      setHashButtonActive('sha256')
      const msgBuffer = new TextEncoder().encode(hashInput.value)
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)
      const hashArray = Array.from(new Uint8Array(hashBuffer))
      const hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
      ;(document.getElementById('hash-output') as HTMLTextAreaElement).value = hash
    })

    document.getElementById('hash-sha1')?.addEventListener('click', async () => {
      if (!hashInput.value.trim()) return
      setHashButtonActive('sha1')
      const msgBuffer = new TextEncoder().encode(hashInput.value)
      const hashBuffer = await crypto.subtle.digest('SHA-1', msgBuffer)
      const hashArray = Array.from(new Uint8Array(hashBuffer))
      const hash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
      ;(document.getElementById('hash-output') as HTMLTextAreaElement).value = hash
    })

    // Timestamp
    this.cleanup() // 清理之前的定时器
    const updateTs = () => {
      const ts = Math.floor(Date.now() / 1000)
      const el = document.getElementById('current-ts')
      if (el) el.textContent = ts.toString()
    }
    if (document.getElementById('current-ts')) {
      updateTs()
      this.timestampInterval = setInterval(updateTs, 1000)
    }

    const tsInput = document.getElementById('ts-input') as HTMLInputElement
    document.getElementById('ts-to-date')?.addEventListener('click', () => {
      const d = new Date(parseInt(tsInput.value) * 1000)
      ;(document.getElementById('ts-output') as HTMLInputElement).value = d.toISOString()
    })

    const dateInput = document.getElementById('ts-output') as HTMLInputElement
    document.getElementById('date-to-ts')?.addEventListener('click', () => {
      const d = new Date(dateInput.value)
      tsInput.value = Math.floor(d.getTime() / 1000).toString()
    })

    // XML Formatter
    const xmlInput = document.getElementById('xml-input') as HTMLTextAreaElement
    const xmlOutput = document.getElementById('xml-output') as HTMLTextAreaElement
    const xmlError = document.getElementById('xml-error') as HTMLDivElement

    document.getElementById('xml-format-btn')?.addEventListener('click', () => {
      if (!xmlInput.value.trim()) return
      try {
        // 使用DOMParser解析XML
        const parser = new DOMParser()
        const xmlDoc = parser.parseFromString(xmlInput.value, 'text/xml')
        
        // 检查解析错误
        const parseError = xmlDoc.querySelector('parsererror')
        if (parseError) {
          throw new Error('Invalid XML: ' + parseError.textContent?.substring(0, 100))
        }
        
        // 格式化XML
        const formatXml = (node: Element, indent: number = 0): string => {
          const spaces = '  '.repeat(indent)
          let result = ''
          
          // 处理元素节点
          if (node.nodeType === Node.ELEMENT_NODE) {
            result += spaces + '<' + node.nodeName
            
            // 添加属性
            if (node.attributes.length > 0) {
              for (let i = 0; i < node.attributes.length; i++) {
                const attr = node.attributes[i]
                result += ' ' + attr.name + '="' + attr.value + '"'
              }
            }
            
            // 处理子节点
            const children = Array.from(node.childNodes)
            const hasElementChildren = children.some(c => c.nodeType === Node.ELEMENT_NODE)
            const hasTextContent = children.some(c => c.nodeType === Node.TEXT_NODE && c.textContent?.trim())
            
            if (children.length === 0) {
              result += ' />\n'
            } else if (!hasElementChildren && hasTextContent) {
              // 只有文本内容
              result += '>' + node.textContent?.trim() + '</' + node.nodeName + '>\n'
            } else {
              result += '>\n'
              for (const child of children) {
                if (child.nodeType === Node.ELEMENT_NODE) {
                  result += formatXml(child as Element, indent + 1)
                }
              }
              result += spaces + '</' + node.nodeName + '>\n'
            }
          }
          
          return result
        }
        
        // 处理XML声明
        let xmlDeclaration = ''
        if (xmlInput.value.trim().startsWith('<?xml')) {
          const match = xmlInput.value.match(/<\?xml[^>]*\?>/)
          if (match) xmlDeclaration = match[0] + '\n'
        }
        
        xmlOutput.value = xmlDeclaration + formatXml(xmlDoc.documentElement)
        const copyBtn = document.getElementById('xml-copy-btn')
        if (copyBtn) copyBtn.textContent = i18n.common.copy
      } catch (e: any) {
        xmlOutput.value = 'Error: ' + e.message
      }
    })

    document.getElementById('xml-minify-btn')?.addEventListener('click', () => {
      if (!xmlInput.value.trim()) return
      try {
        // 移除多余空格和换行
        const xml = xmlInput.value.trim()
        const minified = xml.replace(/\s+/g, ' ').replace(/\s*</g, '<').replace(/\s*>/g, '>').replace(/<\s+/g, '<').replace(/>\s+/g, '>')
        xmlOutput.value = minified
      } catch (e: any) {
        xmlOutput.value = 'Error: ' + e.message
      }
    })

    // Diff Tool
    const diffInput1 = document.getElementById('diff-input1') as HTMLTextAreaElement
    const diffInput2 = document.getElementById('diff-input2') as HTMLTextAreaElement
    const diffOutput = document.getElementById('diff-output') as HTMLDivElement

    document.getElementById('diff-compare-btn')?.addEventListener('click', () => {
      if (!diffInput1.value.trim() || !diffInput2.value.trim()) return
      
      const lines1 = diffInput1.value.split('\n')
      const lines2 = diffInput2.value.split('\n')
      const maxLen = Math.max(lines1.length, lines2.length)
      
      let result = ''
      for (let i = 0; i < maxLen; i++) {
        const l1 = lines1[i] || ''
        const l2 = lines2[i] || ''
        
        if (l1 === l2) {
          result += `<div class="diff-line diff-same">${escapeHtml(l1) || '&nbsp;'}</div>`
        } else {
          if (l1) result += `<div class="diff-line diff-removed">- ${escapeHtml(l1)}</div>`
          if (l2) result += `<div class="diff-line diff-added">+ ${escapeHtml(l2)}</div>`
        }
      }
      
      diffOutput.innerHTML = result || '<span style="color: var(--text-secondary)">No differences found</span>'
    })
    
    // New tools
    if (window.location.pathname === '/regex') bindRegexTesterEvents(this)
    if (window.location.pathname === '/color') bindColorConverterEvents(this)
    if (window.location.pathname === '/unit') bindUnitConverterEvents(this)
    if (window.location.pathname === '/markdown') bindMarkdownEditorEvents(this)
  }

  home() {
    const lang = getLang()
    const i18n = t(lang)
    const tools = [
      { name: i18n.nav.jsonFormatter, path: '/json', icon: '{ }', desc: i18n.tools.jsonFormatter.desc.substring(0, 60) + '...' },
      { name: i18n.nav.xmlFormatter, path: '/xml', icon: '< >', desc: i18n.tools.xmlFormatter.desc },
      { name: i18n.nav.base64, path: '/base64', icon: '🔤', desc: i18n.tools.base64.desc },
      { name: i18n.nav.urlEncoder, path: '/url', icon: '🔗', desc: i18n.tools.urlEncoder.desc },
      { name: i18n.nav.hash, path: '/hash', icon: '#️⃣', desc: i18n.tools.hash.desc },
      { name: i18n.nav.timestamp, path: '/timestamp', icon: '⏰', desc: i18n.tools.timestamp.desc },
      { name: i18n.nav.diff, path: '/diff', icon: '📊', desc: i18n.tools.diff.desc },
      { name: i18n.nav.regex, path: '/regex', icon: '.*', desc: i18n.tools.regex.desc },
      { name: i18n.nav.color, path: '/color', icon: '🎨', desc: i18n.tools.color.desc },
      { name: i18n.nav.unit, path: '/unit', icon: '📐', desc: i18n.tools.unit.desc },
      { name: i18n.nav.markdown, path: '/markdown', icon: '📝', desc: i18n.tools.markdown.desc },
    ]
    
    return `
      <div class="home-hero">
        <h1 class="home-title">${i18n.siteName}</h1>
        <p class="home-desc">${i18n.siteDesc}</p>
      </div>
      
      <div class="tools-grid">
        ${tools.map(tool => `
          <a href="${tool.path}${window.location.search}" class="tool-card">
            <div class="tool-card-icon">${tool.icon}</div>
            <h3 class="tool-card-title">${tool.name}</h3>
            <p class="tool-card-desc">${tool.desc}</p>
          </a>
        `).join('')}
      </div>
    `
  }

  jsonFormatter() {
    const lang = getLang()
    const i18n = t(lang)
    const tool = i18n.tools.jsonFormatter
    
    return `
      <div class="tool-header">
        <h1 class="tool-title">${tool.title}</h1>
        <p class="tool-desc">${tool.desc}</p>
      </div>
      
      <div class="tool-grid">
        <div class="editor-panel">
          <div class="editor-header">
            <span class="editor-label">${tool.inputLabel}</span>
            <button class="btn-small" onclick="document.getElementById('json-input').value='';document.getElementById('json-output').value='';document.getElementById('json-error').classList.add('hidden')">${i18n.common.clear}</button>
          </div>
          <textarea id="json-input" class="editor" placeholder='${tool.inputPlaceholder}'></textarea>
        </div>
        
        <div class="editor-panel">
          <div class="editor-header">
            <span class="editor-label">${tool.outputLabel}</span>
            <button id="copy-btn" class="btn-small">${i18n.common.copy}</button>
          </div>
          <div id="json-error" class="error hidden"></div>
          <textarea id="json-output" class="editor output" readonly placeholder='${tool.outputPlaceholder}'></textarea>
        </div>
      </div>
      
      <div class="tool-actions">
        <button id="format-btn" class="btn-primary">${i18n.common.format}</button>
        <button id="minify-btn" class="btn-secondary">${i18n.common.minify}</button>
      </div>
    `
  }

  xmlFormatter() {
    const lang = getLang()
    const i18n = t(lang)
    
    return `
      <div class="tool-header">
        <h1 class="tool-title">${i18n.tools.xmlFormatter.title}</h1>
        <p class="tool-desc">${i18n.tools.xmlFormatter.desc}</p>
      </div>
      
      <div class="tool-grid">
        <div class="editor-panel">
          <div class="editor-header">
            <span class="editor-label">${i18n.common.input}</span>
            <button class="btn-small" onclick="document.getElementById('xml-input').value='';document.getElementById('xml-output').value=''">${i18n.common.clear}</button>
          </div>
          <textarea id="xml-input" class="editor" placeholder="Paste your XML here..."></textarea>
        </div>
        
        <div class="editor-panel">
          <div class="editor-header">
            <span class="editor-label">${i18n.common.output}</span>
            <button class="btn-small" onclick="navigator.clipboard.writeText(document.getElementById('xml-output').value)" id="xml-copy-btn">${i18n.common.copy}</button>
          </div>
          <textarea id="xml-output" class="editor output" readonly placeholder="Formatted XML will appear here..."></textarea>
        </div>
      </div>
      
      <div class="tool-actions">
        <button id="xml-format-btn" class="btn-primary">${i18n.common.format}</button>
        <button id="xml-minify-btn" class="btn-secondary">${i18n.common.minify}</button>
      </div>
    `
  }

  base64() {
    const lang = getLang()
    const i18n = t(lang)
    const tool = i18n.tools.base64
    
    return `
      <div class="tool-header">
        <h1 class="tool-title">${tool.title}</h1>
        <p class="tool-desc">${tool.desc}</p>
      </div>
      
      <div class="tool-grid">
        <div class="editor-panel">
          <div class="editor-header">
            <span class="editor-label">${i18n.common.input}</span>
            <select id="base64-mode" class="select">
              <option value="encode">${tool.encode}</option>
              <option value="decode">${tool.decode}</option>
            </select>
          </div>
          <textarea id="base64-input" class="editor" placeholder='${tool.inputPlaceholder}'></textarea>
        </div>
        
        <div class="editor-panel">
          <div class="editor-header">
            <span class="editor-label">${i18n.common.output}</span>
            <button class="btn-small" onclick="navigator.clipboard.writeText(document.getElementById('base64-output').value)">${i18n.common.copy}</button>
          </div>
          <textarea id="base64-output" class="editor output" readonly placeholder='${tool.outputPlaceholder}'></textarea>
        </div>
      </div>
      
      <div class="tool-actions">
        <button id="base64-process" class="btn-primary">${i18n.common.process}</button>
      </div>
    `
  }

  urlEncoder() {
    const lang = getLang()
    const i18n = t(lang)
    
    return `
      <div class="tool-header">
        <h1 class="tool-title">${i18n.tools.urlEncoder.title}</h1>
        <p class="tool-desc">${i18n.tools.urlEncoder.desc}</p>
      </div>
      
      <div class="tool-grid">
        <div class="editor-panel">
          <div class="editor-header">
            <span class="editor-label">${i18n.common.input}</span>
            <select id="url-mode" class="select">
              <option value="encode">${i18n.common.encode}</option>
              <option value="decode">${i18n.common.decode}</option>
            </select>
          </div>
          <textarea id="url-input" class="editor" placeholder='${i18n.tools.urlEncoder.inputPlaceholder}'></textarea>
        </div>
        
        <div class="editor-panel">
          <div class="editor-header">
            <span class="editor-label">${i18n.common.output}</span>
            <button class="btn-small" onclick="navigator.clipboard.writeText(document.getElementById('url-output').value)">${i18n.common.copy}</button>
          </div>
          <textarea id="url-output" class="editor output" readonly placeholder='${i18n.tools.urlEncoder.outputPlaceholder}'></textarea>
        </div>
      </div>
      
      <div class="tool-actions">
        <button id="url-process" class="btn-primary">${i18n.common.process}</button>
      </div>
    `
  }

  hash() {
    const lang = getLang()
    const i18n = t(lang)
    const tool = i18n.tools.hash
    
    return `
      <div class="tool-header">
        <h1 class="tool-title">${tool.title}</h1>
        <p class="tool-desc">${tool.desc}</p>
      </div>
      
      <div class="editor-panel">
        <div class="editor-header">
          <span class="editor-label">${i18n.common.input}</span>
        </div>
        <textarea id="hash-input" class="editor" style="height: 200px" placeholder='${tool.inputPlaceholder}'></textarea>
      </div>
      
      <div class="tool-actions">
        <button id="hash-sha256" class="btn-primary">${tool.sha256}</button>
        <button id="hash-sha1" class="btn-secondary">${tool.sha1}</button>
      </div>
      
      <div class="editor-panel" style="margin-top: 24px">
        <div class="editor-header">
          <span class="editor-label">${i18n.common.output}</span>
          <button class="btn-small" onclick="navigator.clipboard.writeText(document.getElementById('hash-output').value)">${i18n.common.copy}</button>
        </div>
        <textarea id="hash-output" class="editor output" style="height: 100px" readonly placeholder='${tool.outputPlaceholder}'></textarea>
      </div>
    `
  }

  timestamp() {
    const lang = getLang()
    const i18n = t(lang)
    const tool = i18n.tools.timestamp
    
    return `
      <div class="tool-header">
        <h1 class="tool-title">${tool.title}</h1>
        <p class="tool-desc">${tool.desc}</p>
      </div>
      
      <div class="current-ts">
        <span>${tool.current}</span>
        <span id="current-ts" class="ts-value">-</span>
        <button class="btn-small" onclick="navigator.clipboard.writeText(document.getElementById('current-ts').textContent)">${i18n.common.copy}</button>
      </div>
      
      <div class="tool-grid">
        <div class="editor-panel">
          <div class="editor-header"><span class="editor-label">${tool.tsToDate}</span></div>
          <input id="ts-input" type="text" class="input-text" placeholder='${tool.unixTs}'>
          <button id="ts-to-date" class="btn-primary" style="margin-top: 12px">${i18n.common.process}</button>
          <input id="ts-output" type="text" class="input-text output" style="margin-top: 12px" readonly placeholder='${tool.isoDate}'>
        </div>
        
        <div class="editor-panel">
          <div class="editor-header"><span class="editor-label">${tool.dateToTs}</span></div>
          <input id="ts-output" type="datetime-local" class="input-text">
          <button id="date-to-ts" class="btn-primary" style="margin-top: 12px">${i18n.common.process}</button>
          <input id="ts-input" type="text" class="input-text output" style="margin-top: 12px" readonly placeholder='${tool.unixTs}'>
        </div>
      </div>
    `
  }

  diff() {
    const lang = getLang()
    const i18n = t(lang)
    
    return `
      <div class="tool-header">
        <h1 class="tool-title">${i18n.tools.diff.title}</h1>
        <p class="tool-desc">${i18n.tools.diff.desc}</p>
      </div>
      
      <div class="tool-grid">
        <div class="editor-panel">
          <div class="editor-header">
            <span class="editor-label">Original</span>
            <button class="btn-small" onclick="document.getElementById('diff-input1').value=''">${i18n.common.clear}</button>
          </div>
          <textarea id="diff-input1" class="editor" style="height: 300px" placeholder="Paste original text here..."></textarea>
        </div>
        
        <div class="editor-panel">
          <div class="editor-header">
            <span class="editor-label">Modified</span>
            <button class="btn-small" onclick="document.getElementById('diff-input2').value=''">${i18n.common.clear}</button>
          </div>
          <textarea id="diff-input2" class="editor" style="height: 300px" placeholder="Paste modified text here..."></textarea>
        </div>
      </div>
      
      <div class="tool-actions">
        <button id="diff-compare-btn" class="btn-primary">Compare</button>
      </div>
      
      <div class="editor-panel" style="margin-top: 24px">
        <div class="editor-header">
          <span class="editor-label">Diff Result</span>
        </div>
        <div id="diff-output" class="diff-output" style="min-height: 200px">
          <span style="color: var(--text-secondary)">Comparison result will appear here...</span>
        </div>
      </div>
    `
  }

  regexTester() {
    return regexTester(this)
  }

  colorConverter() {
    return colorConverter(this)
  }

  unitConverter() {
    return unitConverter(this)
  }

  markdownEditor() {
    return markdownEditor(this)
  }
}
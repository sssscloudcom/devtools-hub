import './styles.css'
import { Router } from './router'
import { getLang, setLang, t } from './i18n'

// SEO Meta Tags 更新
const seoData: Record<string, { title: string; description: string; keywords: string }> = {
  '/': {
    title: 'JSON Formatter and Validator - Free Online JSON Tool',
    description: 'Free online JSON formatter, validator, and beautifier. Format, minify, and validate JSON data instantly. No signup, 100% browser-side processing.',
    keywords: 'json formatter, json validator, json beautifier, online json tool'
  },
  '/json': {
    title: 'JSON Formatter - Format, Validate and Beautify JSON',
    description: 'Free online JSON formatter. Format, validate, minify and beautify JSON data. Instant processing, no signup required.',
    keywords: 'json formatter, json validator, json beautifier, json minify'
  },
  '/xml': {
    title: 'XML Formatter - Format and Beautify XML Documents',
    description: 'Free online XML formatter. Format and beautify XML documents instantly. Browser-side processing.',
    keywords: 'xml formatter, xml beautifier, xml validator, online xml tool'
  },
  '/base64': {
    title: 'Base64 Encoder/Decoder - Online Base64 Tool',
    description: 'Free online Base64 encoder and decoder. Encode text to Base64 or decode Base64 to text instantly.',
    keywords: 'base64 encoder, base64 decoder, base64 online, encode decode'
  },
  '/url': {
    title: 'URL Encoder/Decoder - Encode URL Components',
    description: 'Free online URL encoder and decoder. Encode or decode URL components and query strings.',
    keywords: 'url encoder, url decoder, encode url, url encoding'
  },
  '/hash': {
    title: 'Hash Generator - SHA-256 and SHA-1 Hash Tool',
    description: 'Free online hash generator. Generate SHA-256 and SHA-1 hashes from text instantly.',
    keywords: 'hash generator, sha256, sha-1, hash online'
  },
  '/timestamp': {
    title: 'Unix Timestamp Converter - Date to Timestamp',
    description: 'Free online Unix timestamp converter. Convert timestamps to dates and vice versa.',
    keywords: 'timestamp converter, unix timestamp, epoch converter'
  },
  '/diff': {
    title: 'Text Diff Tool - Compare Two Texts',
    description: 'Free online diff tool. Compare two texts and highlight differences side by side.',
    keywords: 'diff tool, text compare, compare texts, diff online'
  },
  '/regex': {
    title: 'Regex Tester - Test Regular Expressions',
    description: 'Free online regex tester. Test regular expressions with live matching and highlighting.',
    keywords: 'regex tester, regular expression, regex online, test regex'
  },
  '/color': {
    title: 'Color Converter - HEX RGB HSL Conversion',
    description: 'Free online color converter. Convert colors between HEX, RGB, HSL, RGBA formats.',
    keywords: 'color converter, hex to rgb, rgb to hex, color tool'
  },
  '/unit': {
    title: 'Unit Converter - Length Weight Temperature',
    description: 'Free online unit converter. Convert length, weight, temperature, data, time units.',
    keywords: 'unit converter, convert units, length converter, weight converter'
  },
  '/markdown': {
    title: 'Markdown Editor - Write and Preview Markdown',
    description: 'Free online Markdown editor. Write and preview Markdown in real-time with syntax highlighting.',
    keywords: 'markdown editor, markdown preview, md editor, online markdown'
  },
  '/jwt': {
    title: 'JWT Decoder - Decode JSON Web Tokens',
    description: 'Free online JWT decoder. Decode JSON Web Tokens and view header, payload, signature.',
    keywords: 'jwt decoder, jwt token, decode jwt, jwt online'
  },
  '/uuid': {
    title: 'UUID Generator - Generate UUID v4',
    description: 'Free online UUID generator. Generate random UUID v4 identifiers instantly.',
    keywords: 'uuid generator, uuid v4, generate uuid, guid generator'
  },
  '/cron': {
    title: 'Cron Parser - Parse Cron Expressions',
    description: 'Free online cron parser. Parse cron expressions and get human-readable descriptions.',
    keywords: 'cron parser, cron expression, cron schedule, crontab'
  },
  '/qrcode': {
    title: 'QR Code Generator - Generate QR Codes',
    description: 'Free online QR code generator. Generate QR codes from text or URLs instantly.',
    keywords: 'qr code generator, generate qr, qr online, qr code'
  }
}

function updateSEO(path: string) {
  const lang = getLang()
  const data = seoData[path] || seoData['/']
  
  // Update title
  document.title = data.title
  
  // Update meta description
  const descMeta = document.querySelector('meta[name="description"]')
  if (descMeta) descMeta.setAttribute('content', data.description)
  
  // Update meta keywords
  const keywordsMeta = document.querySelector('meta[name="keywords"]')
  if (keywordsMeta) keywordsMeta.setAttribute('content', data.keywords)
  
  // Update OG tags
  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', data.title)
  
  const ogDesc = document.querySelector('meta[property="og:description"]')
  if (ogDesc) ogDesc.setAttribute('content', data.description)
  
  const ogUrl = document.querySelector('meta[property="og:url"]')
  if (ogUrl) ogUrl.setAttribute('content', `https://tools.nextapi.pro${path}?lang=${lang}`)
  
  // Update canonical
  const canonical = document.querySelector('link[rel="canonical"]')
  if (canonical) canonical.setAttribute('href', `https://tools.nextapi.pro${path}`)
}

// 深色模式
if (localStorage.getItem('dark') === '1') {
  document.body.classList.add('dark')
}

function toggleDark() {
  document.body.classList.toggle('dark')
  localStorage.setItem('dark', document.body.classList.contains('dark') ? '1' : '0')
}

// 路由器
const router = new Router()

// 渲染导航和框架
function renderShell() {
  const lang = getLang()
  const i18n = t(lang)
  const app = document.getElementById('app')!
  
  app.innerHTML = `
<header class="header">
  <div class="header-inner">
    <a href="/${window.location.search}" class="logo">
      <span class="logo-icon">{ }</span>
      <span class="logo-text">${i18n.siteName}</a>
    </a>
    
    <!-- Format Tools -->
    <div class="nav-dropdown">
      <button class="nav-dropdown-btn">
        <span>${i18n.nav.format || 'Format'}</span>
        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/></svg>
      </button>
      <div class="nav-dropdown-menu">
        <a href="/json${window.location.search}" class="nav-dropdown-item" data-path="/json">
          <span class="nav-dropdown-icon">{ }</span>
          <span>${i18n.nav.jsonFormatter}</span>
        </a>
        <a href="/xml${window.location.search}" class="nav-dropdown-item" data-path="/xml">
          <span class="nav-dropdown-icon">&lt;&gt;</span>
          <span>${i18n.nav.xmlFormatter}</span>
        </a>
        <a href="/markdown${window.location.search}" class="nav-dropdown-item" data-path="/markdown">
          <span class="nav-dropdown-icon">MD</span>
          <span>${i18n.nav.markdown}</span>
        </a>
        <a href="/diff${window.location.search}" class="nav-dropdown-item" data-path="/diff">
          <span class="nav-dropdown-icon">+-</span>
          <span>${i18n.nav.diff}</span>
        </a>
      </div>
    </div>
    
    <!-- Encode Tools -->
    <div class="nav-dropdown">
      <button class="nav-dropdown-btn">
        <span>${i18n.nav.encode || 'Encode'}</span>
        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/></svg>
      </button>
      <div class="nav-dropdown-menu">
        <a href="/base64${window.location.search}" class="nav-dropdown-item" data-path="/base64">
          <span class="nav-dropdown-icon">64</span>
          <span>${i18n.nav.base64}</span>
        </a>
        <a href="/url${window.location.search}" class="nav-dropdown-item" data-path="/url">
          <span class="nav-dropdown-icon">U</span>
          <span>${i18n.nav.urlEncoder}</span>
        </a>
        <a href="/hash${window.location.search}" class="nav-dropdown-item" data-path="/hash">
          <span class="nav-dropdown-icon">#</span>
          <span>${i18n.nav.hash}</span>
        </a>
        <a href="/timestamp${window.location.search}" class="nav-dropdown-item" data-path="/timestamp">
          <span class="nav-dropdown-icon">TS</span>
          <span>${i18n.nav.timestamp}</span>
        </a>
      </div>
    </div>
    
    <!-- Developer Tools -->
    <div class="nav-dropdown">
      <button class="nav-dropdown-btn">
        <span>${i18n.nav.dev || 'Dev'}</span>
        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/></svg>
      </button>
      <div class="nav-dropdown-menu">
        <a href="/regex${window.location.search}" class="nav-dropdown-item" data-path="/regex">
          <span class="nav-dropdown-icon">.*</span>
          <span>${i18n.nav.regex}</span>
        </a>
        <a href="/jwt${window.location.search}" class="nav-dropdown-item" data-path="/jwt">
          <span class="nav-dropdown-icon">JWT</span>
          <span>${i18n.nav.jwt}</span>
        </a>
        <a href="/uuid${window.location.search}" class="nav-dropdown-item" data-path="/uuid">
          <span class="nav-dropdown-icon">UID</span>
          <span>${i18n.nav.uuid}</span>
        </a>
        <a href="/cron${window.location.search}" class="nav-dropdown-item" data-path="/cron">
          <span class="nav-dropdown-icon">CR</span>
          <span>${i18n.nav.cron}</span>
        </a>
      </div>
    </div>
    
    <!-- Convert Tools -->
    <div class="nav-dropdown">
      <button class="nav-dropdown-btn">
        <span>${i18n.nav.convert || 'Convert'}</span>
        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/></svg>
      </button>
      <div class="nav-dropdown-menu">
        <a href="/color${window.location.search}" class="nav-dropdown-item" data-path="/color">
          <span class="nav-dropdown-icon">H</span>
          <span>${i18n.nav.color}</span>
        </a>
        <a href="/unit${window.location.search}" class="nav-dropdown-item" data-path="/unit">
          <span class="nav-dropdown-icon">U</span>
          <span>${i18n.nav.unit}</span>
        </a>
      </div>
    </div>
    
    <!-- Generate Tools -->
    <div class="nav-dropdown">
      <button class="nav-dropdown-btn">
        <span>${i18n.nav.generate || 'Generate'}</span>
        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/></svg>
      </button>
      <div class="nav-dropdown-menu">
        <a href="/uuid${window.location.search}" class="nav-dropdown-item" data-path="/uuid">
          <span class="nav-dropdown-icon">UID</span>
          <span>${i18n.nav.uuid}</span>
        </a>
        <a href="/qrcode${window.location.search}" class="nav-dropdown-item" data-path="/qrcode">
          <span class="nav-dropdown-icon">QR</span>
          <span>${i18n.nav.qrcode}</span>
        </a>
      </div>
    </div>
    
    <div class="header-actions">
      <select class="lang-select" id="lang-select">
        <option value="en" ${lang === 'en' ? 'selected' : ''}>🇺🇸 EN</option>
        <option value="zh" ${lang === 'zh' ? 'selected' : ''}>🇨🇳 中文</option>
        <option value="es" ${lang === 'es' ? 'selected' : ''}>🇪🇸 ES</option>
        <option value="ja" ${lang === 'ja' ? 'selected' : ''}>🇯🇵 日本語</option>
      </select>
      <button class="btn-dark" id="dark-toggle">🌓</button>
    </div>
  </div>
</header>
<main class="main"><div class="container" id="content"></div></main>
<footer class="footer"><div class="container"><p>${i18n.footer.privacy}</p></div></footer>
`

  // 更新导航激活状态
  const path = window.location.pathname
  document.querySelectorAll('.nav-dropdown-item').forEach(link => {
    link.classList.remove('active')
    const href = link.getAttribute('data-path')
    if (href === path) {
      link.classList.add('active')
    }
  })

  // 语言切换
  document.getElementById('lang-select')?.addEventListener('change', (e: any) => {
    setLang(e.target.value)
    renderShell()
    router.render()
  })

  // 深色模式切换
  document.getElementById('dark-toggle')?.addEventListener('click', () => {
    toggleDark()
  })

  // 导航点击
  document.querySelectorAll('.nav-dropdown-item').forEach(link => {
    link.addEventListener('click', (e: any) => {
      e.preventDefault()
      const href = link.getAttribute('href')
      history.pushState(null, '', href)
      const path = window.location.pathname
      updateSEO(path)
      renderShell()
      router.render()
    })
  })
}

// 初始化
renderShell()
router.init()
router.render()
updateSEO(window.location.pathname)
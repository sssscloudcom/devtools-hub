import './styles.css'
import { Router } from './router'
import { getLang, setLang, t } from './i18n'

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
        <span>${i18n.nav.jsonFormatter}</span>
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
    
    <!-- Encode/Hash Tools -->
    <div class="nav-dropdown">
      <button class="nav-dropdown-btn">
        <span>${i18n.nav.base64}</span>
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
        <span>${i18n.nav.regex}</span>
        <svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"/></svg>
      </button>
      <div class="nav-dropdown-menu">
        <a href="/regex${window.location.search}" class="nav-dropdown-item" data-path="/regex">
          <span class="nav-dropdown-icon">.*</span>
          <span>${i18n.nav.regex}</span>
        </a>
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
      renderShell()
      router.render()
    })
  })
}

// 初始化
renderShell()
router.init()
router.render()
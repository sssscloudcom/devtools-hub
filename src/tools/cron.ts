// Cron Parser Tool
import { getLang, t } from '../i18n'

export function cronParser(this: any) {
  const lang = getLang()
  const i18n = t(lang)
  const tool = i18n.tools.cron
  
  return `
    <div class="tool-header">
      <h1 class="tool-title">${tool.title}</h1>
      <p class="tool-desc">${tool.desc}</p>
    </div>
    <div class="editor-panel">
      <div class="editor-header">
        <span class="editor-label">${tool.inputLabel}</span>
      </div>
      <input id="cron-input" class="input-text" placeholder="${tool.inputPlaceholder}" style="font-family: 'JetBrains Mono', monospace">
    </div>
    <div class="cron-presets" style="margin: 16px 0">
      <span class="editor-label" style="margin-right: 12px">${tool.presetsLabel}</span>
      <button class="btn-small" onclick="document.getElementById('cron-input').value='0 * * * *'">${tool.everyHour}</button>
      <button class="btn-small" onclick="document.getElementById('cron-input').value='0 0 * * *'">${tool.everyDay}</button>
      <button class="btn-small" onclick="document.getElementById('cron-input').value='0 0 * * 0'">${tool.everyWeek}</button>
      <button class="btn-small" onclick="document.getElementById('cron-input').value='0 0 1 * *'">${tool.everyMonth}</button>
      <button class="btn-small" onclick="document.getElementById('cron-input').value='*/5 * * * *'">${tool.every5min}</button>
    </div>
    <div class="tool-actions">
      <button id="cron-parse" class="btn-primary">${tool.parse}</button>
    </div>
    <div class="cron-output" style="margin-top: 24px">
      <div class="cron-result" style="background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 8px; padding: 24px">
        <h3 style="font-size: 18px; margin-bottom: 16px">${tool.resultLabel}</h3>
        <p id="cron-human" style="font-size: 16px; color: var(--text); line-height: 1.6"></p>
        <div id="cron-fields" style="margin-top: 16px; font-family: 'JetBrains Mono', monospace; font-size: 14px"></div>
      </div>
    </div>
  `
}

export function bindCronParserEvents(router: any) {
  const cronInput = document.getElementById('cron-input') as HTMLInputElement
  const cronHuman = document.getElementById('cron-human') as HTMLParagraphElement
  const cronFields = document.getElementById('cron-fields') as HTMLDivElement
  const parseBtn = document.getElementById('cron-parse')
  
  function parseCron(expression: string): string {
    const parts = expression.trim().split(' ')
    if (parts.length !== 5) {
      return 'Invalid cron expression'
    }
    
    const [minute, hour, dayOfMonth, month, dayOfWeek] = parts
    
    let desc = ''
    
    // Minute
    if (minute === '*') {
      desc += 'Every minute'
    } else if (minute.startsWith('*/')) {
      desc += `Every ${minute.slice(2)} minutes`
    } else {
      desc += `At minute ${minute}`
    }
    
    // Hour
    if (hour !== '*') {
      if (hour.startsWith('*/')) {
        desc += `, every ${hour.slice(2)} hours`
      } else {
        desc += ` of hour ${hour}`
      }
    }
    
    // Day of month
    if (dayOfMonth !== '*') {
      desc += `, on day ${dayOfMonth} of the month`
    }
    
    // Month
    if (month !== '*') {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      desc += `, in ${months[parseInt(month) - 1] || month}`
    }
    
    // Day of week
    if (dayOfWeek !== '*') {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      desc += `, on ${days[parseInt(dayOfWeek)] || dayOfWeek}`
    }
    
    return desc
  }
  
  function formatFields(expression: string): string {
    const parts = expression.trim().split(' ')
    if (parts.length !== 5) return ''
    
    const [minute, hour, dayOfMonth, month, dayOfWeek] = parts
    const lang = getLang()
    const i18n = t(lang)
    const tool = i18n.tools.cron
    
    return `
      <div style="display: grid; grid-template-columns: 100px 1fr; gap: 8px">
        <span style="color: var(--text-secondary)">${tool.fieldMinute}:</span>
        <span>${minute}</span>
        <span style="color: var(--text-secondary)">${tool.fieldHour}:</span>
        <span>${hour}</span>
        <span style="color: var(--text-secondary)">${tool.fieldDay}:</span>
        <span>${dayOfMonth}</span>
        <span style="color: var(--text-secondary)">${tool.fieldMonth}:</span>
        <span>${month}</span>
        <span style="color: var(--text-secondary)">${tool.fieldWeekday}:</span>
        <span>${dayOfWeek}</span>
      </div>
    `
  }
  
  parseBtn?.addEventListener('click', () => {
    const expression = cronInput.value.trim()
    if (!expression) return
    
    cronHuman.textContent = parseCron(expression)
    cronFields.innerHTML = formatFields(expression)
  })
  
  // Auto-parse on input
  cronInput.addEventListener('input', () => {
    const expression = cronInput.value.trim()
    if (expression.split(' ').length === 5) {
      cronHuman.textContent = parseCron(expression)
      cronFields.innerHTML = formatFields(expression)
    }
  })
}
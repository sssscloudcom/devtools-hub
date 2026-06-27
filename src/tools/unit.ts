// Unit Converter Tool - Native JS Implementation
import { getLang, t } from '../i18n'

export function unitConverter(router: any) {
  return `
    <div class="tool-header">
      <h1 class="tool-title">Unit Converter</h1>
      <p class="tool-desc">Convert between different units of length, weight, temperature, and more</p>
    </div>
    
    <div style="display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap">
      <button class="btn-primary unit-category-btn" data-category="length">${tool.categoryLength || 'Length'}</button>
      <button class="btn-secondary unit-category-btn" data-category="weight">${tool.categoryWeight || 'Weight'}</button>
      <button class="btn-secondary unit-category-btn" data-category="temperature">${tool.categoryTemperature || 'Temperature'}</button>
      <button class="btn-secondary unit-category-btn" data-category="data">${tool.categoryData || 'Data'}</button>
      <button class="btn-secondary unit-category-btn" data-category="time">${tool.categoryTime || 'Time'}</button>
    </div>
    
    <div class="tool-grid" style="margin-bottom: 24px">
      <div class="editor-panel">
        <div class="editor-header">
          <span class="editor-label">${tool.fromLabel || 'From'}</span>
        </div>
        <input id="unit-input" type="number" class="input-text" style="margin-bottom: 12px" value="1" placeholder="Enter value">
        <select id="unit-from" class="select" style="width: 100%">
          <option value="m">Meters (m)</option>
          <option value="km">Kilometers (km)</option>
          <option value="cm">Centimeters (cm)</option>
          <option value="mm">Millimeters (mm)</option>
          <option value="mi">Miles (mi)</option>
          <option value="yd">Yards (yd)</option>
          <option value="ft">Feet (ft)</option>
          <option value="in">Inches (in)</option>
        </select>
      </div>
      
      <div class="editor-panel">
        <div class="editor-header">
          <span class="editor-label">${tool.toLabel || 'To'}</span>
        </div>
        <input id="unit-output" type="text" class="input-text output" style="margin-bottom: 12px" readonly placeholder="${tool.resultLabel || 'Result'}">
        <select id="unit-to" class="select" style="width: 100%">
          <option value="ft">Feet (ft)</option>
          <option value="m">Meters (m)</option>
          <option value="km">Kilometers (km)</option>
          <option value="cm">Centimeters (cm)</option>
          <option value="mm">Millimeters (mm)</option>
          <option value="mi">Miles (mi)</option>
          <option value="yd">Yards (yd)</option>
          <option value="in">Inches (in)</option>
        </select>
      </div>
    </div>
    
    <div class="editor-panel">
      <div class="editor-header">
        <span class="editor-label">Conversion Formula</span>
      </div>
      <div id="unit-formula" style="font-family: 'JetBrains Mono', monospace; font-size: 14px; color: var(--text-secondary); padding: 12px">
        1 meter = 3.28084 feet
      </div>
    </div>
  `
}

export function bindUnitConverterEvents(router: any) {
  const input = document.getElementById('unit-input') as HTMLInputElement
  const output = document.getElementById('unit-output') as HTMLInputElement
  const fromSelect = document.getElementById('unit-from') as HTMLSelectElement
  const toSelect = document.getElementById('unit-to') as HTMLSelectElement
  const formulaDiv = document.getElementById('unit-formula') as HTMLDivElement
  const categoryBtns = document.querySelectorAll('.unit-category-btn')
  
  // Unit definitions
  const units: Record<string, { toBase: (v: number) => number; fromBase: (v: number) => number; name: string }[]> = {
    length: [
      { toBase: v => v, fromBase: v => v, name: 'Meters (m)' },
      { toBase: v => v * 1000, fromBase: v => v / 1000, name: 'Kilometers (km)' },
      { toBase: v => v / 100, fromBase: v => v * 100, name: 'Centimeters (cm)' },
      { toBase: v => v / 1000, fromBase: v => v * 1000, name: 'Millimeters (mm)' },
      { toBase: v => v * 1609.344, fromBase: v => v / 1609.344, name: 'Miles (mi)' },
      { toBase: v => v * 0.9144, fromBase: v => v / 0.9144, name: 'Yards (yd)' },
      { toBase: v => v * 0.3048, fromBase: v => v / 0.3048, name: 'Feet (ft)' },
      { toBase: v => v * 0.0254, fromBase: v => v / 0.0254, name: 'Inches (in)' },
    ],
    weight: [
      { toBase: v => v, fromBase: v => v, name: 'Kilograms (kg)' },
      { toBase: v => v / 1000, fromBase: v => v * 1000, name: 'Grams (g)' },
      { toBase: v => v / 1000000, fromBase: v => v * 1000000, name: 'Milligrams (mg)' },
      { toBase: v => v * 0.453592, fromBase: v => v / 0.453592, name: 'Pounds (lb)' },
      { toBase: v => v * 0.0283495, fromBase: v => v / 0.0283495, name: 'Ounces (oz)' },
    ],
    temperature: [
      { toBase: v => v, fromBase: v => v, name: 'Celsius (°C)' },
      { toBase: v => (v - 32) * 5/9, fromBase: v => v * 9/5 + 32, name: 'Fahrenheit (°F)' },
      { toBase: v => v - 273.15, fromBase: v => v + 273.15, name: 'Kelvin (K)' },
    ],
    data: [
      { toBase: v => v, fromBase: v => v, name: 'Bytes (B)' },
      { toBase: v => v / 1024, fromBase: v => v * 1024, name: 'Kilobytes (KB)' },
      { toBase: v => v / (1024 * 1024), fromBase: v => v * 1024 * 1024, name: 'Megabytes (MB)' },
      { toBase: v => v / (1024 * 1024 * 1024), fromBase: v => v * 1024 * 1024 * 1024, name: 'Gigabytes (GB)' },
      { toBase: v => v / (1024 * 1024 * 1024 * 1024), fromBase: v => v * 1024 * 1024 * 1024 * 1024, name: 'Terabytes (TB)' },
    ],
    time: [
      { toBase: v => v, fromBase: v => v, name: 'Seconds (s)' },
      { toBase: v => v / 1000, fromBase: v => v * 1000, name: 'Milliseconds (ms)' },
      { toBase: v => v / 60, fromBase: v => v * 60, name: 'Minutes (min)' },
      { toBase: v => v / 3600, fromBase: v => v * 3600, name: 'Hours (h)' },
      { toBase: v => v / 86400, fromBase: v => v * 86400, name: 'Days (d)' },
      { toBase: v => v / 604800, fromBase: v => v * 604800, name: 'Weeks (wk)' },
    ],
  }
  
  let currentCategory = 'length'
  
  function updateSelects() {
    const unitList = units[currentCategory] || units.length
    fromSelect.innerHTML = unitList.map((u, i) => `<option value="${i}">${u.name}</option>`).join('')
    toSelect.innerHTML = unitList.map((u, i) => `<option value="${i}">${u.name}</option>`).join('')
    if (unitList.length > 1) toSelect.selectedIndex = 1
    convert()
  }
  
  function convert() {
    const unitList = units[currentCategory] || units.length
    const fromIdx = parseInt(fromSelect.value)
    const toIdx = parseInt(toSelect.value)
    const fromUnit = unitList[fromIdx]
    const toUnit = unitList[toIdx]
    const value = parseFloat(input.value) || 0
    
    const baseValue = fromUnit.toBase(value)
    const result = toUnit.fromBase(baseValue)
    
    output.value = result.toFixed(6).replace(/\.?0+$/, '')
    formulaDiv.textContent = `1 ${fromUnit.name.split('(')[0].trim()} = ${(toUnit.fromBase(fromUnit.toBase(1))).toFixed(6).replace(/\.?0+$/, '')} ${toUnit.name.split('(')[0].trim()}`
  }
  
  categoryBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      categoryBtns.forEach(b => b.className = 'btn-secondary unit-category-btn')
      ;(e.target as HTMLElement).className = 'btn-primary unit-category-btn'
      currentCategory = (e.target as HTMLElement).dataset.category || 'length'
      updateSelects()
    })
  })
  
  input?.addEventListener('input', convert)
  fromSelect?.addEventListener('change', convert)
  toSelect?.addEventListener('change', convert)
  
  // Initialize
  updateSelects()
}
import { useState, useCallback } from 'react'

type ColorFormat = 'hex' | 'rgb' | 'hsl'

interface RGB { r: number; g: number; b: number }
interface HSL { h: number; s: number; l: number }

function hexToRgb(hex: string): RGB | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')
}

function rgbToHsl(r: number, g: number, b: number): HSL {
  r /= 255; g /= 255; b /= 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h = 0, s = 0, l = (max + min) / 2

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

function hslToRgb(h: number, s: number, l: number): RGB {
  s /= 100; l /= 100
  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs((h / 60) % 2 - 1))
  const m = l - c / 2
  let r = 0, g = 0, b = 0

  if (h < 60) { r = c; g = x; b = 0 }
  else if (h < 120) { r = x; g = c; b = 0 }
  else if (h < 180) { r = 0; g = c; b = x }
  else if (h < 240) { r = 0; g = x; b = c }
  else if (h < 300) { r = x; g = 0; b = c }
  else { r = c; g = 0; b = x }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255)
  }
}

export default function ColorConverter() {
  const [hex, setHex] = useState('#3b82f6')
  const [rgb, setRgb] = useState<RGB>({ r: 59, g: 130, b: 246 })
  const [hsl, setHsl] = useState<HSL>({ h: 217, s: 91, l: 60 })
  const [copied, setCopied] = useState('')

  const updateFromHex = useCallback((newHex: string) => {
    const rgbVal = hexToRgb(newHex)
    if (rgbVal) {
      setHex(newHex)
      setRgb(rgbVal)
      setHsl(rgbToHsl(rgbVal.r, rgbVal.g, rgbVal.b))
    }
  }, [])

  const updateFromRgb = useCallback((newRgb: RGB) => {
    setRgb(newRgb)
    setHex(rgbToHex(newRgb.r, newRgb.g, newRgb.b))
    setHsl(rgbToHsl(newRgb.r, newRgb.g, newRgb.b))
  }, [])

  const updateFromHsl = useCallback((newHsl: HSL) => {
    setHsl(newHsl)
    const rgbVal = hslToRgb(newHsl.h, newHsl.s, newHsl.l)
    setRgb(rgbVal)
    setHex(rgbToHex(rgbVal.r, rgbVal.g, rgbVal.b))
  }, [])

  const copy = useCallback((format: ColorFormat) => {
    let text: string
    if (format === 'hex') text = hex
    else if (format === 'rgb') text = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
    else text = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`
    navigator.clipboard.writeText(text)
    setCopied(format)
    setTimeout(() => setCopied(''), 2000)
  }, [hex, rgb, hsl])

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Color Converter</h1>
        <p className="text-slate-500 mt-1">Convert between HEX, RGB, and HSL color formats</p>
      </div>

      {/* Color Preview */}
      <div className="mb-6 p-8 rounded-2xl border-4 border-slate-200 dark:border-slate-700" style={{ backgroundColor: hex }}>
        <div className="text-center">
          <span className="text-2xl font-bold" style={{ color: hsl.l > 50 ? '#000' : '#fff' }}>{hex}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
        {/* HEX */}
        <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-slate-500">HEX</span>
            <button onClick={() => copy('hex')} className="text-xs text-brand-500 font-medium">
              {copied === 'hex' ? '✓' : 'Copy'}
            </button>
          </div>
          <input
            value={hex}
            onChange={(e) => updateFromHex(e.target.value)}
            className="input-field text-center font-mono text-lg"
            placeholder="#000000"
          />
        </div>

        {/* RGB */}
        <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-slate-500">RGB</span>
            <button onClick={() => copy('rgb')} className="text-xs text-brand-500 font-medium">
              {copied === 'rgb' ? '✓' : 'Copy'}
            </button>
          </div>
          <div className="space-y-2">
            <input
              value={rgb.r}
              onChange={(e) => updateFromRgb({ ...rgb, r: Math.min(255, Math.max(0, parseInt(e.target.value) || 0)) })}
              className="input-field text-center"
              type="number"
              min={0}
              max={255}
              placeholder="R"
            />
            <input
              value={rgb.g}
              onChange={(e) => updateFromRgb({ ...rgb, g: Math.min(255, Math.max(0, parseInt(e.target.value) || 0)) })}
              className="input-field text-center"
              type="number"
              min={0}
              max={255}
              placeholder="G"
            />
            <input
              value={rgb.b}
              onChange={(e) => updateFromRgb({ ...rgb, b: Math.min(255, Math.max(0, parseInt(e.target.value) || 0)) })}
              className="input-field text-center"
              type="number"
              min={0}
              max={255}
              placeholder="B"
            />
          </div>
        </div>

        {/* HSL */}
        <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-slate-500">HSL</span>
            <button onClick={() => copy('hsl')} className="text-xs text-brand-500 font-medium">
              {copied === 'hsl' ? '✓' : 'Copy'}
            </button>
          </div>
          <div className="space-y-2">
            <input
              value={hsl.h}
              onChange={(e) => updateFromHsl({ ...hsl, h: Math.min(360, Math.max(0, parseInt(e.target.value) || 0)) })}
              className="input-field text-center"
              type="number"
              min={0}
              max={360}
              placeholder="H"
            />
            <input
              value={hsl.s}
              onChange={(e) => updateFromHsl({ ...hsl, s: Math.min(100, Math.max(0, parseInt(e.target.value) || 0)) })}
              className="input-field text-center"
              type="number"
              min={0}
              max={100}
              placeholder="S"
            />
            <input
              value={hsl.l}
              onChange={(e) => updateFromHsl({ ...hsl, l: Math.min(100, Math.max(0, parseInt(e.target.value) || 0)) })}
              className="input-field text-center"
              type="number"
              min={0}
              max={100}
              placeholder="L"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
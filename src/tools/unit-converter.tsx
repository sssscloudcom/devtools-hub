import { useState, useMemo } from 'react'

const categories = {
  length: {
    name: 'Length',
    units: {
      m: { name: 'Meter', factor: 1 },
      km: { name: 'Kilometer', factor: 1000 },
      cm: { name: 'Centimeter', factor: 0.01 },
      mm: { name: 'Millimeter', factor: 0.001 },
      mi: { name: 'Mile', factor: 1609.344 },
      yd: { name: 'Yard', factor: 0.9144 },
      ft: { name: 'Foot', factor: 0.3048 },
      in: { name: 'Inch', factor: 0.0254 },
      nm: { name: 'Nautical Mile', factor: 1852 },
    }
  },
  weight: {
    name: 'Weight',
    units: {
      kg: { name: 'Kilogram', factor: 1 },
      g: { name: 'Gram', factor: 0.001 },
      mg: { name: 'Milligram', factor: 0.000001 },
      lb: { name: 'Pound', factor: 0.453592 },
      oz: { name: 'Ounce', factor: 0.0283495 },
      t: { name: 'Metric Ton', factor: 1000 },
      st: { name: 'Stone', factor: 6.35029 },
    }
  },
  temperature: {
    name: 'Temperature',
    units: {
      c: { name: 'Celsius', factor: 1 },
      f: { name: 'Fahrenheit', factor: 1 },
      k: { name: 'Kelvin', factor: 1 },
    }
  },
  speed: {
    name: 'Speed',
    units: {
      'km/h': { name: 'km/h', factor: 1 },
      'mph': { name: 'mph', factor: 1.60934 },
      'm/s': { name: 'm/s', factor: 3.6 },
      'knot': { name: 'Knot', factor: 1.852 },
    }
  },
  area: {
    name: 'Area',
    units: {
      'm2': { name: 'm²', factor: 1 },
      'km2': { name: 'km²', factor: 1000000 },
      'ha': { name: 'Hectare', factor: 10000 },
      'acre': { name: 'Acre', factor: 4046.86 },
      'ft2': { name: 'ft²', factor: 0.092903 },
      'mi2': { name: 'mi²', factor: 2589988 },
    }
  },
  data: {
    name: 'Data',
    units: {
      'B': { name: 'Byte', factor: 1 },
      'KB': { name: 'Kilobyte', factor: 1024 },
      'MB': { name: 'Megabyte', factor: 1048576 },
      'GB': { name: 'Gigabyte', factor: 1073741824 },
      'TB': { name: 'Terabyte', factor: 1099511627776 },
    }
  },
}

type CatKey = keyof typeof categories

function convertTemp(value: number, from: string, to: string): number {
  let celsius: number
  if (from === 'c') celsius = value
  else if (from === 'f') celsius = (value - 32) * 5 / 9
  else celsius = value - 273.15

  if (to === 'c') return celsius
  if (to === 'f') return celsius * 9 / 5 + 32
  return celsius + 273.15
}

export default function UnitConverter() {
  const [cat, setCat] = useState<CatKey>('length')
  const [fromUnit, setFromUnit] = useState('m')
  const [toUnit, setToUnit] = useState('km')
  const [value, setValue] = useState('1')

  const result = useMemo(() => {
    const num = parseFloat(value)
    if (isNaN(num)) return ''
    if (cat === 'temperature') {
      return convertTemp(num, fromUnit, toUnit).toPrecision(10).replace(/\.?0+$/, '')
    }
    const fromFactor = categories[cat].units[fromUnit]?.factor
    const toFactor = categories[cat].units[toUnit]?.factor
    if (!fromFactor || !toFactor) return ''
    return (num * fromFactor / toFactor).toPrecision(10).replace(/\.?0+$/, '')
  }, [value, fromUnit, toUnit, cat])

  const switchUnits = () => {
    setFromUnit(toUnit)
    setToUnit(fromUnit)
    if (result) setValue(result)
  }

  const handleCatChange = (newCat: CatKey) => {
    setCat(newCat)
    const units = Object.keys(categories[newCat].units)
    setFromUnit(units[0])
    setToUnit(units[1])
    setValue('1')
  }

  const currentUnits = categories[cat].units

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Unit Converter</h1>
        <p className="text-slate-500 mt-1">Convert between length, weight, temperature, speed, area, and data units</p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {Object.entries(categories).map(([key, val]) => (
          <button
            key={key}
            onClick={() => handleCatChange(key as CatKey)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              cat === key
                ? 'bg-brand-500 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {val.name}
          </button>
        ))}
      </div>

      {/* Converter */}
      <div className="max-w-2xl">
        <div className="flex items-end gap-4">
          {/* From */}
          <div className="flex-1">
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 block">From</label>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="input-field text-xl font-semibold mb-2"
              type="number"
            />
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="input-field"
            >
              {Object.entries(currentUnits).map(([key, u]) => (
                <option key={key} value={key}>{u.name} ({key})</option>
              ))}
            </select>
          </div>

          {/* Switch */}
          <button
            onClick={switchUnits}
            className="p-3 mb-6 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors"
            title="Switch units"
          >
            ⇄
          </button>

          {/* To */}
          <div className="flex-1">
            <label className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2 block">To</label>
            <div className="input-field text-xl font-semibold mb-2 text-brand-500">
              {result || '—'}
            </div>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="input-field"
            >
              {Object.entries(currentUnits).map(([key, u]) => (
                <option key={key} value={key}>{u.name} ({key})</option>
              ))}
            </select>
          </div>
        </div>

        {/* Quick conversions */}
        <div className="mt-8 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
          <p className="text-sm font-medium text-slate-500 mb-3">Quick reference</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            {[1, 10, 100, 1000].map(v => {
              let res: string
              if (cat === 'temperature') {
                res = convertTemp(v, fromUnit, toUnit).toPrecision(6).replace(/\.?0+$/, '')
              } else {
                const fromF = currentUnits[fromUnit]?.factor
                const toF = currentUnits[toUnit]?.factor
                res = fromF && toF ? (v * fromF / toF).toPrecision(6).replace(/\.?0+$/, '') : ''
              }
              return (
                <div key={v} className="flex justify-between px-3 py-2 bg-white dark:bg-slate-800 rounded-lg">
                  <span className="text-slate-600 dark:text-slate-400">{v} {fromUnit}</span>
                  <span className="font-medium text-brand-500">{res} {toUnit}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
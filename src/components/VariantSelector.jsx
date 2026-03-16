import React from 'react'

export default function VariantSelector({ variants = [], onChange }) {
  if (!variants.length) return null
  return (
    <select onChange={(e) => onChange && onChange(e.target.value)} className="border rounded-md p-2">
      {variants.map(v => (
        <option key={v.id} value={v.id}>{v.label} {v.price ? `- ${v.price}` : ''}</option>
      ))}
    </select>
  )
}

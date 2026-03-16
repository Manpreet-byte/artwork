import React, { useState } from 'react'

export default function ProductGallery({ images = [] }) {
  const [active, setActive] = useState(0)

  if (!images.length) return null

  return (
    <div>
      <div className="mb-4">
        <img src={images[active]} alt="product" className="w-full object-contain rounded-md" />
      </div>
      <div className="flex gap-2 overflow-x-auto">
        {images.map((src, i) => (
          <button key={src + i} onClick={() => setActive(i)} className={`w-20 h-20 rounded-md overflow-hidden border ${i === active ? 'border-[#c9a96e]' : 'border-slate-200'}`}>
            <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

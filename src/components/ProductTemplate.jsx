import React, { useState } from 'react'
import ProductGallery from './ProductGallery'
import PriceDisplay from './PriceDisplay'
import VariantSelector from './VariantSelector'

export default function ProductTemplate({ product }) {
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0]?.id || null)

  if (!product) return null

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <ProductGallery images={product.images} />
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <div className="text-sm text-slate-600 mb-4">SKU: {product.sku}</div>

        <PriceDisplay price={product.price} currency={product.currency} />

        <div className="mt-4">
          <VariantSelector variants={product.variants || []} onChange={setSelectedVariant} />
        </div>

        <div className="mt-6 text-slate-700">
          <p>{product.description}</p>
        </div>

        <div className="mt-6 text-sm text-slate-600">
          <div>Availability: {product.availability}</div>
        </div>
      </div>
    </div>
  )
}

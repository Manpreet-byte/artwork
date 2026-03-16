import React from 'react'
import useProduct from '../hooks/useProduct'
import ProductTemplate from './ProductTemplate'

export default function ProductPageDynamic({ productId: propId } = {}) {
  const path = typeof window !== 'undefined' ? window.location.pathname.replace(/\/$/, '') : ''
  const match = path.match(/^\/products\/([^\/]+)$/)
  const id = propId || (match && match[1])

  const { product, loading, error } = useProduct(id)

  if (!id) return <div className="p-8">No product id provided.</div>
  if (loading) return <div className="p-8">Loading product…</div>
  if (error) return <div className="p-8 text-red-600">Error loading product.</div>
  if (!product) return <div className="p-8">Product not found (404)</div>

  return (
    <div className="min-h-screen w-full bg-gallery-bg text-slate-900">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-white rounded-md shadow-sm">
        <ProductTemplate product={product} />
      </div>
    </div>
  )
}

import { useState, useEffect } from 'react'

// Simple hook to load products from /data/products.json (dev) or fallback API
export default function useProduct(idOrSlug) {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!idOrSlug) return

    let cancelled = false

    async function load() {
      setLoading(true)
      setError(null)
      try {
        // Try local fixture first
        const res = await fetch('/data/products.json')
        const list = await res.json()
        if (cancelled) return
        const found = list.find(p => p.id === idOrSlug || p.slug === idOrSlug)
        if (found) {
          setProduct(found)
          setLoading(false)
          return
        }

        // Fallback: try API endpoint
        const apiRes = await fetch(`/api/products/${encodeURIComponent(idOrSlug)}`)
        if (!apiRes.ok) throw new Error('Product not found')
        const apiProduct = await apiRes.json()
        if (cancelled) return
        setProduct(apiProduct)
      } catch (err) {
        if (!cancelled) setError(err)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    load()

    return () => { cancelled = true }
  }, [idOrSlug])

  return { product, loading, error }
}

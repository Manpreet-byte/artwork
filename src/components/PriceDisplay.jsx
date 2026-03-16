import React from 'react'

export default function PriceDisplay({ price, currency = 'USD' }) {
  if (price == null) return null
  return (
    <div className="text-2xl font-bold">
      {currency} {price}
    </div>
  )
}

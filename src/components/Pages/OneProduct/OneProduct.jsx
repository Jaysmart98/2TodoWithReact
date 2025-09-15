import React from 'react'
import { useParams } from 'react-router-dom'

const OneProduct = () => {
    const sku = useParams()
    console.log(sku)

  return (
    <div>
      <div>OneProduct</div>
    </div>
  )
}

export default OneProduct

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const OneProduct = () => {
    const [product, setProduct] = useState(null)

    const {sku} = useParams()
    console.log(sku)

    useEffect(() => {
     fetch ("https://dummyjson.com/products")
    .then((res)=> res.json())
    .then((data)=> {

        const one = data.products.find((pod)=> pod.sku == sku)
        console.log(one);
        setProduct(one)
     })
   }, [])



  return (
    <div>
         <h1>OneProduct Page</h1>
        <h1>{product && product.title}</h1>
      <img src={product && product.thumbnail} alt=""/>
       <h1>{product && product.brand}</h1>
    </div>
  )
}

export default OneProduct

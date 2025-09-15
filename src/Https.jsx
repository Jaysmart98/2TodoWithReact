import { useState } from 'react'
import { Link } from 'react-router-dom'

const Https = () => {
    const [product, setProduct] = useState([])
    fetch ("https://dummyjson.com/products")
    .then((res)=> res.json())
    .then((data)=> {
        console.log(data)
        setProduct(data.products)
    })

  return (
    <div>
        {product.map((prod, index) => (
            <div key={index}>
                <Link to={`/oneproduct/${prod.sku}`}>
                <p>{prod.title}</p>
                <p>{prod.brand}</p>
                <img src={prod.thumbnail} alt=""/>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default Https

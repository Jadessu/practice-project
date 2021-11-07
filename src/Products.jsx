import React, { useState} from 'react'
import Product from './Product'
import "./Products.css"
function Products() {
    const [ products, setProducts] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    return (
        <div className="wrapper">
            <div className="products-container">

         { products.map(product => (
             <section className="col-product">

                 <Product/>
             </section>
         ))}
            </div>
            
        </div>
    )
}

export default Products

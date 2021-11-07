import React from 'react'
import "./Product.css"

function Product() {
    return (
      <div className="wrapper">
        <div className="product">
          <div className="product-image-box">
            <h3>Sour Diesel</h3>
            <img
              src="https://atlas-content-cdn.pixelsquid.com/stock-images/marijuana-bud-mda4Xn1-600.jpg"
              alt="weed"
            />
          </div>
          <div className="rating-price">
            <div className="ratings">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
            <div className="price">$30</div>

          </div>
          <div className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam asperiores tempore quis.
          </div>
          <div className="buy-button">
              <button>Buying Options</button>
          </div>
        </div>
      </div>
    );
}

export default Product

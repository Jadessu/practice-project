import React from 'react'
import "./ProductBanner.css"

function ProductBanner() {
    return (
      <div className="wrapper">
        <section className="product-banner">
          <div className="product-banner-content">
            <div className="product-banner-title">
              <h1>LOOK FOR NEARBY WEED</h1>
            </div>
            <div className="banner-info">
              <form action="/" method="GET" class="banner-form">
                <input
                  type="search"
                  placeholder="Search"
                  class="search-field"
                />
                <button type="submit" class="search-button">
                  <i className="fa fa-search"></i>
                </button>
              </form>
              
            </div>
          </div>
        </section>
      </div>
    );
}

export default ProductBanner

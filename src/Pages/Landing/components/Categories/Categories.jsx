import React from 'react'
import "./Categories.css"
function Categories() {
    return (
        <div className="wrapper">
            <div className="category-container">
                <div className="row">
                    <section className="col-1 border-right">
                            <h3>Strains</h3>
                            <p>Discover all of our strains ranging from Blue Dream to OG Kush</p>
                            <button>View All</button>
                            
                            
                    </section>
                    <section className="col-1 border-right">
                            <h3>Catridges</h3>
                            <p>Discover all of our various THC catridges</p>
                            <button>View All</button>
                            
                    </section>
                    <section className="col-1">
                            <h3>Edibles</h3>
                            <p>No smoke? No Problem! Indulge in our finest products for your sweet tooth.</p>
                            <button>View All</button>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Categories

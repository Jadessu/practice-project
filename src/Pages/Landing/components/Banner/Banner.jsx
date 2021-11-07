import React from 'react'
import "./Banner.css"

function Banner() {
    return (
        <div className="wrapper">
            <section className="banner">
                <div className="banner-content">
                    <div className="title">

                    <h1>Welcome To Highline</h1>
                    </div>
                    <div className="banner-info">
                        <p>Whether you're looking for a euphoric or a relaxing<br/> experience, Highline delivers local New York cannabis right to<br/> your doorstep.</p>
                        <div className="button">
                            <button>Get High</button>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Banner

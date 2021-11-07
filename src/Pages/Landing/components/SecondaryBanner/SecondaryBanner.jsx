import React from 'react'
import "./SecondaryBanner.css"

function SecondaryBanner() {
    return (
      <div className="wrapper">
        <div className="secondary-container">
          <div className="left-banner ">
            <div className="sec-banner-content">
              <h3>see our catridges</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, veritatis enim ab laudantium a dolores, perspiciatis,
                nisi maxime quibusdam reprehenderit consequatur vero.
              </p>
              <a href="#">READ MORE</a>
            </div>
          </div>
          <div className="right-banner ">
            <div className="right-sec-content">
              <h3>Grow Your own</h3>
              <p>Are you ready to grow some marijuana?</p>
              <a href="#">READ MORE</a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SecondaryBanner

import React from 'react'
import "./Footer.css"

function Footer() {
    return (
      <div className="wrapper">
        <footer>
          <div className="footer-first">
            <h3>Highline</h3>
            <h4>Follow Us</h4>
            <div className="icons">
              <i class="fab fa-instagram"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-tiktok"></i>
              <i class="fab fa-facebook-square"></i>
            </div>
          </div>
          <div className="footer-second">
            <ul>
              <li>
                <a href="/blogs/new">About Us</a>
              </li>
              <li>

                <a href="/blogs/new">Help</a>
              </li>
              <li>

                <a href="/blogs/new">Contact us</a>
              </li>
              <li>

                <a href="/blogs/new">Where's my weed</a>
              </li>
            </ul>
          </div>
          <div className="footer-third">
            <h4>Subscribe to our Newsletter</h4>
            <form>
              <input placeholder="Your Email" type="text" />
              <div className="signup">Subscribe</div>
            </form>
          </div>
        </footer>
      </div>
    );
}

export default Footer

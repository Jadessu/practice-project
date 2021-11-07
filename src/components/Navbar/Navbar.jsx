import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="wrapper">
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">Highline</label>
        <ul>
          <li>
            <a href="#">Weed Strains</a>
          </li>
          <li>
            <a id="bloglink" href="/blogs">
              Edibles
            </a>
          </li>
          <li>
            <a href="/blogs/new">Catridges</a>
          </li>
          <li>
            <a href="/blogs/new">Accessories</a>
          </li>
          <li>
            <a href="/blogs/new">Faqs</a>
          </li>
          <li>
            <a href="/blogs/new">Help</a>
          </li>
          <li>
            <div className="auth-buttons"></div>
          </li>
        </ul>
        <div className="search">Something</div>
      </nav>
    </div>
  );
}

export default Navbar;

import React from 'react'
import "./Payment.css"

function Payment() {
    return (
      <div className="wrapper">
          <div className="payments">

        <h4>ACCEPTED PAYMENT METHODS</h4>
        <div className="payment-icons">
          <i class="fab fa-cc-visa"></i>
          <i class="fab fa-apple-pay"></i>
          <i class="fab fa-cc-amex"></i>
          <i class="fab fa-cc-paypal"></i>
          <i class="fas fa-dollar-sign"></i>
        </div>
        <div className="payment-infos">
            <ul>
                <li>Terms of use</li>
                <li>Privacy & Cookies Policy</li>
                <li>Cookies Settings</li>
            </ul>
        </div>
          </div>
      </div>
    );
}

export default Payment

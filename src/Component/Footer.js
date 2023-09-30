import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div class="footer-one">
        <div class="footer-one-child">free shipping on orders $40+</div>
        <div className="footer-one-child">|</div>
        <div class="footer-one-child">we ship internationally</div>
      </div>
      <div class="footer-two">
        <div class="footer-two-90">
          <div className="footer-two-subchild ">
            <div className="footer-two-subchild-Inner">
              <div className="footer-two-block">
                <h2 className="footer-block-title">Company</h2>
                <ul className="footer-list">
                  <li className="footer-list-item">Who We Are</li>
                  <li className="footer-list-item">Find a Bliss Near You</li>
                  <li className="footer-list-item">Shop</li>
                </ul>
              </div>
              <div className="footer-two-block">
                <h2 className="footer-block-title">For You</h2>
                <ul className="footer-list">
                  <li className="footer-list-item">Gift Cards</li>
                  <li className="footer-list-item">Contact Us</li>
                  <li className="footer-list-item">Shipping</li>
                  <li className="footer-list-item">Returns</li>
                  <li className="footer-list-item">Payment & Gift Cards</li>
                </ul>
              </div>
              <div className="footer-two-block">
                <h2 className="footer-block-title">The Dry Stuff</h2>
                <ul className="footer-list">
                  <li className="footer-list-item">Privacy Policy</li>
                  <li className="footer-list-item">Terms & Conditions</li>
                  <li className="footer-list-item">Accessibility Statements</li>
                </ul>
              </div>
              <div className="footer-two-block">
                <h2 className="footer-block-title">Stay In Touch</h2>
                <div>
                  <p>
                    Sign up for our newsletter to recieve 20% off your first
                    order!
                  </p>
                </div>
                <div className="footer-input">
                  <form action="">
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword2"
                      placeholder="Email Address"
                    />
                    <button type="submit" class="btn">
                      Submit
                    </button>
                  </form>
                </div>
                <div className="footer-after-form">
                  <p>
                    By signing up for our newsletter, you agree to our{" "}
                    <a href="">terms</a> and <a href="">privacy policy</a>.
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-two-subchild-aside"></div>
          </div>
        </div>
        <div class="footer-two-10 text-center">
          <p class="font-bold">@blissworld</p>
          <a
            href="https://www.facebook.com/blissworld/"
            target="_blank"
            class="footer-icon-main"
          >
            <img
              className="footer-icon"
              src="https://cdn.shopify.com/s/files/1/0702/9017/8333/files/FB_Icon_3x_2bac5f83-7ad5-4e7d-9827-b63a02ac75a9.png?v=1677555274"
            />
          </a>
          <a
            href="https://www.pinterest.com/blissworld/"
            target="_blank"
            class="footer-icon-main"
          >
            <img
              className="footer-icon"
              src="https://cdn.shopify.com/s/files/1/0702/9017/8333/files/Pinterest_Icon_3x_d086b6e0-0fda-40d4-9d89-8d965fc8ad17.png?v=1677555274"
            />
          </a>
          <a
            href="https://www.instagram.com/bliss/"
            target="_blank"
            class="footer-icon-main"
          >
            <img
              className="footer-icon"
              src="https://cdn.shopify.com/s/files/1/0702/9017/8333/files/IG_Icon_3x_489a17ea-3252-4165-a9af-39eab18e5b83.png?v=1677555274"
            />
          </a>
          <a
            href="https://www.youtube.com/user/blissbeautyblog"
            target="_blank"
            class="footer-icon-main"
          >
            <img
              className="footer-icon"
              src="https://cdn.shopify.com/s/files/1/0702/9017/8333/files/YT_Icon_3x_d592299d-007b-4eeb-a0f4-e070a910f23e.png?v=1677555274"
            />
          </a>
          <img 
          className="footer-brand-logo "
          src="https://cdn.shopify.com/s/files/1/0702/9017/8333/files/B_Corp_3x_2557d61c-dc6b-4c20-9ce7-93e5d654f4ad.png?v=1677555274" />
        </div>
      </div>
    </>
  );
}

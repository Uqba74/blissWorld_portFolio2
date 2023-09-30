import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ShopAll from "./ShopAll";

export default function Header() {
  const searchRef = useRef();
  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
  };

  return (
    <>
      <div className="subHeader">
        <p>
          Free Shipping on U.S. orders $40+. Free Returns. International
          Shipping!
        </p>
      </div>
      <div className="mainHead ">
        <div className="logo-sec">
          <h1 className="header-logo ">
            <a className="header-logoLink" href="">
              <img
                class="Header__LogoImage Header__LogoImage--primary"
                src="//www.blissworld.com/cdn/shop/files/Bliss_Logo_White_3x_6c3396d6-15e0-4c23-a933-633783887842_140x.png?v=1675358315"
                srcset="//www.blissworld.com/cdn/shop/files/Bliss_Logo_White_3x_6c3396d6-15e0-4c23-a933-633783887842_140x.png?v=1675358315 1x, //www.blissworld.com/cdn/shop/files/Bliss_Logo_White_3x_6c3396d6-15e0-4c23-a933-633783887842_140x@2x.png?v=1675358315 2x"
                alt="Bliss World Store"
              />
            </a>
          </h1>
        </div>
        <div className="header-icon">
          <a href="" onClick={searchHandler}>
            <span>
              <svg
                class="Icon Icon--search-bliss"
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="28"
                viewBox="0 0 27 28"
                fill="none"
              >
                <circle
                  cx="12.2909"
                  cy="12.7157"
                  r="11.2909"
                  fill="white"
                  stroke="black"
                  stroke-width="2"
                ></circle>
                <path
                  d="M20.6206 21.0001L25.6989 26.1237"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                ></path>
              </svg>
            </span>
          </a>
          <a href="" className="icon-sec">
            <span>
              <svg
                class="Icon Icon--account-bliss"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="27"
                viewBox="0 0 25 27"
                fill="none"
              >
                <ellipse
                  cx="12.5003"
                  cy="7.5"
                  rx="6.84255"
                  ry="6.5"
                  fill="white"
                  stroke="black"
                  stroke-width="2"
                ></ellipse>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.5001 15C16.8539 15 21.2076 21.6 22.9491 24.5753C23.3265 25.2202 22.8547 26 22.1075 26H2.89274C2.14554 26 1.67369 25.2202 2.05114 24.5753C3.79265 21.6 8.14638 15 12.5001 15Z"
                  fill="white"
                  stroke="black"
                  stroke-width="2"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </a>
          <a href="" className="icon-sec">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="28"
                fill="none"
              >
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  stroke="#000"
                  stroke-width="2"
                  d="M3.032 6H26.68L28 26H2L3.032 6Z"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M10 5s5.077-9 10 0H10Z"
                  clip-rule="evenodd"
                ></path>
                <path
                  stroke="#000"
                  stroke-linecap="round"
                  stroke-width="2"
                  d="M10 5s5.077-9 10 0"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>

      <nav class="navbar navbar-expand-lg main-Nav">
        <div class="">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav HorizontalList">
              <li class="nav-item HorizontalList__Item">
                <Link class="nav-link" aria-current="page" to="/shopall">
                  Shop All
                </Link>
              </li>
              <li class="nav-item HorizontalList__Item">
                <Link class="nav-link" to="/bestSeller">
                  Best Sellers
                </Link>
              </li>
              <li class="nav-item HorizontalList__Item">
                <a class="nav-link" href="#">
                  Skincare
                </a>
              </li>
              <li class="nav-item HorizontalList__Item">
                <a class="nav-link" href="#">
                  Body Care
                </a>
              </li>
              <li class="nav-item HorizontalList__Item">
                <a class="nav-link" href="#">
                  Sets & Kits
                </a>
              </li>
              <li class="nav-item HorizontalList__Item">
                <a class="nav-link" href="#">
                  Find Your Routine
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="search-form " ref={searchRef}>
        <input type="search" placeholder="Search here..." />
        <label htmlFor="serch-box" className="fas fa-search"></label>
      </div>
    </>
  );
}

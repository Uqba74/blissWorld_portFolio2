import React, { useState } from "react";
import ShopSpringWavesBtn from "./ShopSpringWavesBtn";

export default function ShopAllCards({ image, title, description, price, addBtn }) {

  const[hovering, sethovering] = useState(false);

  const handleMouseEnter = () => {
    sethovering(true);
  };

  const handleMouseLeave = () => {
    sethovering(false);
  }
  return (
    <>
      <div class="card shop-coll shop-all-card" onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
        <a href="">
          <img src={image} class="card-img-top" alt={title} />
        </a>

        <div class="card-body shop-coll-body">
          <a href="">
            <h5 class="card-title text-center">{title}</h5>
          </a>
          <p class="card-text text-center shop-coll-para spring-card-price">
            {price}
          </p>
          <p class="card-text text-center shop-coll-para spring-card-price">
            {description}
          </p>
          {hovering ? <p className="text-center" >
          <button className="shop-now SprngWaveBtn">Add to bag</button>
          </p> : " "} 
        </div>
      </div>
    </>
  );
}

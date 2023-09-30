import React from "react";

export default function SpringCard({image, title, description}) {
  return (
    <>
      <div class="card shop-coll shop-all-card shop-spring-card">
        <a href="">
          <img
            src={image}
            class="card-img-top"
            alt={title}
          />
        </a>

        <div class="card-body shop-coll-body ">
          <a href="">
            <h5 class="card-title text-center">{title}</h5>
          </a>
          <p class="card-text text-center shop-coll-para spring-card-price">{description}</p>
        </div>
      </div>
    </>
  );
}

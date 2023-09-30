import React from "react";

export default function Collcard({onClick ,viewDetails,image, title, description}) {
  return (
    <>

    
      <div class="card shop-coll" >
        <a href="">
          <img
            src={image}
            class="card-img-top"
            alt={title}
          />
        </a>
        <div class="card-body shop-coll-body">
          <a href="">
            <h5 class="card-title text-center"  >{title}</h5>
          </a>
          <p class="card-text text-center shop-coll-para">{description}</p>
        </div>
      </div>
    </>
  );
}

import React from 'react';
import ShopSpringWavesBtn from './ShopSpringWavesBtn';


export default function addCart(image, title, price, description, Question, Anshead, Answer, Skintype, Scent) {
  return (
    <div>
        <div>
            <img src={image} alt={title} />
        </div>
        <div>
        <h2 class="card-title text-center"  >{title}</h2>
        <p class="card-text text-center shop-coll-para">{description}</p>
        <h5 class="card-text text-center shop-coll-para">{price}</h5>
        </div>
        <div>
            <div>
                <button>-</button>
                <input type="text" placeholder='1'/>
                <button>+</button>
            </div>
            <p className="text-center">
          <ShopSpringWavesBtn />
          </p>
        </div>
    </div>
  )
}

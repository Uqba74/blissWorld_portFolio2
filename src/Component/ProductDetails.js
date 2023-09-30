import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cardData from "./productData";
import ShopSpringWavesBtn from "./ShopSpringWavesBtn";
import ShopAll from "./ShopAll";

export default function ProductDetails(data) {
  let { id } = useParams();
  id = parseInt(id) - 1;
  // console.log(id);

  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [isAddedToBag, setIsAddedToBag] = useState(false);
  const [isCardOpen, setisCardOpen] = useState(true);
  // const [hideAllProd, sethideAllProd] = useState(true);

  useEffect(() => {
    setProduct(cardData[id]);
    // console.log(cardData[id]);
  }, [product]);

  if (!product) {
    return <div>Loading</div>;
  }

  const Increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleAddToBag = () => {
    // Perform any necessary actions when adding to the bag (e.g., updating a shopping cart state).

    // Change the button text to "Added to Bag."
    setIsAddedToBag(true);
  };

  const closeCard = () => {
    setisCardOpen(false);
  };

  return (
    <>
      <div className="bgColor-on-card-render">
        <ShopAll />
      </div>
      {isCardOpen && (
        <div className=" shop-all-main prodDetails">
          <div className="shop-all-prod">
            <button className="close-button text-center" onClick={closeCard}>
              {" "}
              &times;{" "}
            </button>

            <div className="card-img-bg">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="text-align-left prod-descp">
              <div>
                <div className="prod-title ">
                  <h2 class="card-title mt-1">{product.title}</h2>
                </div>
                <p class="card-text shop-coll-para ">{product.description}</p>
                <div class="prod-price">{product.price}</div>
              </div>
              <div className="counter-detail d-flex mt-1">
                <div className="prod-counter d-flex">
                  <button onClick={decrement}>-</button>
                  <input className="counter-input" type="text" value={count} />
                  <button onClick={Increment}>+</button>
                </div>

                {!isAddedToBag ? (
                  <button
                    className="shop-now SprngWaveBtn counter-shop-btn"
                    onClick={handleAddToBag}
                  >
                    Add to bag
                  </button>
                ) : (
                  <button className="shop-now SprngWaveBtn counter-shop-btn add-cart-done">
                    Added to bag
                  </button>
                )}
              </div>
              <div className="seperator-by-border"></div>
              <p class="card-text shop-coll-para prod-Ques">{product.Question}</p>
              <p class="card-text shop-coll-para ">{product.Answer}</p>
              <p class="card-text shop-coll-para prod-Ques">SkinType: <span className="shop-coll-para"> {product.Skintype} </span></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

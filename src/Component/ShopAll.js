import React from "react";
import { Link } from "react-router-dom";
import ShopAllCards from "./ShopAllCards";
import cardData from "./productData";

// const cardData = [
//   {
//     id: 1,
//     image:
//       "https://www.blissworld.com/cdn/shop/files/Bliss-BlockStarSoldier-NBCBadge-ECommerce_JPG_400x.jpg?v=1694119077",
//     title: "DRENCH & QUENCH™",
//     description: "Supercharged moisturizers for happy, hydrated skin.",
//   },
//   {
//     id: 2,
//     image:
//       "https://www.blissworld.com/cdn/shop/files/Bright_Idea_Collection_Image_3x_af282028-6dc8-4aef-a6ee-eb88b64dd967_400x.png?v=1676576262",
//     title: "BRIGHT IDEA",
//     description: "Clinical-grade formulas for visibly radiant results.",
//   },
//   {
//     id: 3,
//     image:
//       "https://www.blissworld.com/cdn/shop/files/youth-got-this_400x.png?v=1678380249",
//     title: "YOUTH GOT THIS™",
//     description:
//       "Maintain youthful, radiant skin with pure retinol + Prevent-4™ Complex",
//   },
//   {
//     id: 4,
//     image:
//       "https://www.blissworld.com/cdn/shop/files/Clear_Genius_Collection_Image_3x_acbef17a-8d0e-4d38-8c24-cc56c17189d0_400x.png?v=1676576326",
//     title: "CLEAR GENIUS",
//     description: "Treat problem skin and maintain a clear, calm complexion.",
//   },
// ];

// const cardData = [
//   {
//     id: 1,
//     image:
//       "https://www.blissworld.com/cdn/shop/files/Bliss-BlockStarSoldier-NBCBadge-ECommerce_JPG_400x.jpg?v=1694119077",
//     title: "Block Daily Mineral Spf 30",
//     description: "$25.00",
//   },
//   {
//     id: 2,
//     image:
//       "https://www.blissworld.com/cdn/shop/products/Rest_Assured_Eye_Cream_Front__54512.1674080733.1280.1280_400x.jpg?v=1674858396",
//     title: "Rest Assured Eye Cream",
//     description: "$25.00",
//   },
//   {
//     id: 3,
//     image:
//       "https://www.blissworld.com/cdn/shop/products/Blackhead_Breadown_Front__80282.1674081051.1280.1280_400x.jpg?v=1674858407",
//     title: "Blackhead Breakdown",
//     description: "$18.00",
//   },
//   {
//     id: 4,
//     image:
//       "https://www.blissworld.com/cdn/shop/products/DQ_All_Day_Serum_Front__51201.1674082541.1280.1280_400x.jpg?v=1674858384",
//     title: "Drench & Quench Serum",
//     description: "$27.00",
//   },
// ];

export default function ShopAll() {
  return (
    <>
      <div>
        <h1 className="allProductHead text-center">All Product</h1>
        <div className="shop-all-main">
          <div className="shop-all-prod">
            {cardData.map((product, index) => (
              <Link to={`/products/${product.id}`}>
                <ShopAllCards
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

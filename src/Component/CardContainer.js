import React, { useState } from "react";
import Collcard from "./Collcard";
import ProductDetails from "./ProductDetails";
// import cardData from "./productData";

const cardData = [
  {
    image:
      "https://www.blissworld.com/cdn/shop/files/Drench_Quench_Collection_Image_3x_0c893f86-e79e-4959-af93-df1bf1c5e7ce_400x.png?v=1676576234",
    title: "DRENCH & QUENCH™",
    description: "Supercharged moisturizers for happy, hydrated skin.",
  },
  {
    image:
      "https://www.blissworld.com/cdn/shop/files/Bright_Idea_Collection_Image_3x_af282028-6dc8-4aef-a6ee-eb88b64dd967_400x.png?v=1676576262",
    title: "BRIGHT IDEA",
    description: "Clinical-grade formulas for visibly radiant results.",
  },
  {
    image:
      "https://www.blissworld.com/cdn/shop/files/youth-got-this_400x.png?v=1678380249",
    title: "YOUTH GOT THIS™",
    description:
      "Maintain youthful, radiant skin with pure retinol + Prevent-4™ Complex",
  },
  {
    image:
      "https://www.blissworld.com/cdn/shop/files/Clear_Genius_Collection_Image_3x_acbef17a-8d0e-4d38-8c24-cc56c17189d0_400x.png?v=1676576326",
    title: "CLEAR GENIUS",
    description: "Treat problem skin and maintain a clear, calm complexion.",
  },
];

const CardContainer = () => {
  const [clickedCard, setClickedCard] = useState(null);

  const handleCardDetails = (card) => {
    setClickedCard(card);
  };
  const handleCloseDetails = () => {
    setClickedCard(null);
  };

  return (
    <>
      <div className="cardContainer">
        {cardData.map((product, index) => (
          <Collcard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      
        
      </div>
    </>
  );
};

export default CardContainer;

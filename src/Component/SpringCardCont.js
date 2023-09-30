import React from "react";
import SpringCard from "./SpringCard";

const SpringCardCont = () => {
  const cardData = [
    {
      image:
        "https://www.blissworld.com/cdn/shop/files/Bliss-BlockStarSoldier-NBCBadge-ECommerce_JPG_400x.jpg?v=1694119077",
      title: "Block Daily Mineral Spf 30",
      description: "$25.00",
    },
    {
      image:
        "https://www.blissworld.com/cdn/shop/products/Rest_Assured_Eye_Cream_Front__54512.1674080733.1280.1280_400x.jpg?v=1674858396",
      title: "Rest Assured Eye Cream",
      description: "$25.00",
    },
    {
      image:
        "https://www.blissworld.com/cdn/shop/products/Blackhead_Breadown_Front__80282.1674081051.1280.1280_400x.jpg?v=1674858407",
      title: "Blackhead Breakdown",
      description: "$18.00",
    },
    {
      image:
        "https://www.blissworld.com/cdn/shop/products/DQ_All_Day_Serum_Front__51201.1674082541.1280.1280_400x.jpg?v=1674858384",
      title: "Drench & Quench Serum",
      description: "$27.00",
    },
  ];
  return (
    <>
      <div className="cardContainer">
        {cardData.map((data, index) => (
          <SpringCard
            key={index}
            image={data.image}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </>
  );
};

export default SpringCardCont;

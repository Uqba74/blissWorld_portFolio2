import React from "react";
import CollectionHeadSec from "./CollectionHeadSec.js";
import CardContainer from "./CardContainer.js";
import HeroSecImg from "./HeroSecImg.js";
import HeroSec from "./HeroSec.js";
import SingleImgSec from "./SingleImgSec.js";
import CardWithBgImg from "./CardWithBgImg.js";
import BlockstarImgSec from "./BlockstarImgSec.js";
import Blockstar from "./Blockstar.js";
import MineralCov from "./MineralCov.js";
import Skincare from "./Skincare.js";
import SkincareCont from "./SkincareCont.js";
import SpringSecHead from "./SpringSecHead.js";
// import SpringCard from "./SpringCard.js";
import SpringCardCont from "./SpringCardCont.js";
import ShopSpringWavesBtn from "./ShopSpringWavesBtn.js";
import GetSocialFooter from "./GetSocialFooter.js";

export default function Home() {
  return (
    <>
      <div className="First-container">
        <SingleImgSec />
        <HeroSec />
      </div>

      <div className="row">
        <div className="col-lg-12">
          <CollectionHeadSec />
        </div>
      </div>

      {/* <div className="row collection-card-main">
        <div className="col-lg-12">
          <CardContainer />
        </div>
        <div className="col-lg-12">
          <CardContainer />
        </div>
        <div className="col-lg-3">
          <CardContainer />
        </div>
        <div className="col-lg-3">
          <CardContainer />
        </div>
      </div> */}

        <div className="collection-card-main">
          <CardContainer />
        </div>

      <div className="row">
        <div className="col-lg-12 First-container bright-idea-main">
          <CardWithBgImg />
          <SingleImgSec />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 First-container blockStar">
          <BlockstarImgSec />
          <Blockstar />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 First-container blockStar">
          <MineralCov />
          <SingleImgSec />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 First-container skin-main-cont">
          <Skincare />
          <SkincareCont />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12 ">
          <SpringSecHead />
        </div>
      </div>

      {/* <div className="row main-spring-sec">
        <div className="col-lg-3">
          <SpringCard />
        </div>
        <div className="col-lg-3">
          <SpringCard />
        </div>
        <div className="col-lg-3">
          <SpringCard />
        </div>
        <div className="col-lg-3">
          <SpringCard />
        </div>
      </div> */}

      <div className="collection-card-main spring-card-cont">
        <SpringCardCont />
      </div>

      <div className="row">
        <div className="col-lg-12 spring-waves-btn">
          <ShopSpringWavesBtn />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-12">
          <GetSocialFooter />
        </div>
      </div>
    </>
  );
}

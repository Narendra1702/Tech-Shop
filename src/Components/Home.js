import React from "react";
import FirstCarousel from "./FirstCarousel";
import Card from "./Card";
import Slider from "./Slider";
import OurAdvantages from "./Ouradvantages";
import Footer from "./Footer";

function Home() {
  return (
    <div className="bg-dark">
    <FirstCarousel/>
    <Slider/>
    <Card/>
    <OurAdvantages/>
    <Footer/>
    </div>
  );
}

export default Home;

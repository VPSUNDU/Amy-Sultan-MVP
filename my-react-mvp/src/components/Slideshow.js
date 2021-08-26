import React from "react";
import { Slide } from "react-slideshow-image";
import slideImages1 from "../components/imgRBboy.jpg";
import slideImages2 from "../components/imgRBgirl.jpg";
import slideImages3 from "../components/imgRBhand.jpg";

const slideImages = [
  'images/imgRBboy.jpg',
  'images/imgRBgirljpg',
  'images/imgRBhand.jpg'
];

function Slideshow () {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span><img src={slideImages1} alt="image1..." /></span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
              <span><img src={slideImages2} alt="image2..." /></span>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
              <span><img src={slideImages3} alt="image3..." /></span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
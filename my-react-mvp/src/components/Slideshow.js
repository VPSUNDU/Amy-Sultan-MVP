import React from "react";
import { Slide } from "react-slideshow-image";
import slideImages1 from "../components/imgRBboy.jpg";
import slideImages2 from "../components/imgRBgirl.jpg";
import slideImages3 from "../components/imgRBhand.jpg";
import slideImages4 from "../components/imgRBgirl1.jpg";


const slideImages = [
  'images/imgRBboy.jpg',
  'images/imgRBgirljpg',
  'images/imgRBhand.jpg',
  'images/imgRBgirl1.jpg'
];

function Slideshow () {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
              <span><img src={slideImages1} alt="image1..." class="responsive" width="600" height="400" /></span>
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
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[3]})`}}>
              <span><img src={slideImages4} alt="image4..." /></span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
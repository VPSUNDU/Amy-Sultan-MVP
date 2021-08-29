import React, { useState, useEffect} from "react";
import "./flipcards.css";
import round1 from "./roundRed.jpg";
import round2 from "./roundYellow.jpg";
import round3 from "./roundBlue.jpg";
import round4 from "./roundGreen.jpg";
import round5 from "./roundPurple.jpg";
import round6 from "./roundPink.jpg";
import round7 from "./roundDarkblue.jpg";
import round8 from "./roundOrange.jpg";
import round9 from "./roundDarkgreen.jpg";
import round10 from "./roundBrown.jpg";


function Flipcards() {


	return (
    <div>  
      <ul id="hexGrid">
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src={round1} alt="" />
            <h2>Ephesians 6:1</h2>
            <p>Children,obey your parents because you belong to the Lord, for this is the right thing to do</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src={round2} alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src={round3} alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src={round4} alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src={round5} alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src={round6} alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src={round7} alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src="https://farm4.staticflickr.com/3766/12953056854_b8cdf14f21.jpg" alt="" />
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src={round8} alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src={round9} alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src={round10}alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src="https://farm4.staticflickr.com/3771/13199704015_72aa535bd7.jpg" alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src={round4} alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src="https://farm8.staticflickr.com/7187/6895047173_d4b1a0d798.jpg" alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src={round2} alt="" />
            <h2>This is a title</h2>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src={round6} alt="" />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src="https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg" alt="" />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src="https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg" alt="" />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      <li class="hex">
        <div class="hexIn">
          <a class="hexLink" href="#">
            <img src={round5} alt="" />
            <h1>This is a title</h1>
            <p>Some sample text about the article this hexagon leads to</p>
          </a>
        </div>
      </li>
      </ul>
    </div>
	);
}

export default Flipcards;

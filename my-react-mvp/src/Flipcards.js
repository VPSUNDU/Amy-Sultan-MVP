import React, { useState, useEffect } from "react";
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
							<p>
								Children,obey your parents because you belong to the Lord, for
								this is the right thing to do
							</p>
						</a>
					</div>
				</li>
				<li class="hex">
					<div class="hexIn">
						<a class="hexLink" href="#">
							<img src={round2} alt="" />
							<h2>Matthew 5:44</h2>
							<p>
								But I say, love your enemies. Pray for those who persecute you.
							</p>
						</a>
					</div>
				</li>
				<li class="hex">
					<div class="hexIn">
						<a class="hexLink" href="#">
							<img src={round3} alt="" />
							<h2>Matthew 10:7</h2>
							<p>Go and announce to them that the Kingdom of Heaven is near.</p>
						</a>
					</div>
				</li>
				<li class="hex">
					<div class="hexIn">
						<a class="hexLink" href="#">
							<img src={round4} alt="" />
							<h2>Luke 1:37</h2>
							<p>For the word of God will never fail.</p>
						</a>
					</div>
				</li>
				<li class="hex">
					<div class="hexIn">
						<a class="hexLink" href="#">
							<img src={round5} alt="" />
							<h2>Galatians 1:5e</h2>
							<p>All glory to God forever and ever! Amen.</p>
						</a>
					</div>
				</li>
				<li class="hex">
					<div class="hexIn">
						<a class="hexLink" href="#">
							<img src={round6} alt="" />
							<h2>Colossians 3:20</h2>
							<p>
								Children, always obey your parents, for this pleases the Lord.
							</p>
						</a>
					</div>
				</li>
				<li class="hex">
					<div class="hexIn">
						<a class="hexLink" href="#">
							<img src={round7} alt="" />
							<h2>1 Thessalonians 5:17</h2>
							<p>Never stop praying.</p>
						</a>
					</div>
				</li>
				<li class="hex">
					<div class="hexIn">
						<a class="hexLink" href="#">
							<img
								src="https://farm4.staticflickr.com/3766/12953056854_b8cdf14f21.jpg"
								alt=""
							/>
						</a>
					</div>
				</li>
				<li class="hex">
					<div class="hexIn">
						<a class="hexLink" href="#">
							<img src={round8} alt="" />
							<h2>Philippians 4:13</h2>
							<p>
								For I can do everything through Christ, who gives me strength.
							</p>
						</a>
					</div>
				</li>
				<li class="hex">
					<div class="hexIn">
						<a class="hexLink" href="#">
							<img src={round9} alt="" />
							<h2>Galatians 1:5</h2>
							<p>All glory to God forever and ever! Amen.</p>
						</a>
					</div>
				</li>
				<li class="hex">
					<div class="hexIn">
						<a class="hexLink" href="#">
							<img src={round10} alt="" />
							<h2>Psalms 55:22</h2>
							<p>Give your burdens to the Lord, and he will take care of you. He will not permit the godly to slip and fall.</p>
						</a>
					</div>
				</li>
				<li class="hex">
					<div class="hexIn">
						<a class="hexLink" href="#">
							<img
								src="https://farm4.staticflickr.com/3771/13199704015_72aa535bd7.jpg"
								alt=""
							/>
							<h2>Romans 3:23</h2>
							<p>For everyone has sinned; we all fall short of God’s glorious standard.</p>
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
			</ul>
		</div>
	);
}

export default Flipcards;

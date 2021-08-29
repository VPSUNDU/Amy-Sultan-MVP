import React from "react";
import Slideshow from "./components/Slideshow";

function Homepage() {
	return (
		<div class="css-slideshow">
			<div class="css-container">
				<h2>Hi, Welcome!</h2>
				<h5>
        		Learning Bible verses can feel daunting. How to start and what verses should
				you choose? This website is created to help our kids to memorize the bible scriptures and to make it fun.
				Sunday school teachers can add new student and add new bible verses too.
				</h5>
				<Slideshow />
			</div>
		</div>
	);
}

export default Homepage;

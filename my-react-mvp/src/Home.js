import React from "react";
import Slideshow from "./components/Slideshow";

function Homepage() {
	return (
		<div class="css-slideshow">
			<div class="css-container">
				<h2>Hi, Welcome!</h2>
				<h5>
        		The most important thing we can have our children memorize is God's Word.
				<br></br>
				Not only will memorizing scripture help shape their character, grow their faith, and teach them the Truth,
				<br></br>
				it will be with them always to help comfort them, encourage them, discipline them, and nurture them.
				<br></br>
				Our kids need spiritual ammo to get through their lives.
				The Bible, our “sword of the spirit”, is what we MUST give them. 
				<br></br>
				Scripture memory might sound optional, but indeed it is essential to run the race — no matter how old you are!
				</h5>
				<Slideshow />
			</div>
		</div>
	);
}

export default Homepage;

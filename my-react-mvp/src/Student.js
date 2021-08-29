import React from "react";
import Flipcards from "./Flipcards";
import "./Student.css";

function Student() {
	
	
	return (
		<div>
			<nav className="navbar navbar-info bg-info justify-content-between"></nav>
			<div class="css-container">
				<br></br>
				<h2>Hi there! 🙂 Hello! 😊 High-Five! ✋ 😆</h2>
				<h5>
				You are BRAVER than you believe, STRONGER than you seem and SMARTER than you think.
				{/* <br></br> */}
				You are MORE than who you were. You can START OVER ANYTIME, LIKE TODAY!
				<br></br>
				Let's get started, are you ready to test your memory?
				</h5>
				<div>
					<h6>Hover over the cards to help you memorize the bible verses. Click the image below:</h6>
					<nav className="navbar navbar-info bg-info justify-content-between"></nav>
				</div>
			</div>
			<div><Flipcards /></div>
		</div>
 	);
}

export default Student;

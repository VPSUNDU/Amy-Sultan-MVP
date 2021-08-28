import React from "react";
import "./Student.css";

function Student() {
	return (
		<div>
			<p>
			Let's get started, are you ready to test your memory?
			</p>
				
			<h6>Card Flip to help you memorize it. Hover over the image below:</h6>
			<div class="flip-card">
				<div class="flip-card-inner">
					<div class="flip-card-front">
						<h6>Ephesians 6:1</h6>
					</div>
					<div class="flip-card-back">
						<p>
							Children, obey your parents because you belong to the Lord, for
							this is the right thing to do.
						</p>
					</div>
				</div>
			</div>

			<div class="flip-card">
				<div class="flip-card-inner"></div>
				<div class="flip-card-front">
					<h6>Matthew 5:44</h6>
				</div>
				<div class="flip-card-back">
					<p>But I say, love your enemies. Pray for those who persecute you.</p>
				</div>
			</div>
		</div>
	);
}

export default Student;

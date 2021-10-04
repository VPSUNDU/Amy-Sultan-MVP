import React, { useState, useEffect } from "react";
import ReactCardFlip from 'react-card-flip';


function Reg() {
	const [isFlipped, setIsFlipped] = useState(false);
	let [input, setInput] = useState({});
	let [teacher, setTeacher] = useState([]);
	let [submitted, setSubmitted] = useState(false);

	useEffect(() => {
		fetch("/register")
			.then((res) => res.json())
			.then((json) => {
				setTeacher(json);
				// console.log(json);
			})
			.catch((error) => { });
	}, []);

	const handleChange = (e) => {
		console.log(e);
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addTeacher();
		setSubmitted(true);
		setInput({ firstname: "", lastname: "", email: "", password: "" });
	};

	const addTeacher = () => {
		fetch("/register", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/text'
			},

			body: JSON.stringify(input),
		})
			.then((response) => response.json())
			.then((teacher) => {
				console.log(teacher);
				setTeacher(teacher);
			})
			.catch((error) => {
				console.log(error);
			});
	};
	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};
	return (
		<div className="form-container">
			<div className="card">
				<div className="inner-box">
					<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
						<front className="card-front">
							<h3>Teacher's Login</h3>
							<form >
								<input className="input-box"
									type="email"
									placeholder="Please enter your email"
									required
								/>
								<input className="input-box"
									type="password"
									placeholder="Enter password"
									required
								/>
								<button type="submit" className="submit-btn">
									Submit
								</button>
								<input type="checkbox" />
								<span>Remember Me</span>
								<button type="button" onClick={handleClick}>
									I'm New Here
								</button>
								<a href="">Forget Password</a>
							</form>
						</front>

						<back>
							<div className="card-back">
								<h3> New Teacher's Reg</h3>
								<form onSubmit={(e) => handleSubmit(e)}>
									{submitted ? <div class="success-message">Thank you for Registering</div> : null}
									<input className="input-box"
										type="text"
										name="firstname"
										value={input.firstname}
										placeholder="Your First Name"
										required
										onChange={(e) => handleChange(e)} />

									<input className="input-box"
										type="text"
										name="lastname"
										value={input.lastname}
										placeholder="Your Last Name"
										required
										onChange={(e) => handleChange(e)} />

									<input className="input-box"
										type="email"
										name="email"
										value={input.email}
										placeholder="Please enter your email"
										required
										onChange={(e) => handleChange(e)} />

									<input className="input-box"
										type="password"
										name="password"
										value={input.password}
										placeholder="Enter password"
										required
										onChange={(e) => handleChange(e)} />

									<button type="submit" className="submit-btn">
										Submit
									</button>
									<input type="checkbox" />
									<span>Remember Me</span>
									<button type="button" className="btnn" onClick={handleClick}>
										I have an Account
									</button>
								</form>
							</div>
						</back>
					</ReactCardFlip>
				</div>
			</div>
		</div>
	);
}

export default Reg;

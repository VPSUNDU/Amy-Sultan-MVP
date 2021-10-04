
import ReactCardFlip from 'react-card-flip';
import React, { useState, useEffect } from "react";

const StudentLogin = () => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [newStudent, setnewStudent] = useState([]);
	let [input, setInput] = useState({});
	let [submitted, setSubmitted] = useState(false);

	useEffect(() => {
		fetch("/studentReg")
			.then((res) => res.json())
			.then((json) => {
				setnewStudent(json);
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
		addnewStudent();
		setSubmitted(true);
		setInput({ firstname: "", lastname: "", email: "", password: "" });
	};

	const addnewStudent = () => {
		fetch("/studentReg", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/text'
			},

			body: JSON.stringify(input),
		})
			.then((response) => response.json())
			.then((newStudent) => {
				console.log(newStudent);
				setnewStudent(newStudent);
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
			<div className="cardStudent">
				<div className="inner-box">
					<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
						<front className="card-front">
							<h3>Student's Log in</h3>
							<form >
								<input className="input-box"
									type="email"
									value={input.email}
									placeholder="Please enter your email"
									required/>
								<input className="input-box"
									type="password"
									value={input.password}
									placeholder="Enter password"
									required/>
								<button type="submit" className="submit-btn">
									Submit
								</button>
								<input type="checkbox" />
								<span>Remember Me</span>
								<button type="button" onClick={handleClick}>
									I'm New Here
								</button>
								<a className="href" href="">Forget Password</a>
							</form>
						</front>
						<back>
							<div className="card-back">
								<h3> New Student's Reg</h3>
								<form onSubmit={(e) => handleSubmit(e)}>
								{submitted ? <div className="success-message">Thank you for Registering</div> : null}
									<input class="input-box"
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
};

export default StudentLogin;

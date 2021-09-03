import React, {useState, useEffect} from "react";
//import { Link } from 'react-router-dom';

function Reg() {
	let [input, setInput] = useState({});
	let [teacher, setTeacher] = useState([]);

	useEffect(() => {
		fetch("/register")
			.then((res) => res.json())
			.then((json) => {
				setTeacher(json);
				// console.log(json);
			})
			.catch((error) => {});
	}, []);

	const handleChange = (e) => {
		console.log(e);
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addTeacher();
		setInput({firstname: "", lastname: "", email: "", password:""});
	};

	const addTeacher = () => {
		fetch("/register", {
			method: "POST",
			headers : { 
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

	// const deleteTeacher = (id) => {
	// 	fetch(`/teacher/${id}`, {
	// 		method: "DELETE",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	})
	// 		.then((response) => response.json())
	// 		.then(() => {
	// 			setTeacher(teacher.filter((e) => e.id !== id));
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

	return (
		<div className="form-container">
			<form className="login-body" onSubmit={(e) => handleSubmit(e)}>
				<h3>Register</h3>

				<div className="form-group">
					<label>First name</label>
					<input
						type="text"
						className="form-control"
						placeholder="First name"
						name="firstname"
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className="form-group">
					<label>Last name</label>
					<input type="text" className="form-control"  name="lastname" placeholder="Last name" 
					onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className="form-group">
					<label>Email</label>
					<input
						type="email"
						className="form-control"
						placeholder="Enter email"
						name="email"
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<div className="form-group">
					<label>Password</label>
					<input
						type="password"
						className="form-control"
						placeholder="Enter password"
						name="password"
						onChange={(e) => handleChange(e)}
					/>
				</div>

				<button type="submit" className="btn btn-dark btn-lg btn-block">
					Register
				</button>
				<p className="forgot-password text-right">
					Already registered <a href="#">log in?</a>
				</p>
			</form>
		</div>
	);
}

export default Reg;

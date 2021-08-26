import React, { useEffect, useState } from "react";
import TeacherBibleVerse from "./TeacherBibleVerse";

function Teacher() {
	let [input, setInput] = useState({});
	let [students, setStudents] = useState([]);

	useEffect(() => {
		fetch("/students")
			.then((res) => res.json())
			.then((json) => {
				setStudents(json);
				console.log(json);
			})
			.catch((error) => {});
	}, []);

	const handleChange = (e) => {
		console.log(e);
		setInput({ ...input, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addStudent();
		setInput({firstname: "", lastname: "", age: ""});
	};

	const addStudent = () => {
		fetch("/students", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(input),
		})
			.then((response) => response.json())
			.then((students) => {
				setStudents(students);
				console.log(students);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const deleteStudent = (id) => {
		fetch(`/students/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then(() => {
				setStudents(students.filter((e) => e.id !== id));
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<div>
				<TeacherBibleVerse />
			</div>
			<nav className="navbar navbar-info bg-info justify-content-between">
			</nav>
			<form className="form" onSubmit={(e) => handleSubmit(e)}>
				First name:
				<input
					className="form"
					type="text"
					name="firstname"
					value={input.first_name}
					placeholder="Student's name"
					onChange={(e) => handleChange(e)}
				></input>
				Last name:
				<input
					className="form"
					type="text"
					name="lastname"
					value={input.last_name}
					placeholder="Student's surname"
					onChange={(e) => handleChange(e)}
				></input>
				Age:
				<input
					className="form"
					type="text"
					name="lastname"
					value={input.age}
					placeholder="Student's age"
					onChange={(e) => handleChange(e)}
				></input>
				<button type="resetsearch" class="btn btn-warning">
					Submit
				</button>
			</form>

			<table class="table table-hover">
				<thead>
					<tr>
						<th>Id</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>
					{students.map((e) => (
						<tr>
							<td>{e.id}</td>
							<td>{e.first_name}</td>
							<td>{e.last_name}</td>
							<td>{e.age}</td>
							<div>
								<button className="delete" onClick={() => deleteStudent(e.id)}>
									Delete
								</button>
							</div>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Teacher;
import React, { useEffect, useState } from "react";

function TeacherBibleVerse() {
    let [input, setInput] = useState({});
    let [bibleVerses, setBibleVerses] = useState([]);

    useEffect(() => {
		fetch("/bible_verse")
			.then((res) => res.json())
			.then((json) => {
				setBibleVerses(json);
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
		addBibleVerse();
		setInput({bible_verse: "", bible_scripture: ""});
	};

	const addBibleVerse = () => {
		fetch("/bible_verse", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(input),
		})
			.then((response) => response.json())
			.then((bible_verse) => {
				setBibleVerses(bible_verse);
				console.log(bible_verse);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const deleteBibleVerse = (id) => {
		fetch(`/bible_verse/${id}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then(() => {
				setBibleVerses(bibleVerses.filter((e) => e.id !== id));
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div>
			<form className="form" onSubmit={(e) => handleSubmit(e)}>
				Bible Verse:
				<input
					className="form"
					type="text"
					name="bible_verse"
					value={input.bible_verse}
					placeholder="e.g: Matthew 5:44"
					onChange={(e) => handleChange(e)}
				></input>
				<br></br>
				Bible Scripture:
				<input
					className="form"
					type="text"
					name="bible_scripture"
					value={input.bible_scripture}
					placeholder="Type in the scriptures" 
					onChange={(e) => handleChange(e)}
				></input>
					<br></br>
				<button type="resetsearch" class="btn btn-warning">
					Submit
				</button>
			</form>
			<table class="table table-hover">
				<thead>
					<tr>
						<th>Id</th>
						<th>Bible Verse</th>
						<th>Bible Scripture</th>
                    </tr>
				</thead>
           
            <tbody>
					{bibleVerses.map((e) => (
						<tr>
							<td>{e.id}</td>
							<td>{e.bible_verse}</td>
							<td>{e.bible_scripture}</td>
							<div>
								<button className="delete" onClick={() => deleteBibleVerse(e.id)}>
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

export default TeacherBibleVerse;


var express = require("express");
var router = express.Router();
const db = require("../model/helper");

const getAllStudents = (req, res) => {
	db("SELECT * FROM students ORDER BY id ASC;")
		.then((results) => {
			res.send(results.data);
		})
		.catch((err) => res.status(500).send(err));
};

/* GET students listing. */
router.get("/students", function (req, res, next) {
	// console.log("SELECT * FROM students");
	db("SELECT * FROM students;")
		.then((results) => {
			res.send(results.data);
		})
		.catch(err => res.status(500).send(err));
});

/* GET one student. */
router.get("/students/:id", function (req, res, next) {
	db(`SELECT * FROM students WHERE id=${req.params.id};`)
		.then((results) => {
			res.send(results.data);
		})
		.catch((err) => res.status(500).send(err));
});

/* INSERT a new student into the DB */
router.post("/students", function (req, res, next) {
// console.log(`INSERT INTO students(first_name, last_name, class_id)VALUES ("${req.body.first_name}","${req.body.last_name}","${req.body.age}")`);
	db(
		`INSERT INTO students(first_name, last_name, age)VALUES ("${req.body.first_name}","${req.body.last_name}","${req.body.age}")`
	)
		.then(() => {
			getAllStudents(req, res);
		})
		.catch((err) => res.status(404).send(err));
});

/* DELETE a student from the DB */
router.delete("/students/:id", function (req, res, next) {
	db(`DELETE FROM students WHERE id = ${req.params.id};`)
		.then((results) => {
			res.send(results.data);
		})
		.catch((err) => res.status(404).send(err));
});

module.exports = router;

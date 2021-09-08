var express = require('express');
const { request } = require('../app');
var router = express.Router();
const db = require("../model/helper");
// const bcrypt = require('bcrypt');
// const utils = require('../utils');
// const jwt = require('jsonwebtoken');
// router.use(express.json());

const getAllstudent = (req, res) => {
	db("SELECT * FROM studentReg ORDER BY id ASC;")
		.then((results) => {
			res.send(results.data);
		})
		.catch((err) => res.status(500).send(err));
};

/* GET students listing. */
router.get("/studentReg", function (req, res, next) {
	// console.log("SELECT * FROM students");
	db("SELECT * FROM studentReg;")
		.then((results) => {
			res.send(results.data);
		})
		.catch(err => res.status(500).send(err));
});

/* GET newStudent. */
router.get("/studentReg/:id", function (req, res, next) {
	db(`SELECT * FROM studentReg WHERE id=${req.params.id};`)
		.then((results) => {
			res.send(results.data);
		})
		.catch((err) => res.status(500).send(err));
});

//register newStudent
router.post("/studentReg", function (req, res, next) {
	console.log(req.body.firstname, req.body.lastname)
        db(
            `INSERT INTO studentReg (firstname, lastname, email, password) VALUES ('${req.body.firstname}','${req.body.lastname}','${req.body.email}','${req.body.password}');`
        )
        .then(() => {
          getAllstudent(req, res);
        })
        .catch((err) => res.status(404).send(err));
    });
            
	/* DELETE a student from the DB */
router.delete("/studentReg/:id", function (req, res, next) {
	db(`DELETE FROM studentReg WHERE id = ${req.params.id};`)
		.then((results) => {
			res.send(results.data);
		})
		.catch((err) => res.status(404).send(err));
});

module.exports = router;

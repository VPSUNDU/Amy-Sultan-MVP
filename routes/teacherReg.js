var express = require('express');
const { request } = require('../app');
var router = express.Router();
const db = require("../model/helper");
// const bcrypt = require('bcrypt');
// const utils = require('../utils');
// const jwt = require('jsonwebtoken');
// router.use(express.json());

const getAllTeacher = (req, res) => {
	db("SELECT * FROM register ORDER BY id ASC;")
		.then((results) => {
			res.send(results.data);
		})
		.catch((err) => res.status(500).send(err));
};

/* GET teacher listing. */
router.get("/register", function (req, res, next) {
	db("SELECT * FROM register;")
		.then((results) => {
			res.send(results.data);
		})
		.catch(err => res.status(500).send(err));
});

/* GET teacher. */
router.get("/register/:id", function (req, res, next) {
	db(`SELECT * FROM register WHERE id=${req.params.id};`)
		.then((results) => {
			res.send(results.data);
		})
		.catch((err) => res.status(500).send(err));
});

//register teacher
router.post("/register", function (req, res, next) {
	console.log(req.body.firstname, req.body.lastname)
        db(
            `INSERT INTO register (firstname, lastname, email, password) VALUES ('${req.body.firstname}','${req.body.lastname}','${req.body.email}','${req.body.password}');`
        )
        .then(() => {
          getAllTeacher(req, res);
        })
        .catch((err) => res.status(404).send(err));
    });
            
	/* DELETE a student from the DB */
router.delete("/register/:id", function (req, res, next) {
	db(`DELETE FROM register WHERE id = ${req.params.id};`)
		.then((results) => {
			res.send(results.data);
		})
		.catch((err) => res.status(404).send(err));
});

module.exports = router;

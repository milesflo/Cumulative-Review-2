var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
	knex('authors').then(function(authors){
  		res.render('./pages/authors', {active: "authors", authors: authors});
	})
});

router.get('/new', function(req, res, next) {
	res.render('./pages/authors-new', {active: "authors"});
});

router.post('/new', function(req, res, next) {
	res.send("recieved post request", {active: "authors"});
});

module.exports = router;

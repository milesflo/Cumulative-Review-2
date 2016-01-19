var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function(req, res, next) {
	knex('books').then(function(books){
		res.render('./pages/books', {active: "books", books: books});
	});
});

router.get('/new', function(req, res, next) {
	res.render('./pages/books-new', {active: "books"});
});

router.post('/new', function(req, res, next) {
	knex('books').insert({
		title: req.body.title,
		genre: req.body.genre,
		cover_url: req.body.cover_url,
		description: req.body.description
	}).then(function() {
		res.redirect('/books');
	});
});

router.get('/delete/:id', function(req, res, next) {
	knex('books').where('id', req.params.id).del().then(function() {
		res.redirect('/books');
	});
});

router.get('/:id', function(req, res, next) {
	knex('books').then(function(books){
		res.render('./pages/book', {active: "books", books: books, id: req.params.id});
	});
});


module.exports = router;
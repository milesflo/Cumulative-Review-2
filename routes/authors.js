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
	knex('authors').insert({
		first_name: req.body.first,
		last_name: req.body.last,
		portrait_url: req.body.portrait_url,
		biography: req.body.bio
	}).then(function() {
		res.redirect('/authors');
	})
});

router.get('/delete/:id', function(req, res, next) {
	knex('authors').where('id', req.params.id).del().then(function() {
		res.redirect('/authors');
	})
})

router.get('/:id', function(req, res, next) {
	knex('authors').then(function(authors){
		res.render('./pages/author', {active: "authors", authors: authors, id: req.params.id});
	});
});




module.exports = router;

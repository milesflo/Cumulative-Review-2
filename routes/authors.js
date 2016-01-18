var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('./pages/authors', {active: "authors"});
});

router.get('/new', function(req, res, next) {
	res.render('./pages/authors-new');
});

router.post('/new', function(req, res, next) {
	res.send("recieved post request");
});

module.exports = router;

var express = require('express');
var router = express.Router();
var unirest = require('unirest');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books', function(req, res) {

    console.log('routing to books');
	unirest.get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' +
        process.env.NYT_API_KEY)
	  .end(function (response) {
	    console.log('hello',response.body.results.books);
        var NYTBooks = response.body.results.books;

        res.render('index', {books: NYTBooks});
    });
});

router.get('/best-sellers', function(req, res) {

    console.log('routing to best-sellers');
	unirest.get('https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=' +
        process.env.NYT_API_KEY)
	  .end(function (response) {
	    console.log('hello',response.body.results);
        var bestSellers = response.body.results;

        res.render('index', {books: bestSellers});
    });
});


module.exports = router;

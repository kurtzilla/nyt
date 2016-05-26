var express = require('express');
var router = express.Router();
var unirest = require('unirest');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books', function(req, res, next) {

    console.log('routing to books');
	// unirest.get('http://api.nytimes.com/svc/books/v3/lists/hardcover-fiction.json?api-key=' + process.env.NYT_API_KEY)
    unirest.get('http://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=' +
        process.env.NYT_API_KEY)

	  .end(function (response) {
	    // console.log('hello',response.body);

        // console.log('res',res);
        var rBody = response.body;
        res.end(function(data){
            console.log('data', rBody.results);
        });
    });




    //   next();
})

module.exports = router;

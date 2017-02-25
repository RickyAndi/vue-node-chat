var express = require('express')
var router = express.Router()

module.exports = function(sockets) {
	router.use(function timeLog (req, res, next) {
		console.log('Time: ', Date.now())
	  	next()
	})

	router.get('/', function (req, res) {
	  	res.render('index');
	})

	return router;
}
require("./api/data/db.js");

var bodyParser		= require('body-parser'),
	express			= require('express'),
	routes			= require('./api/routes'),
	port			= process.env.PORT || 3000,
	path			= require('path'),
	app				= express();


app.use(function(req, res, next){
	next();
});


// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());

// Use routes for anything with /
app.use('/api', routes);



app.listen(port, function(){
	console.log('Server running on port: ' + port);
});
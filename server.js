const express = require('express');

const hbs = require('hbs');

var app =  express();

hbs.registerPartials(__dirname+'/views/viewpartial');
app.use(express.static(__dirname+'/playground'));
app.set('view engine','hbs');



hbs.registerHelper('age',function(){
   return 34;
});

app.use(function(res,res,next){
	res.render('h.hbs');
	next();
});

app.get('/',function(req,res) {
	res.send('hello');
});

app.get('/about',function(req,res){
  res.render('about.hbs',{
  	 title :'akash'
  });
});

app.listen(3000,function(){
	console.log('port 3000 server on');
});
/*
 * @Author: Ziad Bennadji
 * @Date: 2019-09-07 22:13:40 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-09-15 00:08:41
 */
const express = require('express');
const path    = require('path');
const morgan  = require('morgan');
const fs      =  require('fs');
const port    = 8080;




// settings express
const server = express();

server.listen(port, function () { console.log(`the server run at 'http://127.0.0.1:${port}`) });
server.set('view engine', 'ejs')
server.set("views", path.join(__dirname,"/views"));
server.use(express.static('/public'));
// setting morgan
server.use(morgan('dev'));
// static handle
server.use(express.static(path.join(__dirname, '/public')));

server.use((req, res, next)=>{
  let Time = new Date().toString();
  let logger = req.method +' '+ req.url +' at ' + Time + '\n';
  fs.appendFileSync("logger.log", logger);
  next()
});


server.get('/', function(req, res){

  res.render('pages/home/home');
});





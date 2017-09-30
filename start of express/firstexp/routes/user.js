var express = require('express');
var route = express.Router();

route.get("/about", function (request, response) {
    const logic = require("../logic.js");
    logic(response);
})
var counter = 0;

route.get("/welcome", (request, response) => {
    counter++;
    response.send(`<h1>counter is ${counter}</h1>`);
})
route.get('/balance',function(req,res){
      if(req.session.uid){
            res.send('Balance is 10000');
      }
      else{
            const path = require("path");
            var newpath = path.normalize(__dirname+"/..");
            newpath = path.join(newpath,'/public/login.html');
            res.sendFile(newpath);
      }
}) ;
module.exports= route;
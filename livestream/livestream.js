const fs = require("fs");
const readablestream = fs.createReadStream("../../../Downloads/alone.mp4");
const express = require("express");

var app = express();
app.use(express.static("public"));
app.get('/showvideo',(req,res)=>{
	//console.log("insideapp.get....")
res.writeHead(200,{'Content-Type': 'video/mp4'});
	readablestream.pipe(res);
//readableStream.on('data', function(chunk){
//  console.log('Received  bytes of data.'+chunk.length);
//});
//readableStream.on('end', function(chunk){
//  console.log('Read Done...');
//});
	});

app.listen(9876,()=>{
	console.log("Server Start....");
})
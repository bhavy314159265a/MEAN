function mylogic(response){
    var fs = require("fs");
    var path = require("path");
    console.log("current dir name is ",__dirname);
    var fullpath = path.join(__dirname,"/files/content.txt");
    console.log("fullpath is "+fullpath);
    fs.readFile(fullpath,(error,content)=>{
        if(error){
            response.send("Can't Read Path is Wrong");
            console.log("file cannot be read");
        }
        else{
            response.send(''+content);
            console.log("file is read");
        }
    })
}
module.exports = mylogic;
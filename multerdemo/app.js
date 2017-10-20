var express = require('express');
var app = express();
var multer = require('multer');
app.use(express.static('public'));
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var storage = multer.diskStorage({


    destination: function(req, file, uploadFn) {
        console.log('inside destination');
        uploadFn(null, __dirname + '/uploads/')
    },
    filename: function(req, file, cb) {
        console.log('inside destination');
        cb(null, file.originalname);
    }
})
var upload = multer({
    storage: storage
})

console.log('upload is', upload)

app.post('/', upload.single('uploadimg'), function(req, res) {
    res.send("File upload sucessfully.");
});

app.listen(9998, () => {
    console.log("Server Start...");
})

const express = require("express");
 const bodyParser = require('body-parser');
 const ejs = require("ejs");
const app = express();
const session=require("express-session");
const cookieParser = require('cookie-parser');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.set('view engine','ejs');
// Session Handling Code
app.use(session({

  secret: 'keyboard cat',

    cookie: { secure: false,maxAge: 60000*6 }  // 6 min session

}));

app.use(cookieParser());
const users = require("./routes/user.js");
app.use('/', users);
const dash = require("./routes/dashboard/dash.js");
app.use("/",dash);

app.listen(666,()=>{
    console.log("Server Start...");
})
const express = require('express');
const router = express.Router();

router.post('/login', (request, response) => {
    console.log("inside dash");
    var userid = request.body.id;
    var password = request.body.pwd;
    const User = require("../../helpers/user.js");
    var userobject = new User(userid,password);
    console.log("userobject is ",userobject);
    const useroperation = require("../../db/usercrud.js");
    useroperation.add(userobject,response);
    
})
router.post('/dologin',(request,response)=>{
    var userid = request.body.id;
    var password = request.body.pwd;
    const User = require("../../helpers/user.js");
    var userobject = new User(userid,password);
    const useroperation = require("../../db/usercrud.js");
    useroperation.search(userobject,response,request);
})
module.exports= router;
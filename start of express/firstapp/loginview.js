function loginView(){
	var userid='ram';
	var pwd = '12345678';
	var User = require("./user");
	var userObject = new User(userid,pwd);
	var db = require("./crud");
	var message= db.search(userObject);
	console.log(message);
}
module.exports=loginView;
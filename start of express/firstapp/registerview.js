function register(){
	userid = "ram";
	password = "12345678";
	email = "ram@yahoo.com";
	const helper = require("./validation");
	if(!helper.isBlank(userid) && helper.checkPassword(password) && helper.checkEmail(email)){
		const User = require("./user");
		var obj = new User(userid, password, email);
		var db = require("./crud");
		if(db.add(obj)){
			return "Record Added...";
		}
	}
	else{
		return "Validation Fail...";
	}
}
module.exports = register;
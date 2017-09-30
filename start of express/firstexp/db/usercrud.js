const User = require("./userschema.js");

const userOperations = {

    add(userObject, response) {

        User.create(userObject, function(error) {
            if (error) {
                response.send("Can't Add a New User");
            } else {
                response.send("Record Added...")
            }
        });
    },
    delete() {

    },
    search(userObject, response, request) {
        var userid = userObject.userid;
        var password = userObject.password;
        console.log("UserObject is ", userObject);
        User.find({
            'userid': userObject.userid,
            'password': password
        }, function(error, docs) {
            if (error) {
                response.send('Some Problem in DB Connection');
            } else {
                if (docs.length == 0) {
                    response.send('Invalid Userid or Password');
                } else {
                    request.session.uid = docs[0].userid;
                    response.render('balance.ejs', {
                        uid: request.session.uid
                    });
                    //response.send('Welcome '+docs[0].userid);
                }
            }
        })
    }
}
module.exports = userOperations;
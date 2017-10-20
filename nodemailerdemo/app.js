const nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        
            user: 'khanna.micky01@gmail.com',
            pass: 'gokuss1234'
        
    }
});

var mailoptions = {
    from: "khanna.micky01@gmail.com", // sender address
    to: "pranshu.khanna10@gmail.com", // list of receivers
    subject: "this is just a test mail", // Subject line
    text: "Hello this is Plain Text", // plaintext body
    html: "<b>Hello this is html text </b>" // html body
}

transport.sendMail(mailoptions, function(error, response) {
    if (error) {
        console.log(error);
    } else {
    	console.log('response is ', response);
        console.log("Message sent: " + response.messageId);
    }


});
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'renatoguara2020@gmail.com',
    pass: 'agciqpqrqferdazp'
  }
});

var mailOptions = {
  from: 'renatoguara2020@gmail.com',
  to: 'renatoguara2019@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy Renato Alves Soares 08 54!!!!!!!!!!!!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
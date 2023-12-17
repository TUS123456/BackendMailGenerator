# BackendMailGenerator
for generating Mail from Backend U need a verified mail by the use of mail follow docs link for setup of your mail according to the requirement 
https://www.gmass.co/blog/gmail-smtp/.
Now from this You get one password of 16-digit which is used here
const transporter = nodemailer.createTransport({
  host: "-----------------------",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email@gmail.com",
  },
});

In user you write your mail and pass you write 16-digit code
as well as you need to mention host name which is from you computer which is may be "smtp.gmail.com"

If you face error regarding nodemailer does not access your mail than you need to do system configuration
which is allow Telnet to access your mail
controlpanel->program->program and feature->Turn window feature on or off from here you access Telne-Client Access.





Basic Requirement:
JavaScript Node.js(NodeMailer)
Express js
VS code
Postman




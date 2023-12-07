const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_APIKEY);

const sendForgotPassMail = (user) => {
  const msg = {
    to: [`${user.email}`],
    from: "unicorn.craftbeer@gmail.com",
    subject: `Unicorn beer password change request ${user.firstname}`,
    text: "Contenido del correo electrónico en formato de texto sin formato",
    html: `<h1>Hello ${user.firstname},</h1>
        <p>We have received a password change request for your Unicorn beer account (${user.email}).</p>
        <p>If you did not ask to change your password, then you can ignore this email and your password will not be changed.</p>
        <p><a href="http://unicornbeer.vercel.app/forgotpassword/${user.id}">[Change you password]</a></p>`,
  };

  sgMail.send(msg).then(() => console.log("Email sent"));
};

module.exports = { sendForgotPassMail };

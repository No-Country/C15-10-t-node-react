const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_APIKEY);

const sendEmail = (order, updated) => {
  const msg = {
    to: ["unicorn.craftbeer+@gmail.com"],
    from: "unicorn.craftbeer@gmail.com",
    subject: `There is ${updated ? "an update" : "a new order dispatched"} on order N°${order.id}`,
    text: "Contenido del correo electrónico en formato de texto sin formato",
    html: `<h1>Hello Admins,</h1>
    <p>There is a new order dispatched on ${order.createdAt}!</p>
    <p>To view more information, click on the following link:</p>
    <p><a href="http://localhost:5173/admin">[link to order]</a></p>`,
  };

  sgMail.send(msg).then(() => console.log("Email sent"));
};


module.exports = { sendEmail };

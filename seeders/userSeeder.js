const { faker } = require("@faker-js/faker");
const User = require("../models/User");
const Order = require("../models/Order");
const bcrypt = require("bcryptjs");

faker.locale = "en";

module.exports = async () => {
  const users = [];
  paymentMethods = ["Visa", "Mastercard", "Paypal"];

  for (let i = 0; i < 10; i++) {
    users.push(
      new User({
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        password: await bcrypt.hash(process.env.SESSION_CREDENTIAL, 10),
        email: faker.internet.email(),
        phone: faker.phone.number(),
        address:
          faker.address.streetAddress() +
          ", " +
          faker.address.city() +
          ", " +
          faker.address.country(),

      }),
    );
  }


  await User.insertMany(users);
  console.log("[Database] Se corrió el seeder de Users.");
};

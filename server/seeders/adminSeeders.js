const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");

module.exports = async () => {
  const admins = [
    {
      name: "Fernando Muzaber",
      email: "fmuzaber@gmail.com",
      password: await bcrypt.hash(process.env.SESSION_CREDENTIAL, 10),
    },
    {
      name: "Nicolas Martinez",
      email: "nicomar2004@gmail.com",
      password: await bcrypt.hash(process.env.SESSION_CREDENTIAL, 10),
    },
    {
      name: "Admin Test",
      email: "test@test.com",
      password: await bcrypt.hash(process.env.SESSION_CREDENTIAL, 10),
    },
  ];

  await Admin.insertMany(admins);
  console.log("[Database] Se corrió el seeder de Admin.");
};

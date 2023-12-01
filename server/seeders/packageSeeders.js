const Package = require("../models/Package");
const { faker } = require("@faker-js/faker");

module.exports = async () => {
  const packages = [];

  for (let i = 0; i < 10; i++) {
    packages.push(
      new Package({
        stock: 100,
        name: faker.name.jobTitle(),
        price: Math.random() * 10000,
        photos: [],
      }),
    );
  }

  await Package.insertMany(packages);
  console.log("[Database] Se corrió el seeder de Paquetes.");
};

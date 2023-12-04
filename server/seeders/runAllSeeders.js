/**
 * Este archivo se encarga de importar todos los seeders que se hayan definido
 * en el sistema y ejectuarlos.
 *
 * Para ejecutar este archivo se debe correr el comando:
 *
 * 👉 node seeders/runAllSeeders.js
 *
 *
 * Como alternativa, en el artchivo package.json se creó un comando "alias"
 * para que la ejecución sea un poco más corta:
 *
 * 👉 npm run seeders
 *
 */

require("dotenv").config();

async function runAllSeeders() {
  /**
   * Opcional. Si se quiere borrar toda la base de datos antes ejecutar los
   * seeders, descomentar las siguientes dos (2) líneas de código.
   *
   * PD: El método `dropDatabase` de Mongoose elimina toda la base de datos.
   */
  // const { mongoose } = require("../db");
  // await mongoose.connection.dropDatabase();

  // Seeders:

  await require("./adminSeeders")();
  await require("./packageSeeders")();
  await require("./userSeeder")();

  /**
   * Aquí se pueden ejectuar otros seeders que hayan en el sistema.
   * Por ejemplo, si se tuviesen seeders para los artículos y para los
   * comentarios, habría que ejectuar:
   *
   * await require("./articleSeeder")();
   * await require("./commentSeeder")();
   *
   * IMPORTANTE: tener en cuenta que el orden en que se ejecutan los seeders
   * suele ser clave. Por ejemplo, antes de crear artículos habría que
   * crear los usuarios, ya que cada artículo debe tener un autor.
   *
   */

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
  process.exit();
}

runAllSeeders();

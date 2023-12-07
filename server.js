require("dotenv").config();
const path = require("path");
const methodOverride = require("method-override");
const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

app.listen(PORT, () => {
  console.log(`\n[Express] Servidor corriendo en el puerto ${PORT}.`);
  console.log(`[Express] Ingresar a http://localhost:${PORT}.\n`);
});

process.on("SIGINT", function () {
  const { mongoose } = require("./db");
  mongoose.connection.close(function () {
    console.log("Mongoose default connection is disconnected due to application termination.\n");
    process.exit(0);
  });
});

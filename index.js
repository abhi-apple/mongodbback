require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const server = express();
const prodrouter = require("./routes/product.js");
const userrouer = require("./routes/user.js");

//db connection
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("DB Connected");
}

//schema
//bodypars middle
server.use(cors());
server.use(express.json());
server.use(morgan("default"));
server.use(express.static(process.env.PUBLIC_DIR));
server.use("/prods", prodrouter.router);
server.use("/user", userrouer.router);
server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

//listeing
server.listen(process.env.PORT, () => {
  console.log("server started");
});

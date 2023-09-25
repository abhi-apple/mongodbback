const express = require("express");
const prodcontol = require("../controller/product.js");
const router = express.Router();

router
  .post("/", prodcontol.createprod)
  .get("/", prodcontol.getall)
  .get("/:id", prodcontol.getprod)
  .put("/:id", prodcontol.override)
  .patch("/:id", prodcontol.patchprod)
  .delete("/:id", prodcontol.deleteprod);

exports.router = router; // Export the router instance

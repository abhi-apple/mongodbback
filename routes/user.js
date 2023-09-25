const express = require("express");
const usercontl = require("../controller/user.js");
const router = express.Router();
router
  .get("/", usercontl.getall)
  .get("/:id", usercontl.getuser)
  .post("/", usercontl.createuser)
  .put("/:id", usercontl.override)
  .patch("/:id", usercontl.patchuser)
  .delete("/:id", usercontl.deleteuser);

exports.router = router; // Export the router instance

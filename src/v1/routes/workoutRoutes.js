const express = require("express");
// const apicache = require("apicache");
const tareaController = require("../../controllers/tareaController");

const router = express.Router();
// const cache = apicache.middleware;

router

  .get("/", tareaController.getAllTareas)

  .get("/:_id", tareaController.getOneTarea)

  .post("/", tareaController.createNewTarea)

  .patch("/:_id", tareaController.updateOneTarea)

  .delete("/:_id", tareaController.deleteOneTarea);

module.exports = router;

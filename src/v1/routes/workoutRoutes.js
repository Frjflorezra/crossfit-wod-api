const express = require("express");
const apicache = require("apicache");
const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordControllers");

const router = express.Router();
const cache = apicache.middleware;

router
  /**
   * @openapi
   * /api/v1/workouts:
   *   get:
   *     tags:
   *       - Workouts
   *     responses:
   *       200:
   *         description: OK
   *         content:
   *           application/json:
   *               schema:
   *               type: object
   *               properties:
   *                 status:
   *                   type: string
   *                   example: OK
   *                 data:
   *                   type: array
   *                   items:
   *                      $ref: "#/components/schemas/Workout"
   *       5XX:
   *         description: FAILED
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 status:
   *                   type: string
   *                   example: FAILED
   *                 data:
   *                   type: object
   *                   properties:
   *                     error:
   *                       type: string
   *                       example: "Some error message"
   */
  .get("/", workoutController.getAllWorkouts)

  .get("/:workoutId", workoutController.getOneWorkout)

  .get("/:workoutId/records", recordController.getRecordForWorkout)

  .post("/", workoutController.createNewWorkout)

  .patch("/:workoutId", workoutController.updateOneWorkout)

  .delete("/:workoutId", workoutController.deleteOneWorkout);

module.exports = router;

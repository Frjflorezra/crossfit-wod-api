// const apicache = require('apicache');
// const v1Router = require('./v1/routes');
const express = require("express");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const {connectDB} = require('./database/db')
// const cache = apicache.middleware
const app = express();
const PORT = process.env.PORT || 3000;
connectDB()
// app.use("/api/v1", v1Router)

app.use(express.json())

// app.use(cache("2 minutes"))

app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});

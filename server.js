require("dotenv").config();

const express = require("express");

const connectDB = require("./config/db");

const redisClient = require("./config/redis");

const stopRoutes = require("./routes/stopRoutes");

const app = express();

app.use(express.json());

// Connect MongoDB
connectDB();

// Connect Redis
(async () => {

    await redisClient.connect();

    console.log("Redis Connected");

})();

app.use("/api", stopRoutes);

app.get("/", (req, res) => {

    res.send("GTFS Trip Planner API Running");

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});
const Stop = require("../models/Stop");
const redisClient = require("../config/redis");
const stops = require("../data/stops.json");

// Load sample GTFS data into MongoDB
exports.loadStops = async (req, res) => {
    try {
        await Stop.deleteMany();
        await Stop.insertMany(stops);

        res.json({
            message: "Sample GTFS data loaded successfully."
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all stops
exports.getStops = async (req, res) => {

    try {

        const data = await Stop.find();

        res.json(data);

    } catch (err) {

        res.status(500).json({ error: err.message });

    }

};

// Get stop by ID with Redis cache
exports.getStop = async (req, res) => {

    const key = req.params.id;

    try {

        const cached = await redisClient.get(key);

        if (cached) {

            return res.json({
                source: "Redis Cache",
                data: JSON.parse(cached)
            });

        }

        const stop = await Stop.findOne({ stop_id: key });

        if (!stop) {

            return res.status(404).json({
                message: "Stop not found"
            });

        }

        await redisClient.set(key, JSON.stringify(stop), {
            EX: 60
        });

        res.json({
            source: "MongoDB",
            data: stop
        });

    } catch (err) {

        res.status(500).json({
            error: err.message
        });

    }

};
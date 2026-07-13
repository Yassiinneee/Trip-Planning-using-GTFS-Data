const mongoose = require("mongoose");

const StopSchema = new mongoose.Schema({
    stop_id: String,
    stop_name: String,
    stop_lat: Number,
    stop_lon: Number
});

module.exports = mongoose.model("Stop", StopSchema);
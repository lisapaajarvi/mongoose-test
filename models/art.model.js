const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    created: Date
});

const ArtModel = mongoose.model('art', artSchema);

module.exports = ArtModel;
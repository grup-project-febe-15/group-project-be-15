const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },   
    pic: {
        type: String,
        required: true

    }
});

const material = mongoose.model('material', materialSchema);

module.exports = material;

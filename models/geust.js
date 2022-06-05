const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var geustSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    companion: {
        type: Number,
        required: true
    },
    attend: {
        type: Boolean,
        default: false
    }
},
{
    timestamp: true
});

var Geust = mongoose.model('Geust', geustSchema)
module.exports = Geust;
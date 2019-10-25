const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    contactno: { type: Number, required: true },
    age: { type: Number, },
    duration: { type: Number, required: true },
    level: { type: String },
    // date: { type: Number, required: true },
}, {
    timestamps: true,
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;  
import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
    },
    notes: {
        type: String,
        trim: true,
    },
});

var Note = mongoose.model('Note', noteSchema);
export default Note;
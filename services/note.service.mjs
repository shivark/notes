import Note from './../models/note.mjs';

export const noteService = {
    async getAll() {
        return await Note.find({}).exec();
    }
}
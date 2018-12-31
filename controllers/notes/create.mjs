import path from 'path';
import Note from './../../models/note.mjs';
import { noteService } from './../../services/note.service.mjs';

export const create = (req, res) => {
    var data = new Note(req.body);

    data.save()
        .then(() => noteService.getAll().then(data => {
            res.render(path.resolve() + '/views/index', ({ data }));
        }))
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
};
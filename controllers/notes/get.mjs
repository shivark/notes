import path from 'path';
import { noteService } from './../../services/note.service.mjs'

export const get = (req, res) => {
    noteService.getAll().then(data => {
        res.render(path.resolve() + '/views/index', ({ data }));
    })
};
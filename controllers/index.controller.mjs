import path from 'path';
import Note from './../models/note.mjs';

export function get(req, res) {
    getNotes().then(data => {
        res.render(path.resolve() + '/views/index', ({ data }));
    })
}

export function create(req, res) {
    res.render(path.resolve() + '/views/create');
}

export function post(req, res) {

    var data = new Note(req.body);

    data.save()
        .then(() => getNotes().then(data => {
            res.render(path.resolve() + '/views/index', ({ data }));
        }))
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
}

async function getNotes() {
    return await Note.find({}).exec();
}
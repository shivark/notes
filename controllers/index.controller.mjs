import path from 'path';
import Note from './../models/note.mjs';

export function get(req, res) {
    //res.render(path.resolve() + '/views/index', { data: getNotes() });
    Note.find({}, function(err, docs) {
        if (!err) {
            res.render(path.resolve() + '/views/index', { data: docs });
        }
    });
}

export function create(req, res) {
    res.render(path.resolve() + '/views/create');
}

export function post(req, res) {

    var data = new Note(req.body);

    data.save()
        .then(item => {
            res.render(path.resolve() + '/views/index', { notes: getNotes() });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
}

async function getNotes() {

    // const notes = [{ name: 'first note', note: 'hello' }, { name: 'second note', note: 'hello world' }];
    //return notes;

    return await Note.find({}).exec();
}
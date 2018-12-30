import path from 'path';
import Note from './../schemas/note.mjs';

export function get(req, res) {
    var notes = Note.find({}, function(err, docs) {
        if (!err) {
            //  console.log(docs);
        } else { throw err; }
    });
    // res.sendFile(path.resolve() + '/views/index.html');

    res.render(path.resolve() + '/views/index.html', notes);
}

export function create(req, res) {
    res.sendFile(path.resolve() + '/views/create.html');
}

export function post(req, res) {

    var data = new Note(req.body);

    data.save()
        .then(item => {
            //  res.send("item saved to database");
            res.sendFile(path.resolve() + '/views/index.html');
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });

}
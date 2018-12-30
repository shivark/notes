import express from 'express';
import path from 'path';
import Note from './../models/note.mjs';

export const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.resolve() + '/public/index.html');
});

router.post('/', (req, res) => {
    console.log('REQUEST: ', req.body);

    var myData = new Note(req.body);

    myData.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });

});
const fs = require('fs');
const path = require('path');
const router = require('express').Router();
const notes = require('../../db/db.json');
const { createNewNote, deleteNote } = require('../../lib/notes');

router.get('/db', (req, res) => {
    let result = (notes);
    res.send(result);
    console.log(result);
    console.log(notes);
})

router.post('/db', (req, res) => {
    req.body.id = notes.length.toString();
    const note = createNewNote(req.body, notes);
    res.json(note);
});

router.delete('/db/:id', (req, res) => {
    const deletedNote = deleteNote(req.params.id, notes);
    res.send(notes)
});

module.exports = router;
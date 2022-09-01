
const router = require('express').Router();
const store = require("../db/db.json");

router.get("/notes", (req, res) => {
    store.getNotes().then((notes) => {
        return res.json(notes)
    }).catch((err) => res.status(500).json(err))
})
router.post("/notes",(req,res) => {
    store.addNote(req.body).then((data) => {
    res.json(data)}).catch((err) => res.status(500).json(err))
})
router.delete('/notes/:id', (req, res) => {
    store.removeNote(req.params.id).then(() => 
    res.json({ ok: true })).catch(err => res.status(500).json(err))
})
module.exports = router;
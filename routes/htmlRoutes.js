const fs = require('fs');
const path = require ("path");
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../publc/index.html'));
});
router.get("/notes",(req, res) => {
    res.sendFile(path.join(__dirname, '../publc/assets/notes.html'));
});
router.get("*",(req,res) => {
    res.sendFile(path.join(__dirname, '../publc/assets/index.html'));
});
module.exports = router;
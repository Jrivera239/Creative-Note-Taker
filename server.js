const express = require("express");
const fs = require("fs");
const path = require("path");
const util = require("util");
const 

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const app = express();
const port = process.env.port || 4000;

app.use(express.urlencoded({ extended:true }));
app.use(express.json());

app.use(express.static("./publc"));

app.get("/api/notes", function(req, res) {
    readFileAsync("./db/db.json").then(function(data) {
        notes = [].concat(json.parse(data))
        res.json(notes);
    })
});

app.post("/api/notes", function(req, res) {
    const note = req.body;
    readFileAsync ("./db/db.json", "utf8").then(function (data) {
        const notes = [].concat (json.parse(data));
        note.id = notes.length + 1
        note.push(note);
        return notes
    })
    .the(function (notes) {
        writeFileAsync("./db/db.json",json.stringify (notes))res.json(note);
})
});

app.delete("/api/notes/:id", function(req, res) {
    const deleteID = parseInt(req.params.id);
    readFileAsync("./db/db.json", "uf8").then(function (data) {
        const notes = [].concat(json.parse(data));
        const newData = []
        for (let i = 0; i<notes.length; i ++) {
            if (deleteID !== notes [i].id) {
                newData.push(notes [i])
            }
        }
        return newData
    }).then(function(notes){
        writeFileAsync("./db/db.json", json.stringify(notes))
        res.send("Saved Success!");
    })
    })














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






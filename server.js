const fs = require ('fs');
const path = require('path');
const apiRoute = require('./routes/apiRoutes.js');
const htmlRoute = require('./routes/htmlRoutes.js');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('C:\Users\joelr\Documents\GitHub\Creative-Note-Taker\public\assets'));
app.use('/api', apiRoute);
app.use('/', htmlRoute);

app.listen(PORT, ()=> {
    console.log(`API server now on port ${PORT}`);
});
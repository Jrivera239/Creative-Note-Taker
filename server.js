const apiRoute = require('./routes/apiRoutes.js');
const htmlRoute = require('./routes/htmlRoutes.js');
const express = require('express');
const { db } = require('./db/db.json');
const app = express();


app.use(express.static('publc'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', apiRoute);
app.use('/', htmlRoute);
app.listen(3001, () => {
    console.log(`API server now on port 3001`)
})




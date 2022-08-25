const apiRoute = require('./routes/apiRoutes/notes');
const htmlRoute = require('./routes/htmlRoutes');
const express = require('express');
const {db} = require('./db/db.json');
const app = express();

app.use(express.static('publc'));
app.use(express.urlencoded({esteended:true}));
app.use(express.json());
app.use('/api', apiRoute);
app.use('/', htmlRoute);
app.listen(4000, () => {
    console.log(`Server 4000!`);
})








const express = require('express');
const apiRoute = require('./routes/apiRoutes.js');
const htmlRoute = require('./routes/htmlRoutes.js');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('publc'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', apiRoute);
app.use('/', htmlRoute);
app.listen(PORT, () => {
    console.log(`API server now on port http://localhost:${PORT}`)
})




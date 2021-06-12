const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(3001, () => {
    console.log('listening on port %s...', server.address().port);
});
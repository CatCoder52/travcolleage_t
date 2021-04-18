const functions = require('firebase-functions');
const express = require('express');
const app = express();
const api = require('../app');
const port = 3000;
const cors = require('cors');

app.use(cors());

app.use('/api', api);
app.listen(port, () => {
    console.log(`Server runing on ${port}`);
});
exports.app = functions.https.onRequest(app);

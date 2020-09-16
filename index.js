require('dotenv').config();
const path = require('path');
const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
    res.sendFile( path.resolve(__dirname, 'public/index.html') );
});

app.listen( process.env.PORT, () => {});
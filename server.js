const fs = require('fs');
const path = require('path');
const express = require('express');
const { notes } = require('./db/db.json');
const uuid = require('./helpers/uuid');
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
// parse JSON
app.use(express.json());


app.get('/app/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './db/db,json'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});
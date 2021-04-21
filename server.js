const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get('/', (req,res) =>
    res.send('Hello World')
)


mongoose.connect('mongodb://localhost/art')

app.listen(3000, ()=> (
    console.log('Server is up and running')
));
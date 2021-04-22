const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.get('/', (req,res) =>
    res.send('Hello World')
)

async function run() {
    try { 
        await mongoose.connect('mongodb://localhost:27017/art', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Database is connected');
    } catch (error) {
        console.error(error)
    }
}

run();

app.listen(3000, ()=> (
    console.log('Server is up and running')
));
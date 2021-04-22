const express = require('express');
const ArtModel = require('../models/art.model');
const router = express.Router();

router.get('/api/art', (req, res) => {
    res.send('List of art')
});

router.post('/api/art', async (req, res) => {
    const doc = await ArtModel.create(req.body)
    res.status(201).json(doc)
});

module.exports = router;
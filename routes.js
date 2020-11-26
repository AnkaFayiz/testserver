const express = require('express');

const anggotaTeamControllers = require('../controllers/anggotaTeamController');
const routes = express.Router();

// Router 
routes.get('/', (req, res)=>{
    res.send("Hello World");
});

// Controller Anggota Team
routes.get('/anggota/:anggotateam_id', anggotaTeamControllers.getUserById);
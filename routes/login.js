const express = require('express');
const router = express.Router();

const login = require('../models/login');

router.get('/', function(req, res, next) {
    const data = {
        data: {
            msg: "Login"
        }
    };

    res.json(data);
});

router.post('/', function(req, res, next) {
    login.loginUser(res, req.body);
});

module.exports = router;

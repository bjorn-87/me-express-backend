const express = require('express');
const router = express.Router();

const reports = require('../models/reports');

router.get('/week/', function(req, res) {
    reports.getAllReports(res);
});

router.get('/week/:id', function(req, res) {
    reports.getReport(res, req.params.id);
});

router.get('/edit/:id', function(req, res) {
    reports.getReport(res, req.params.id);
});

router.put('/edit/', (req, res, next) => reports.checkToken(req, res, next),
    (req, res) => reports.editReport(res, req.body));

router.post("/", (req, res, next) => reports.checkToken(req, res, next),
    (req, res) => reports.addReport(res, req.body));

module.exports = router;

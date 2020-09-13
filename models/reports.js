const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/texts.sqlite');
const jwt = require('jsonwebtoken');

let config;

try {
    config = require("../config.json");
} catch (error) {
    console.error(error);
}

const secret = config.secret;

/**
 * Function to get all reports.
 */
var getAllReports = function(res, week) {
    db.all("SELECT * FROM reports", (err, row) => {
        if (err) {
            return res.status(500).json({
                errors: {
                    status: 500,
                    source: "/register",
                    title: "Database error",
                    detail: err.message
                }
            });
        }

        res.status(200).json( { data: row } );
    });
};

/**
 * Function to get one report.
 */
var getReport = function(res, week) {
    db.each("SELECT week, text FROM reports WHERE week = ?",
    week, (err, row) => {
        if (err) {
            return res.status(500).json({
                errors: {
                    status: 500,
                    source: "/register",
                    title: "Database error",
                    detail: err.message
                }
            });
        }

        res.status(200).json( { data: row } );
    });
};

/**
 * Function to check if jwt token is valid
 */
var checkToken = function(req, res, next) {
    const token = req.headers['x-access-token'];

    jwt.verify(token, secret, function(err, decoded) {
        if (err) {
            return res.status(500).json({
                errors: {
                    status: 500,
                    source: "/register",
                    title: "Authentication failed",
                    detail: err.message
                }
            });
        }
        next();
    });
}

/**
 * Function to edit a report.
 */
var editReport = function(res, body) {
    db.run("UPDATE reports SET text = ? WHERE week = ?"),
    body.text,
    body.week, (err) => {
        if (err) {
            return res.status(500).json({
                error: {
                    status: 500,
                    source: "/register/edit",
                    title: "Databas error",
                    detail: err.message
                }
            });
        }
        res.status(201).json({
            data: {
                msg: "Report successfully updated"
            }
        });
    }
}

/**
 * Function to add a report.
 */
var addReport = function(res, body) {
    db.run("INSERT INTO reports (week, text) VALUES (?, ?)"),
    body.week,
    body.text, (err) => {
        if (err) {
            return res.status(500).json({
                error: {
                    status: 500,
                    source: "/register/edit",
                    title: "Databas error",
                    detail: err.message
                }
            });
        }
        res.status(201).json({
            data: {
                msg: "report successfully registered"
            }
        });
    }
}

module.exports = {
    getAllReports: getAllReports,
    getReport: getReport,
    checkToken: checkToken,
    editReport: editReport,
    addReport: addReport
};

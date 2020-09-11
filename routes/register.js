const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/texts.sqlite');

const bcrypt = require('bcryptjs');
const saltRounds = 10;

router.get('/', function(req, res, next) {
    const data = {
        data: {
            msg: "Register a user"
        }
    };

    res.json(data);
});

router.post('/', function(req, res, next) {
    registerUser(res, req.body);
});

function registerUser(res, body) {
    const email = body.email;
    const password = body.password;
    if (!email || !password) {
        return res.status(401).json({
            errors: {
                status: 401,
                source: "/register",
                title: "Email or password missing",
                detail: "email or password missing in request"
            }
        });
    }
    bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err) {
            return res.status(500).json({
                errors: {
                    status: 500,
                    source: "/register",
                    title: "bcrypt error",
                    detail: "bcrypt error"
                }
            })
        }

        db.run("INSERT INTO users (email, password) VALUES (?, ?)",
            email,
            hash, (err) => {
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

            res.status(201).json({
                data: {
                    msg: "User successfully registered"
                }
            });
        });

    });
};

module.exports = router;

/* eslint-env mocha */
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app.js');

var Token;

chai.should();

chai.use(chaiHttp);

describe('Reports create', () => {
    describe('Login and Create a report', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .post("/login")
                .set("Content-Type", "application/json")
                .send({ email: "test@bjos19.me", password: "test"})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.type.should.be.equal("success");
                    Token = res.body.data.token;
                    done();
                });
        });
        it('201 Created', (done) => {
            chai.request(server)
                .post("/reports/")
                .set({"x-access-token": Token, "Content-type": "application/json"})
                .send({week: 3, text: "testing create"})
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.an("object");
                    res.body.data.msg.should.be.an("string");
                    res.body.data.msg.should.be.equal("report successfully registered");

                    done();
                });
        });
    });

    describe('Login and Create a report that already exists', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .post("/login")
                .set("Content-Type", "application/json")
                .send({ email: "test@bjos19.me", password: "test"})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.type.should.be.equal("success");
                    Token = res.body.data.token;
                    done();
                });
        });
        it('500 Error', (done) => {
            chai.request(server)
                .post("/reports/")
                .set({"x-access-token": Token, "Content-type": "application/json"})
                .send({week: 1, text: "testing create"})
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.an("object");
                    res.body.errors.title.should.be.an("string");
                    res.body.errors.title.should.be.equal("Databas error");

                    done();
                });
        });
    });
});

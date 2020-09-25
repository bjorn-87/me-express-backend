/* eslint-env mocha */
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-Http');
const server = require('../../app.js');

chai.should();

chai.use(chaiHttp);

describe('Reports', () => {
    describe('GET /reports/week/1', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .get("/reports/week/1")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.week.should.be.an("number");
                    res.body.data.text.should.be.an("string");

                    done();
                });
        });
    });

    describe('GET /reports/week/2', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .get("/reports/week/2")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.week.should.be.an("number");
                    res.body.data.text.should.be.an("string");

                    done();
                });
        });
    });

    describe('GET /reports/week/30 Number that does not exist', () => {
        it('404 Error', (done) => {
            chai.request(server)
                .get("/reports/week/30")
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.an("object");
                    res.body.data.text.should.be.an("string");
                    res.body.data.text.should.be.equal("404 Page not found");

                    done();
                });
        });
    });

    describe('GET /reports/week/bth (Expect 500 error Column does not exist)', () => {
        it('500 Error', (done) => {
            chai.request(server)
                .get("/reports/week/bth")
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.an("object");
                    res.body.errors.title.should.be.an("string");
                    res.body.errors.title.should.be.equal("Database error");

                    done();
                });
        });
    });

    describe('GET /reports/week (All Reports)', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .get("/reports/week")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.should.be.an("array");
                    res.body.data.length.should.be.above(0);

                    done();
                });
        });
    });

    describe('GET /reports/edit/1', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .get("/reports/edit/1")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.week.should.be.an("number");
                    res.body.data.text.should.be.an("string");

                    done();
                });
        });
    });
});

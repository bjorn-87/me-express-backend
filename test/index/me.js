/* eslint-env mocha */
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../../app.js');

chai.should();

chai.use(chaiHttp);

describe('Index', () => {
    describe('GET / (index)', () => {
        it('200 HAPPY PATH', (done) => {
            chai.request(server)
                .get("/")
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.msg.should.be.an("string");

                    done();
                });
        });
    });

    describe('GET /bth (page that does not exist) 404 handler', () => {
        it('404 error', (done) => {
            chai.request(server)
                .get("/bth")
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.be.an("object");
                    res.body.errors.should.be.an("array");

                    done();
                });
        });
    });
});

/* eslint-env mocha */
process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-Http');
const server = require('../../app.js');

var Token;

chai.should();

chai.use(chaiHttp);

describe('Reports Edit', () => {
    describe('PUT /reports/edit', () => {
        it('500 Error', (done) => {
            chai.request(server)
                .put("/reports/edit")
                .end((err, res) => {
                    res.should.have.status(500);
                    res.body.should.be.an("object");

                    done();
                });
        });
    });

    describe('Login and edit a report', () => {
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
        it('200 Happy PATH', (done) => {
            chai.request(server)
                .put("/reports/edit")
                .set({"x-access-token": Token, "Content-type": "application/json"})
                .send({week: 1, text: "test"})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.an("object");
                    res.body.data.msg.should.be.an("string");
                    res.body.data.msg.should.be.equal("Report successfully updated");

                    done();
                });
        });
    });
});

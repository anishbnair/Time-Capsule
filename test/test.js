var express = require('express');
var expect = require("chai").expect;
var supertest = require('supertest');
var app = express();

app.use(require('body-parser').json());
require('../routes/api-routes')(app);

var request = supertest.agent(app);

describe("API Routes", function() {
    describe("GET /api/user_data", function() {
        it("should return an empty object if the user is not logged in", function(done) {
            request.get('/api/user_data')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect({})
            .end(done);
        });
    });
});
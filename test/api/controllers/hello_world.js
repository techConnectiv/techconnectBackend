const should = require('should');
const request = require('supertest');
const server = require('../../../index');

// eslint-disable-next-line no-undef
describe('controllers', function() {
  // eslint-disable-next-line no-undef
  describe('hello_world', function() {
    // eslint-disable-next-line no-undef
    describe('GET /hello', function() {
      // eslint-disable-next-line no-undef
      it('should return a default string', done => {
        request(server)
          .get('/hello')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            should.not.exist(err);

            res.body.should.eql('Hello, stranger!');

            done();
          });
      });

      // eslint-disable-next-line no-undef
      it('should accept a name parameter', done => {
        request(server)
          .get('/hello')
          .query({ name: 'Scott' })
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end((err, res) => {
            should.not.exist(err);

            res.body.should.eql('Hello, Scott!');

            done();
          });
      });
    });
  });
});

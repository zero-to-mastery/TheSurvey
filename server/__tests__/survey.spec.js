const chai = require('chai');
const expect = chai.expect;
const asserttype = require('chai-asserttype');
const request = require('supertest');

const Survey = require('../models/Surveys')
const app = require('../server')
const { populateSurveys, surveys } = require('./seed/surveys');

chai.use(asserttype);

beforeEach(populateSurveys);

describe('GET /api/surveys', () => {
  it('should return all surveys', done => {
    request(app)
      .get('/api/surveys')
      .expect(200)
      .expect(res => {
        expect(res.body.length).to.be.equal(2)
        expect(res.body[0].date).to.be.ok;
        expect(res.body[0]._id).to.equal(surveys[0]._id.toHexString());
        expect(res.body[0].title).to.equal(surveys[0].title);
        expect(res.body[0].question).to.equal(surveys[0].question);
        expect(res.body[0].answer).to.equal(surveys[0].answer);
      })
      .end(err => {
        if(err)
          return done(err);
        done();
      })
  });
});

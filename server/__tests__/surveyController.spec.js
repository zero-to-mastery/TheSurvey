const chai = require('chai');
const expect = chai.expect;
const asserttype = require('chai-asserttype');
const request = require('supertest');
const mongoose = require('mongoose');

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
      });
  });
});

describe('GET /api/surveys/:id', () => {
  it('should return proper message if ID is not valid', done => {
    request(app)
      .get(`/api/surveys/${123456789}`)
      .expect(400)
      .expect(res => {
        expect(res.error.text).to.equal('Survey ID is not valid')
      })
      .end(err => {
        if(err)
          return done(err);
        done();
      });
  });
  it('should return proper message if ID is not found', done => {
    request(app)
      .get(`/api/surveys/${mongoose.Types.ObjectId()}`)
      .expect(404)
      .expect(res => {
        expect(res.error.text).to.equal('The survey with the given ID was not found')
      })
      .end(err => {
        if(err)
          return done(err);
        done();
      });
  });
  it('should return specific survey', done => {
    request(app)
      .get(`/api/surveys/${surveys[0]._id}`)
      .expect(200)
      .expect(res => {
        expect(res.body.date).to.be.ok;
        expect(res.body._id).to.equal(surveys[0]._id.toHexString());
        expect(res.body.title).to.equal(surveys[0].title);
        expect(res.body.question).to.equal(surveys[0].question);
        expect(res.body.answer).to.equal(surveys[0].answer);
      })
      .end(err => {
        if(err)
          return done(err);
        done();
      });
  });
});

describe('POST /api/surveys', () => {
  it('should return proper message if survey title is empty', done => {
    const survey = {
      title: "",
      question: "Question 2",
      answer: "Answer 2"
    }
    request(app)
      .post('/api/surveys')
      .send(survey)
      .expect(400)
      .expect(res => {
        expect(res.error.text).to.equal('"title" is not allowed to be empty');
      })
      .end(err => {
        if(err)
          return done(err);
        done();
      });
  });
  it('should return proper message if survey title is not valid', done => {
    const survey = {
      title: "Ti",
      question: "Question 2",
      answer: "Answer 2"
    }
    request(app)
      .post('/api/surveys')
      .send(survey)
      .expect(400)
      .expect(res => {
        expect(res.error.text).to.equal('"title" length must be at least 3 characters long');
      })
      .end(err => {
        if(err)
          return done(err);
        done();
      });
  });
  it('should return proper message if survey title already exists', done => {
    const survey = {
      title: "Title 2",
      question: "Question 2",
      answer: "Answer 2"
    }
    request(app)
      .post('/api/surveys')
      .send(survey)
      .expect(400)
      .expect(res => {
        expect(res.error.text).to.equal('Survey already exists');
      })
      .end(err => {
        if(err)
          return done(err);
        done();
      });
  });
  it('should return created survey', done => {
    const survey = {
      title: "Title 3",
      question: "Question 3",
      answer: "Answer 3"
    }
    request(app)
      .post('/api/surveys')
      .send(survey)
      .expect(200)
      .expect(res => {
        expect(res.body.date).to.be.ok;
        expect(res.body._id).to.be.ok;
        expect(res.body.title).to.equal(survey.title);
        expect(res.body.question).to.equal(survey.question);
        expect(res.body.answer).to.equal(survey.answer);
      })
      .end(err => {
        if(err)
          return done(err);
        done();
      })
  });
});

describe('PUT /api/surveys/:id', () => {
  describe('when ID is not ok', () => {
    it('should return proper message if ID is not valid', done => {
      request(app)
        .put(`/api/surveys/${123456789}`)
        .send()
        .expect(400)
        .expect(res => {
          expect(res.error.text).to.equal('Survey ID is not valid')
        })
        .end(err => {
          if(err)
            return done(err);
          done();
        });
    });
    it('should return proper message if ID is not found', done => {
      const survey = {
        title: "Title 3",
        question: "Question 3",
        answer: "Answer 3"
      }
      request(app)
        .put(`/api/surveys/${mongoose.Types.ObjectId()}`)
        .send(survey)
        .expect(404)
        .expect(res => {
          expect(res.error.text).to.equal('The survey with the given ID was not found')
        })
        .end(err => {
          if(err)
            return done(err);
          done();
        });
    });
  });
  describe('when ID is ok', () => {
    it('should return proper message if survey title is empty', done => {
      const survey = {
        title: "",
        question: "Question 2",
        answer: "Answer 2"
      }
      request(app)
        .put(`/api/surveys/${surveys[0]._id}`)
        .send(survey)
        .expect(400)
        .expect(res => {
          expect(res.error.text).to.equal('"title" is not allowed to be empty');
        })
        .end(err => {
          if(err)
            return done(err);
          done();
        });
    });
    it('should return proper message if survey title is not valid', done => {
      const survey = {
        title: "Ti",
        question: "Question 2",
        answer: "Answer 2"
      }
      request(app)
        .put(`/api/surveys/${surveys[0]._id}`)
        .send(survey)
        .expect(400)
        .expect(res => {
          expect(res.error.text).to.equal('"title" length must be at least 3 characters long');
        })
        .end(err => {
          if(err)
            return done(err);
          done();
        });
    });
    it('should return updated survey', done => {
      const survey = {
        title: "Title 3",
        question: "Question 3",
        answer: "Answer 3"
      }
      request(app)
        .put(`/api/surveys/${surveys[0]._id}`)
        .send(survey)
        .expect(200)
        .expect(res => {
          expect(res.body.date).to.be.ok;
          expect(res.body._id).to.be.ok;
          expect(res.body.title).to.equal(survey.title);
          expect(res.body.question).to.equal(survey.question);
          expect(res.body.answer).to.equal(survey.answer);
        })
        .end(err => {
          if(err)
            return done(err);
          done();
        });
    });
  })
});

describe('DELETE /api/surveys/:id', () => {
  it('should return proper message if ID is not valid', done => {
    request(app)
      .delete(`/api/surveys/${123456789}`)
      .expect(400)
      .expect(res => {
        expect(res.error.text).to.equal('Survey ID is not valid')
      })
      .end(err => {
        if(err)
          return done(err);
        done();
      });
  });
  it('should return proper message if ID is not found', done => {
    request(app)
      .delete(`/api/surveys/${mongoose.Types.ObjectId()}`)
      .expect(404)
      .expect(res => {
        expect(res.error.text).to.equal('The survey with the given ID was not found')
      })
      .end(err => {
        if(err)
          return done(err);
        done();
      });
  });
  it('should return removed survey', done => {
    request(app)
      .delete(`/api/surveys/${surveys[0]._id}`)
      .expect(200)
      .expect(res => {
        expect(res.body.date).to.be.ok;
        expect(res.body._id).to.equal(surveys[0]._id.toHexString());
        expect(res.body.title).to.equal(surveys[0].title);
        expect(res.body.question).to.equal(surveys[0].question);
        expect(res.body.answer).to.equal(surveys[0].answer);
      })
      .end(err => {
        if(err)
          return done(err);
        done();
      });
  });
});

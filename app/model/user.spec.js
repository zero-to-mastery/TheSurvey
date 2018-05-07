require("../db/mongoose");
const mongoose = require("mongoose");
const {expect} = require("chai");
const {MongoError} = require("mongodb");
const User = require("./User");

describe("user schema test", function() {
    this.slow(0);
    this.timeout(10000);
    //return;

    // Why beforeEach()?
    // So that each of the 
    beforeEach(function(done) {
        User.deleteMany({}, function(err){
            if (err){
                done();
                return;
            }
            done();
        });
    });

    it ("add user with a name to db and read it back", async function() {
        let myUser = new User({name: "Pavel", email:"addr@mail.com", password: "password123"});
        let savedUser = await myUser.save();
        let foundUsers = await User.find({_id: myUser._id});
        expect(foundUsers).be.lengthOf(1);
        expect(foundUsers[0]._id.toString()).be.equal(myUser._id.toString());
    });

    it ("do not allow duplicate email", async function() {
        let myUser = new User({name: "George", email:"addr@mail.com", password: "password456"});
        let duplUser = new User({name: "Alex", email: "addr@mail.com", password: "qwerty1234"});
        try {
            let myUserSaveResult = await myUser.save();
            let duplUserSaveResult = await duplUser.save();
            expect(true, "Execution shouldn't reach this point, exception 'Duplicate email' expected").to.false();
        }
        catch (err) {
            expect(err).to.be.instanceOf(MongoError);
            expect(err).to.have.property("code", 11000); // 11000 is 'unique' field error
        }
    });

    it ("require email", function(done) {
        let myUser = new User({name: "George", password: "password456"});
        myUser.save().then(function(theUser){
            expect(true, "Execution shouldn't reach this point, exception 'No email provided' expected").to.false();
        }).catch(function(err){
            //console.error(err);
            expect(err).to.be.instanceOf(mongoose.Error);
            expect(err.errors).to.have.property("email");
            expect(err.errors.email).to.have.property("kind", "required");
            //assert(myUser.isNew === true);
        }).finally(() => { // arrow function to bind "this" of the enclosing scope (doesn't matter here really)
            done();
        });
    });

    it ("must be valid email", function(done) {
        let myUser = new User({name: "George", email:"addrmail.com", password: "password456"});
        myUser.save().then(function(theUser){
            //console.log(`${theUser.name} save finished`);
            expect(true, "Execution shouldn't reach this point, exception 'Email validation error' expected").to.false();
        }).catch(function(err){
            expect(err).to.be.instanceOf(mongoose.Error);
            expect(err.errors).to.have.property("email");
            expect(err.errors.email.message).to.equal("addrmail.com is not a valid email.");

        }).finally(() => {
            done();
        });
    });

    it ("require password", function(done) {
        let myUser = new User({name: "George", email:"add@mail.com" });
        myUser.save().then(function(theUser){
            //console.log(`${theUser.name} save finished`);
            expect(true, "Execution shouldn't reach this point, exception 'No pasword provided' expected").to.false();
        }).catch(function(err){
            //console.error(err);
            expect(err).to.be.instanceOf(mongoose.Error);
            expect(err.errors).to.have.property("password");
            expect(err.errors.password).to.have.property("kind", "required");
        }).finally(()=> {
            done();
        })
    });

    it ("password must be atleast 6 char long", function(done) {
        let myUser = new User({name: "George", email:"add@mail.com", password: "pass"});
        myUser.save().then(function(theUser){
            //console.log(`${theUser.name} save finished`);
            expect(true, "Execution shouldn't reach this point, exception 'password length too small' expected").to.false();
        }).catch(function(err){
            //console.error(err);
            expect(err).to.be.instanceOf(mongoose.Error);
            expect(err.errors).to.have.property("password");
            expect(err.errors.password).to.have.property("kind", "minlength");
        }).finally(() => {
            done();
        })
    });

    after(function(done){
      mongoose.disconnect(done);
    });
});

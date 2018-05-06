const mongauto = require("../db/mongoose");
const mongoose = require("mongoose")
const assert = require("assert");
const chai = require("chai");
const user = require("./User");

describe("user schema test", function() {
    this.slow(0);
    //return;
    before(function(done) {
        user.User.deleteMany({}, function(err){
            if (err){
                console.log(err);
                done()
            }
            done()
        });
    });

    it ("add user with a name to db and read it back", function(done) {
        let myUser = new user.User({name: "Pavel", email:"addr@mail.com", password: "password123"});

        myUser.save().then(function(theUser){
            console.log(myUser);
            console.log(`${theUser.name} save finished`);
        }).then(function(){
            user.User.find({_id: myUser._id}).then(function(users){
                console.log(users);
                assert(users[0]._id.toString === myUser._id.toString);
                done();
            }).catch(function(err) {
                console.error(err);
            });
        });
    });

    it ("do not allow duplicate email", function(done) {
        let myUser = new user.User({name: "George", email:"addr@mail.com", password: "password456"});
        myUser.save().then(function(theUser){
            console.log(`${theUser.name} save finished`);
        }).catch(function(err){
            console.error(err);
            assert(myUser.isNew === true);
            done();
        });
    });

    it ("require email", function(done) {
        let myUser = new user.User({name: "George", password: "password456"});
        myUser.save().then(function(theUser){
            console.log(`${theUser.name} save finished`);
        }).catch(function(err){
            console.error(err);
            assert(myUser.isNew === true);
            done();
        });
    });

    it ("must be valid email", function(done) {
        let myUser = new user.User({name: "George", email:"addrmail.com", password: "password456"});
        myUser.save().then(function(theUser){
            console.log(`${theUser.name} save finished`);
        }).catch(function(err){
            console.error(err);
            assert(myUser.isNew === true);
            done();
        });
    });

    it ("require password", function(done) {
        let myUser = new user.User({name: "George", email:"add@mail.com" });
        myUser.save().then(function(theUser){
            console.log(`${theUser.name} save finished`);
        }).catch(function(err){
            console.error(err);
            assert(myUser.isNew === true);
            done();
        });
    });

    it ("password must be atleast 6 char long", function(done) {
        let myUser = new user.User({name: "George", email:"add@mail.com", password: "pass"});
        myUser.save().then(function(theUser){
            console.log(`${theUser.name} save finished`);
        }).catch(function(err){
            console.error(err);
            assert(myUser.isNew === true);
            done();
        });
    });

    after(function(done){
      mongoose.disconnect(done);
    });
});

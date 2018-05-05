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

    it ("add user with a name to db", function(done) {
        let myUser = new user.User({name: "Pavel", email:"addr@mail.com", password: "password123"});

        myUser.save().then(function(theUser){
            console.log(`${theUser.name} save finished`);
            assert(myUser.isNew === false);
            done();
        }).catch(function(err){
            console.error(err);
            done();
        });
    });

    it ("read user from db", function(done) {
        user.User.find({name: /^Pav/}).then(function(users){
            console.log(users);
            assert(users[0].name === "Pavel");
            done();
        }).catch(function(err) {
            console.error(err);
            done();
        });
    });

    after(function(done){
      mongoose.disconnect(done);
    });
});

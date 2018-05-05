const mongauto = require("../db/mongoose");
const mongoose = require("mongoose")
const assert = require("assert");
const chai = require("chai");
const user = require("./User");

describe("user schema test", function() {
    //return;
    it ("should be ok", function(done1) {
        chai.expect(true).equals(true);
        user.User.deleteMany({}, function(err){
            console.log(err);
            done1()
        })

    });
    it ("add user with a name to db and read it back", function(done2) {
        chai.expect(true).equals(true);
        let myUser = new user.User({name: "Pavel", email:"addr@mail.com", password: "password123"});
        let saveRes = myUser.save(function(err, theUser) {
            if (err){ console.error(err);
                return;
            }
            console.log(`${theUser.name} save finished`);
            user.User.find({name: /^Pav/}, function(err, users) {
                if (err){
                    console.error(err);
                    return;
                }
                console.log(users);
                done2();
            })

        });
        after(function(done2){
          console.log(saveRes)
          mongoose.disconnect(done2);
        });
    });

});

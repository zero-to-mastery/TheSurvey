const mongauto = require("../db/mongoose");
const mongoose = require("mongoose")
const assert = require("assert");
const chai = require("chai");
const user = require("./User");

describe("user schema test", () => {
    //return;
    user.User.deleteMany({}, function(err){
        console.log(err);
    })

    it ("should be ok", () => {
        chai.expect(true).equals(true);
    });
    it ("add user with a name to db and read it back", ()=>{
        chai.expect(true).equals(true);
        let myUser = new user.User({name: "Pavel", email:"addr@mail.com", password: "password123"});
        let saveRes = myUser.save((err, theUser) => {
            if (err){ console.error(err);
                mongoose.disconnect();
                return;
            }
            console.log(`${theUser.name} save finished`);
            user.User.find({name: /^Pav/}, (err, users) => {
                if (err){
                    console.error(err);
                    mongoose.disconnect();
                    return;
                }
                console.log(users);
                mongoose.disconnect();
            })
        });
        console.log(saveRes)
    });
});

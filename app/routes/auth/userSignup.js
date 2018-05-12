// All the sign up functionality lives in here
// The user data (minus password/hash) will need to be returned
const bcrypt     = require('bcrypt-nodejs'),
      bodyParser = require('body-parser'),
      express    = require('express'),
      session    = require('express-session'),
      User       = require('../../model/User'),
      axios      = require('axios');

const IP   = process.env.userSignUpIP || 'localhost',
      PORT = process.env.userSignUpPort || 3000;

const secret= process.env.sessionSecret || 'test123$';
let sess= {};


const app = express();
app.use(bodyParser.json());
app.use(session({secret}));

//RESTful API Point for registration
app.post('/signup', (req, res) => {
    const { email, password } = req.body;
    let name = req.body.name;
    sess = req.session;
    
    //Username is not required, makes random one if username isn't set
    if(!name){
        name= `JohnDoe${Math.round(Math.random()*999999)}`;
    }

    axios.post('/login', {  //point this at the database API register endpoint
        name                // ES6 markup same as username : username
        email,              // ES6 markup same as email : email
        password,           // ES6 markup same as password : password => Hashing is done by front-end
    })
    .then(response => {
        //depends on response. hash is an placeholder
        if (response.status === 200) {
            sess.token= response.tokens.token;

            //User after success => Should be logged in
            res.status(200).json(response);
        } else {
            //Different response from backend depends on database API
            res.status(400).json('not able to register')
        }
    })
    .catch(error => console.log)
});

app.listen(PORT, IP, () => {
	console.log(`userSignup microservice is listening @${PORT} on ${IP}`);
});
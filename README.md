# TheSurvey

### This is our very special project, to create a zero to mastery developer survey web app by the community for the community.

The Zero To Mastery Survey Web App will collect numerous feedback from the entire Zero To Mastery Dev Community and incorporate those changes/suggestions to improve this awesome course.

Currently in BETA - https://zero-to-mastery.github.io/TheSurvey/

## Contribute
- Fork this repository
- Clone forked repository using `git clone <forked_repo_url>`
- Change directory to project root `cd TheSurvey`
- Checkout to development branch `git checkout development`

- ### Back-End
    - Change directory to server `cd server`
    - Install NPM dependencies `npm install`
    - You will need to create a .env file and put
        `MONGO_DB=mongodb://localhost:27017/the_survey
         PORT=3005`
       in order for this to work :)
    - Then run the command `npm start`

- ### Front-End 
    - In the root directory of the project:
    - Install NPM dependencies `npm install`
    - Then run the command `npm start`

## Important Notes
- Always make PR in **development** branch and **NOT** in **master** branch.
- **Stable** branch - [master](https://github.com/zero-to-mastery/TheSurvey/tree/master)
- **Development** branch - [development](https://github.com/zero-to-mastery/TheSurvey/tree/development);

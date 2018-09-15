
const R = require('ramda');

const validAnswer = ({
    isValid: true,
    errors:[],
});

const addError = (err, validation) => {
    const { errors } =  validation;
    return R.assoc('errors',R.append(err, errors), validation);
};

const invalidWithError = (err) => {
    const invalidAnswer = R.assoc('isValid', false, validAnswer);
    return addError(err, invalidAnswer);
};


const textValidator = (answer) => {
    if(!R.is(String, answer)){
        return invalidWithError('Answer should be text');
    }
    if(R.isEmpty(answer)){
        return invalidWithError('Please complete');
    }
    return validAnswer;
};

const optionsValidator = (answer) => {
    if(!R.is(Number, answer)){
        return invalidWithError('Answer should be a number');
    }
    if(R.isEmpty(answer)){
        return invalidWithError('Please complete');
    }
    return validAnswer;
};

const choicesValidator = (answers) => {
    if(!R.is(Array, answers)){
        return invalidWithError('Answer should be array')
    }
    if(R.isEmpty(answers)){
        return invalidWithError('Please complete');
    }
    const nonBooleanAnswer = R.head(answers.filter(answer => !R.is(Boolean, answer)))
    if(!R.isNil(nonBooleanAnswer)){
        return invalidWithError('Answers should be true or false');
    }
    return validAnswer;
};

const typeMap = {
    text: textValidator,
    options: optionsValidator,
    choices: choicesValidator,
};

const exists = (type) => R.has(type, typeMap);

module.exports = {
	validate(req, res) {
        const { answer, type } = req.body;
        if(!exists(type)){
            throw new Error(`Answer Type: ${type} does not exist`);
        }
        const validate = typeMap[type];
        res.send(validate(answer))
	},
}

const express = require('express');
const router = express.Router();

 // /api/surveys is default, all routes in this file start with this path
router.get('/', (req, res) => res.json({msg: 'get all surveys'}))
router.get('/:surveyID', (req, res) => res.json({msg: `get specific survey (${req.params.surveyID})`}))
router.post('/', (req, res) => res.json({msg: 'post new survey'}))
router.patch('/:surveyID', (req, res) => res.json({msg: `update existing survey (${req.params.surveyID})`}))
router.delete('/:surveyID', (req, res) => res.json({msg: `delete existing survey (${req.params.surveyID})`}))

module.exports = router;

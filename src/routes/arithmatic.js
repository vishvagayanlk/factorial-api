const express = require('express');
const factorial = require('../operations/factorial');
const validation = require('../operations/validation');
const arithRouter = express.Router();


arithRouter.get('/math/:num', (req, res) => {
    var inNum = req.params.num;
    var num = factorial(validation(inNum));

    // outputting as json file
    res.json({factorial: num});
});


module.exports = arithRouter;

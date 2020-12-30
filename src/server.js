const express = require('express');
const bodyParser = require('body-parser');
const timeOut = require('connect-timeout');

const app = express(); // Creating app instance
const port = 3000;

// middle ware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use(timeOut(120000));
app.use(haltOnTimedout);

function haltOnTimedout(req, res, next) {
    if (! req.timeOut) 
        next();
    


}
// import Routers
const arithRouter = require('./routes/arithmatic');
app.use('/api', arithRouter);

// import Routers
const rootRouter = require('./routes/root');
app.use('/', rootRouter);

// Rootroutes
app.get('/', (req, res) => {
    res.send('Hello For Calcultor, from express');
});


app.listen(port, () => console.log(`servers is listening on port ${port}!`));

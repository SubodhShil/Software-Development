const app = require('express');
const publicRouter = app.Router();

const log = (req, res, next) => {
    console.log("Log middleware");
    next();
};

// publicRouter.all('*', log);

publicRouter
    .route('/gallery')
    .all((req, res, next) => {
        console.log('I am logging something');
        next();
    })
    .get((req, res) => {
        console.log('GET');
    })
    .post((req, res) => {
        console.log('POST');
    })
    .put((req, res) => {
        console.log('PUT');
    })
    .delete((req, res) => {
        console.log('DELETE');
    });

publicRouter.param('user', (req, res, next, id) => {
    req.user = id === '1' ? 'Admin' : 'Anonymous';
    next();
});

publicRouter.get('/:user', (req, res) => {
    res.send(`Hello ${req.user}`);
});

publicRouter.get('/', (req, res) => {
    res.status(200).send("Welcome user");
});

publicRouter.get('/about', (req, res) => {
    res.status(200).send("Welcome to about page");
});


publicRouter.use(log);

module.exports = publicRouter;
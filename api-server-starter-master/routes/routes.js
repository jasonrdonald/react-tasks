// import other routes
const userRoutes = require('./users');
const taskRoutes = require('./tasks');

const appRouter = (app, fs) => {

    // default route
    app.get('/', (req, res) => {
        res.send('welcome to the development api-server');
    });

    // // other routes
    userRoutes(app, fs);
    taskRoutes(app, fs);

};

module.exports = appRouter;
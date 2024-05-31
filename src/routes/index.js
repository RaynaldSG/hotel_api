const { Router } = require('express');
const hotelRoute = require('./hotelRoutes.js');

const routes = Router();

routes.use(hotelRoute)

module.exports = routes
const { Router } = require('express');
const { getAllHotels, getDetailHotels, getUniqueFacilities } = require('../controller/hotelController.js')

const router = Router();

router.get('/api/hotels', getAllHotels);
router.get('/api/hotels/:id', getDetailHotels);
router.get('/api/facilities', getUniqueFacilities);

module.exports = router

const hotelData = require('../data/hotelDataArray.json');
const hotelDetailData = require('../data/detailHotelArray.json');

hotelDetailData.map((val) => val.rating = val.rating.toFixed(1));
hotelData.map((val) => val.review_score = val.review_score.toFixed(1));


function getAllHotels(req, res) {
    res.status(200);
    res.send({
        message: "success",
        data: hotelData
    });
}

function getDetailHotels(req, res) {
    const { id } = req.params;

    const hotelDetail = hotelDetailData.find((value) => value.id == parseInt(id));

    res.status(200);
    res.send({
        message: 'success',
        data: hotelDetail,
    });
}

function getUniqueFacilities(req, res) {
    const uniqueFacilities = new Set();
    const unique = hotelDetailData.map((val) => val.most_popular_facilities);

    unique.forEach(facilitiesArray => {
        facilitiesArray.forEach(facility => {
            uniqueFacilities.add(facility);
        });
    });

    const uniqueFacilitiesArray = Array.from(uniqueFacilities);
    console.log(uniqueFacilitiesArray);

    res.status(200);
    res.send({
        message: 'success',
        data: uniqueFacilitiesArray,
    });
}

module.exports = { getAllHotels, getDetailHotels, getUniqueFacilities }
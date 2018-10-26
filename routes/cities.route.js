import express from "express";
import cityController from "../controllers/cities.controller";
import regionController from '../controllers/regions.controller';
const router = express.Router()

// route to get all cities
router.get('/allcities', (req, res) => {
    cityController.getAll(req, res);
});

// route to get an info of a city by @name
router.post('/cityname/', (req, res) => {
    cityController.getByCity(req, res);
});

// route to get region info by @regions id array
router.post('/regionIDs/', (req, res) => {
    regionController.getPropertiesFromRegions(req, res);
})

// takes a 'east', 'west', 'midwest', 'mideast', 'puertorico' 
// @region sting to give back multiple cities
router.post('/region', (req, res) => {
    cityController.byRegion(req, res);
}) 

// route to receive multiple properties by the name of the city
// @name string of city
router.post('/listings', (req, res) => {
    cityController.getCityRegions(req, res)
})

export default router;
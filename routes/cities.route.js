import express from "express";
import cityController from "../controllers/cities.controller";
import regionController from '../controllers/regions.controller';
const router = express.Router()
import { authenticator, tokenize } from '../utils';

// route to get all cities
router.get('/allcities', authenticator(), (req, res) => {
    console.log('hello!!!');
    cityController.getAll(req, res);
});

// route to get an info of a city by @name
router.post('/cityname/', authenticator(), (req, res) => {
    tokenize(cityController.getByCity(req, res));
});

// route to get region info by @regions id array
router.post('/regionIDs/', authenticator(), (req, res) => {
    tokenize(regionController.getPropertiesFromRegions(req, res));
})

// takes a 'east', 'west', 'midwest', 'mideast', 'puertorico' 
// @region sting to give back multiple cities
router.post('/region', authenticator(), (req, res) => {
    tokenize(cityController.byRegion(req, res));
})

// route to receive multiple properties by the name of the city
// @name string of city
router.post('/listings', authenticator(), (req, res) => {
    tokenize(cityController.getCityRegions(req, res))
})

router.post('/topzipbycity', authenticator(), (req, res) => {
    tokenize(cityController.topZipByCity(req, res))
})

export default router;
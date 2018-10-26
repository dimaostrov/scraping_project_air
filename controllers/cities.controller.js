import city from '../models/cities.model';
import regions from '../models/regions.model';
import logger from '../core/logger/app-logger';
const controller = {};

controller.getAll = async (req, res) => {
    try {
        const cities = await city.getAll();
        logger.info('sending all cities...');
        res.send(cities);
    }
    catch (err) {
        logger.error('Error in getting cities- ' + err);
        res.send('Got error in getAll');
    }
}

controller.getByCity = async (req, res) => {
    const cityName = req.body.name;
    try {
        const cityInfo = await city.getByCity(cityName);
        res.send(cityInfo);
    }
    catch (err) {
        logger.error('Error in getting cities- ' + err);
        res.send('Got error in getByCity');
    }
}

controller.byRegion = async (req, res) => {
    const regionName = req.body.region;
    try {
        const cities = await city.getByRegion(regionName);
        res.send(cities);
    }
    catch (err) {
        logger.error('Error in getting rerion- ' + err);
        res.send('Got error in byRegion');
    }
}

controller.getCityRegions = async (req, res) => {
    const cityName = req.body.name;
    try {
        const cityInfo = await city.getByCity(cityName);
        const regionsOfCity = cityInfo[0].regions;
        const listings = await regions.returnListings(regionsOfCity);
        res.send(listings);
    }
    catch (err) {
        logger.error('Error in getting city region data- ' + err);
        res.send('Got error in getCityRegions');
    }
}

export default controller;
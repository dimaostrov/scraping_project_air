import city from '../models/cities.model'
import logger from '../core/logger/app-logger'
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
        switch (regionName) {
            case 'west':
                
                break;
            case 'east':

                break;
            case 'midwest':

                break;
            case 'mideast':

                break;
            case 'puertorico':

                break;
            default:
                break;
        }
        const cityInfo = await city.getByCity(cityName);
        res.send(cityInfo);
    }
    catch (err) {
        logger.error('Error in getting rerion- ' + err);
        res.send('Got error in byRegion');
    }
}


export default controller;
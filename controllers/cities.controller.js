import city from '../models/cities.model'
import logger from '../core/logger/app-logger'
const controller = {};

controller.getAllCities = async (req, res) => {

}

controller.getAllZipsOfCity = async (req, res) => {

}

controller.getAllRegionsOfZip = async (req, res) => {

}

controller.getAll = async (req, res) => {
    try {
        const cities = await city.getAll();
        logger.info('sending all cities...');
        res.send(cities);
    }
    catch(err) {
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
    catch(err) {
        logger.error('Error in getting cities- ' + err);
        res.send('Got error in getByCity');
    }
}

controller.deletecity = async (req, res) => {
    let cityName = req.body.name;
    try{
        const removedcity = await city.removecity(cityName);
        logger.info('Deleted city- ' + removedcity);
        res.send('city successfully deleted');
    }
    catch(err) {
        logger.error('Failed to delete city- ' + err);
        res.send('Delete failed..!');
    }
}

export default controller;
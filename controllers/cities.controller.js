import city from '../models/cities.model'
import logger from '../core/logger/app-logger'

const controller = {};

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

controller.addcity = async (req, res) => {
    let cityToAdd = city({
        name: req.body.name
    });
    try {
        const savedcity = await city.addcity(cityToAdd);
        logger.info('Adding city...');
        res.send('added: ' + savedcity);
    }
    catch(err) {
        logger.error('Error in getting cities- ' + err);
        res.send('Got error in getAll');
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
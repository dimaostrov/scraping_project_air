import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import logger from './core/logger/app-logger'
import morgan from 'morgan'
import config from './core/config/config.dev'
import cities from './routes/cities.route'
import { connectToDb } from './db/connect'
// import ipDB from './models/ip.model'
import path from 'path';

import auth from './routes/auth.route'

const port = config.serverPort;
logger.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};

connectToDb();

// collect request ip
const getIP = require('ipware')().get_ip;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev", { "stream": logger.stream }));

app.use(express.static(path.join(__dirname, 'client/build')));

/*
app.use(function(req, res, next){
    const {clientIp} = getIP(req);
    let date = new Date();
    const writeObject = {clientIp, date}
    ipDB.saveIP(writeObject)
    next();
})
*/

app.use('/auth', auth);
app.use('/api', cities);

//Index route
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.listen(port, () => {
    logger.info('server started - ', port);
});
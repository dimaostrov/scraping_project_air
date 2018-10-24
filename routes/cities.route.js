import express from "express";
import cityController from "../controllers/cities.controller";
import regionController from '../controllers/regions.controller';
const router = express.Router()

router.get('/allcities', (req, res) => {
    cityController.getAll(req, res);
});

router.post('/cityname/', (req, res) => {
    cityController.getByCity(req, res);
});

router.post('/regionIDs/', (req, res) => {
    regionController.getPropertiesFromRegions(req, res);
})



export default router;
import express from "express";
import cityController from "../controllers/cities.controller"
const router = express.Router()

router.get('/allcities', (req, res) => {
    cityController.getAll(req, res);
});

router.post('/cityname/', (req, res) => {
    cityController.getByCity(req, res);
});



export default router;
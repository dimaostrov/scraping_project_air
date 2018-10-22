import express from "express";
import cityController from "../controllers/cities.controller"
const router = express.Router()

router.get('/allcities', (req, res) => {
    cityController.getAll(req, res);
});

router.post('/addcity', (req, res) => {
    cityController.addcity(req, res);
});

router.delete('/deletecity', (req, res) => {
    cityController.deletecity(req, res);
});

export default router;
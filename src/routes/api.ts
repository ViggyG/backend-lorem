import express from 'express';
import { generateDataArray } from '../controllers/api';

const router = express.Router();

router.post('/data', (req, res) => {
    const {schema, params, error} = req.body;
    const dataArray = generateDataArray(schema, params.returnAmount);
    res.status(200).json(dataArray);
});

export default router;
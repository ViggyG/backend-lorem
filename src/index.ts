import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import apiRouter from './routes/api';
require('dotenv').config({path: __dirname+'/.env'});

const port = process.env.PORT_NUM;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).json({success: true});
});

app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});






import express from 'express';

require('dotenv').config({path: __dirname+'/.env'});

const port = process.env.PORT_NUM;

const app = express();

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});






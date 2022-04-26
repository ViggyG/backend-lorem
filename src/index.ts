import express from 'express';

import 'dotenv.config';

const port = process.env.PORT_NUM;

const app = express();

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});






"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const api_1 = __importDefault(require("./routes/api"));
require('dotenv').config({ path: __dirname + '/.env' });
const port = process.env.PORT_NUM;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.status(200).json({ success: true });
});
app.use('/api', api_1.default);
app.listen(port, () => {
    console.log(`App is listening on port: ${port}`);
});

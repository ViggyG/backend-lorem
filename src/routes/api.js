"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = require("../controllers/api");
const router = express_1.default.Router();
router.post('/data', (req, res) => {
    const { schema, params, error } = req.body;
    const dataArray = (0, api_1.generateDataArray)(schema, params.returnAmount);
    res.status(200).json(dataArray);
});
exports.default = router;

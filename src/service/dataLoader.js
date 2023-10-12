"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapPoolToRandomData = void 0;
const dataCache_1 = require("../constants/dataCache");
const tools_1 = require("../util/tools");
const dataMap = {
    FNAME: dataCache_1.firstNames,
    LNAME: dataCache_1.lastNames,
    COUNTRY: dataCache_1.countries,
    CITYNAME: dataCache_1.cities,
    STREETNAME: dataCache_1.streetNames,
    EMAIL: ['test@test.com']
};
const mapPoolToRandomData = (dataPool) => {
    const index = (0, tools_1.randomRange)(0, dataMap[dataPool].length);
    return dataMap[dataPool][index];
};
exports.mapPoolToRandomData = mapPoolToRandomData;

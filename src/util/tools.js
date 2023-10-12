"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomRange = void 0;
//random range function 
const randomRange = (lowerLimit, upperLimit) => {
    return Math.floor((Math.random() * upperLimit) + lowerLimit);
};
exports.randomRange = randomRange;

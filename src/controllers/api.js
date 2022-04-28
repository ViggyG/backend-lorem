"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceArrayTags = exports.replaceObjectTags = exports.generateDataArray = void 0;
const generateDataArray = (obj, length) => {
    let res = [];
    for (let i = 0; i < length; i++) {
        const dataItem = Object.assign({}, obj);
        (0, exports.replaceObjectTags)(dataItem);
        res.push(dataItem);
    }
    return res;
};
exports.generateDataArray = generateDataArray;
const replaceObjectTags = (obj) => {
    for (const [k, v] of Object.entries(obj)) {
        if (obj.hasOwnProperty(k)) {
            obj[k] = resolveValue(obj[k]);
        }
    }
    return obj;
};
exports.replaceObjectTags = replaceObjectTags;
const replaceArrayTags = (array) => {
    array.forEach((v, i) => {
        array[i] = resolveValue(v);
    });
    return array;
};
exports.replaceArrayTags = replaceArrayTags;
const resolveValue = (value) => {
    let res = value;
    if (typeof value === 'string') {
        res = replaceTag(value);
    }
    else if (Array.isArray(value)) {
        res = (0, exports.replaceArrayTags)(value);
    }
    else if (typeof value === 'object') {
        res = (0, exports.replaceObjectTags)(value);
    }
    return res;
};
function replaceTag(value) {
    return 'blorg';
}

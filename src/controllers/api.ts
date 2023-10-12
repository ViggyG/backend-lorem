import { randomRange } from '../util/tools';
import { mapPoolToRandomData } from '../service/dataLoader'

interface SchemaObject {
    [index: string]: string | SchemaObject | SchemaArray
}

type SchemaArray = [string | SchemaObject | SchemaArray]


export const generateDataArray = (obj: SchemaObject, numCopies: number) => {
    let res = []
    for(let i=0; i<numCopies; i++) {
        const dataItem = { ...obj };
        replaceObjectTags(dataItem);
        res.push(dataItem);
    }
    return res;
}

export const replaceObjectTags = (obj: SchemaObject) => {
    for(const [k, v] of Object.entries(obj)) {
        if(obj.hasOwnProperty(k)) {
            obj[k] = resolveValue(obj[k]);
        }
    }
    return obj;
}

export const replaceArrayTags = (array: SchemaArray) => {
    array.forEach((v,i) => {
        array[i] = resolveValue(v);
    });
    return array;
}

const resolveValue = (value: string | SchemaObject | SchemaArray) => {
    let res = value;

    if(typeof value === 'string') {
        res = replaceTag(value);
    }
    else if(Array.isArray(value)) {
        res = replaceArrayTags(value);
    }
    else if(typeof value === 'object') {
        res = replaceObjectTags(value);
    }

    return res;
}

function replaceTag(value: string): string | SchemaObject | SchemaArray {
    return mapPoolToRandomData(value);
}
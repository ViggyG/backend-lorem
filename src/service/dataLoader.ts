import { firstNames, lastNames, countries, cities, streetNames } from "../constants/dataCache";
import { randomRange } from '../util/tools'

interface Map {
    [index: string]: string[]
}

const dataMap: Map = {
    FNAME:firstNames,
    LNAME:lastNames,
    COUNTRY:countries,
    CITYNAME:cities,
    STREETNAME:streetNames,
    EMAIL:['test@test.com']
}

export const mapPoolToRandomData = (dataPool: string) => {
    const index = randomRange(0, dataMap[dataPool].length)
    return dataMap[dataPool][index];
}
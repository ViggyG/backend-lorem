
//random range function 
export const randomRange = (lowerLimit: number, upperLimit: number) => {
    return Math.floor((Math.random() * upperLimit) + lowerLimit);
}
/**
 * This function takes 2 arguments and computes their addition & subtraction, and return it in an array respectively.
 * @param {number} a 
 * @param {number} b 
 * @returns {number[]}
 */
export function getAddSub(a: number, b: number): [number, number]{
    return [a + b, a - b];
}
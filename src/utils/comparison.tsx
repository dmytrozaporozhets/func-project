
export const valuesCompare=(a, b)=> {
    if (a > b) return 1; // if the first value is greater than the second
    if (a === b) return 0; // if the values are equal
    if (a < b) return -1; // if the first value is less than the second
}

export const arraysEqual = (arr1, arr2) => {
    // Check if the lengths of the two arrays are equal
    const lengthCheck = arr1.length === arr2.length;
    // Use the 'every' method to compare each element of the arrays
    const elementsCheck = arr1.every((value, index) => value === arr2[index]);
    // Return true if both length and elements are equal, otherwise return false
    return lengthCheck && elementsCheck;
};


export const upFirstSymbol = (val: string) => {
    // Get the first character of the string and convert it to uppercase
    const firstChar = val.charAt(0).toUpperCase();
    // Concatenate the uppercase first character with the rest of the string
    return firstChar + val.slice(1);
};

export const endingTh = (n:number) => {
    // Calculate the remainder when (n + 90) is divided by 100
    const remainder = (n + 90) % 100;
    // Calculate the remainder when the above result minus 10 is divided by 10
    const innerRemainder = (remainder - 10) % 10;
    // Use the inner remainder to determine the appropriate ordinal suffix
    return ["st", "nd", "rd"][innerRemainder - 1] || "th";
};

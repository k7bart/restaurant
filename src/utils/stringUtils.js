export const capitalizeFirstLetters = (str) => {
    return str
        .split(" ")
        .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
};

export const removeSpaces = (str) => {
    return str.replace(/\s/g, "");
};

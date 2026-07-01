export const capitalize = (str: string) => {
    return str
        .split(" ")
        .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
};

export const removeSpaces = (str: string) => {
    return str.replace(/\s/g, "");
};

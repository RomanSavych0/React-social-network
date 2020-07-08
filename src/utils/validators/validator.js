export const requiredField = value => {
    if (value) return undefined;

    return "Field is required"
};

export const maxLenghtCreator = (maxLenght) => (value) => {
    if (value.length > maxLenght) return `Max lenght is ${maxLenght} symbol`;
    return undefined;

};

export const maxLenght = value => {
    if (value && value.length > 30) return "Max lenght is 30 symbols";

    return undefined;
};
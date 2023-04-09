export const wordLimiter = (para, charLimit) => {
    if (para.length < charLimit) {
        return para.length;
    }
    let holdIndex = -1;
    for (let i = 0; i < charLimit; i++) {
        if (para[i] === " " || para[i] === "." || para[i] === [","]) {
            holdIndex = i;
        }
    }

    if (holdIndex <= 0) {
        return charLimit;
    }
    return holdIndex;
};

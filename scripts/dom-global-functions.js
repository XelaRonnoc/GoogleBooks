export const toggleLoadingMessage = () => {
    const msg = document.getElementById("loadingMessage");
    msg.classList.toggle("hide");
};

export const makeElement = (
    container,
    className = "",
    elType,
    innerText = ""
) => {
    const appSection = document.createElement(elType);
    if (className) {
        appSection.classList.add(className);
    }
    container.appendChild(appSection);

    const textNode = document.createTextNode(innerText);
    appSection.appendChild(textNode);

    return appSection;
};

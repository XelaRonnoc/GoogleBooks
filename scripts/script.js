import { getBooksBySearch } from "./requests.js";
import { toggleLoadingMessage } from "./dom-global-functions.js";

const form = document.querySelector("form");
const seachBar = document.querySelector("#searchBar");
const bookGrid = document.getElementById("bookGrid");
const body = document.querySelector("body");
const feedback = document.getElementById("feedback");
form.addEventListener("submit", (e) => {
    toggleLoadingMessage();
    bookGrid.innerHTML = "";
    getBooksBySearch(seachBar.value);
    searchBar.value = "";
    feedback.innerHTML = "";
    e.preventDefault();
    e.stopPropagation();
});

body.addEventListener("click", (e) => {
    const childEls = body.children;
    for (let i = 0; i < childEls.length; i++) {
        if (childEls[i].className === "expanded") {
            body.removeChild(childEls[i]);
        }
    }
    e.stopPropagation();
});

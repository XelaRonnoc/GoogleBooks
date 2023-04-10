import { getBooksBySearch } from "./requests.js";
import { toggleLoadingMessage } from "./dom-global-functions.js";

const form = document.querySelector("form");
const seachBar = document.querySelector("#searchBar");
const bookGrid = document.getElementById("bookGrid");
const body = document.querySelector("body");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const maxResults = 30;
let searchStartIndex = 0;
let currentSearch = "";
form.addEventListener("submit", (e) => {
    toggleLoadingMessage();
    bookGrid.innerHTML = "";
    currentSearch = seachBar.value;
    searchStartIndex = 0;
    getBooksBySearch(currentSearch, maxResults, searchStartIndex);
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

nextBtn.addEventListener("click", (e) => {
    toggleLoadingMessage();
    searchStartIndex += maxResults;
    bookGrid.innerHTML = "";
    getBooksBySearch(currentSearch, maxResults, searchStartIndex);
    e.stopPropagation();
});

prevBtn.addEventListener("click", (e) => {
    toggleLoadingMessage();
    if (searchStartIndex - maxResults >= 0) {
        searchStartIndex -= maxResults;
    } else {
        searchStartIndex = 0;
    }
    bookGrid.innerHTML = "";
    getBooksBySearch(currentSearch, maxResults, searchStartIndex);
    e.stopPropagation();
});

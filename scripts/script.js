import { getBooksBySearch } from "./requests.js";
import { toggleLoadingMessage } from "./dom-global-functions.js";

const form = document.querySelector("form");
const seachBar = document.querySelector("#searchBar");
const bookGrid = document.getElementById("bookGrid");
const body = document.querySelector("body");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const clearBtn = document.getElementById("clearBtn");

const maxResults = 30;
let searchStartIndex = 0;
let currentSearch = "";

form.addEventListener("submit", (e) => {
    toggleLoadingMessage();
    bookGrid.innerHTML = "";
    currentSearch = seachBar.value;
    searchStartIndex = 0;
    getBooksBySearch(currentSearch, maxResults, searchStartIndex);
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
    if (currentSearch) {
        toggleLoadingMessage();
        searchStartIndex += maxResults;
        bookGrid.innerHTML = "";
        getBooksBySearch(currentSearch, maxResults, searchStartIndex);
    }
    e.stopPropagation();
});

prevBtn.addEventListener("click", (e) => {
    if (currentSearch) {
        toggleLoadingMessage();
        if (searchStartIndex - maxResults >= 0) {
            searchStartIndex -= maxResults;
        } else {
            searchStartIndex = 0;
        }
        bookGrid.innerHTML = "";
        getBooksBySearch(currentSearch, maxResults, searchStartIndex);
    }
    e.stopPropagation();
});

clearBtn.addEventListener("click", (e) => {
    bookGrid.innerHTML = "";
    seachBar.value = "";
    feedback.innerHTML = "";
    currentSearch = "";
    e.preventDefault();
    e.stopPropagation();
});

import { getBooksBySearch } from "./requests.js";

const form = document.querySelector("form");
const seachBar = document.querySelector("#searchBar");
const bookGrid = document.getElementById("bookGrid");
const body = document.querySelector("body");
form.addEventListener("submit", (e) => {
    console.log("searching");
    bookGrid.innerHTML = "";
    getBooksBySearch(seachBar.value);
    searchBar.value = "";
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

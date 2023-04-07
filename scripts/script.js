import { getBooksBySearch } from "./requests.js";

const form = document.querySelector("form");
const seachBar = document.querySelector("#searchBar");

form.addEventListener("submit", (e) => {
    console.log("searching");
    getBooksBySearch(seachBar.value);
    e.preventDefault();
    e.stopPropagation();
});

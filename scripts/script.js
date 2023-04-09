import { getBooksBySearch } from "./requests.js";

const form = document.querySelector("form");
const seachBar = document.querySelector("#searchBar");
const bookGrid = document.getElementById("bookGrid");

form.addEventListener("submit", (e) => {
    console.log("searching");
    bookGrid.innerHTML = "";
    getBooksBySearch(seachBar.value);
    searchBar.value = "";
    e.preventDefault();
    e.stopPropagation();
});

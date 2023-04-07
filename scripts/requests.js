import { Book } from "./book.js";
export const getBooksBySearch = async (searchTerm) => {
    const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`,
        {
            headers: {
                Accept: "application/json",
            },
        }
    );

    const data = await response.json(); // so this gives me a whole array worth of responses for the flowers search term
    // although in an object with an items array which is the search results

    const booksArr = data.items.map((current) => {
        const volumeInfo = current.volumeInfo;
        // console.log(volumeInfo);
        const book = new Book();
        volumeInfo["imageLinks"]
            ? (book.image = volumeInfo["imageLinks"])
            : (book.image = "No Images");
        volumeInfo["authors"]
            ? (book.author = volumeInfo["authors"])
            : (book.author = "Unknown");
        volumeInfo["title"]
            ? (book.title = volumeInfo["title"])
            : (book.title = "No Title");
        volumeInfo["description"]
            ? (book.description = volumeInfo["description"])
            : (book.description = "No Description");
        return book;
    });
    console.log(booksArr);

    renderAll(booksArr);
    return booksArr;
};

const renderAll = (booksArr) => {
    booksArr.forEach((element) => {
        element.render(document.getElementById("bookGrid"));
    });
};

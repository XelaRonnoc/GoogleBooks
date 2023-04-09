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

    console.log(data);

    if (data["totalItems"] === 0) {
        renderNoResults();
        return;
    }

    const booksArr = data.items.map((current) => {
        const volumeInfo = current.volumeInfo;
        const saleInfo = current.saleInfo;
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
        volumeInfo["categories"]
            ? (book.categories = volumeInfo["categories"])
            : (book.categories = "No category");
        volumeInfo["language"]
            ? (book.language = volumeInfo["language"])
            : (book.language = "No language info");
        volumeInfo["publishedDate"]
            ? (book.publishedDate = volumeInfo["publishedDate"])
            : (book.publishedDate = "No published date");

        saleInfo["retailPrice"]
            ? (book.price = saleInfo["retailPrice"]["amount"])
            : (book.price = "No price");

        saleInfo["country"]
            ? (book.country = saleInfo["country"])
            : (book.country = "No country");

        saleInfo["saleability"]
            ? (book.saleability = saleInfo["saleability"])
            : (book.saleability = "No sales info");
        return book;
    });

    renderAll(booksArr);
    return booksArr;
};

const renderAll = (booksArr) => {
    booksArr.forEach((element) => {
        element.render(document.getElementById("bookGrid"));
    });
};

const renderNoResults = () => {
    const feedback = document.querySelector("#feedback");
    const text = document.createTextNode(
        "No Results were found for this seach please try another"
    );
    feedback.appendChild(text);
};

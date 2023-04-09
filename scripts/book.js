import { wordLimiter } from "./global-functions.js";
export class Book {
    image;
    author;
    title;
    description;
    constructor() {}

    render(grid) {
        const container = document.createElement("div");
        container.classList.add("card");
        grid.appendChild(container);

        const image = document.createElement("img");
        image.classList.add("card__image");
        this.image.thumbnail
            ? (image.src = this.image.thumbnail)
            : (image.src = "");
        container.appendChild(image);

        const title = document.createElement("p");
        title.classList.add("card__title");
        const titleText = document.createTextNode(this.title);
        title.appendChild(titleText);
        container.appendChild(title);

        const author = document.createElement("p");
        author.classList.add("card__author");
        container.appendChild(author);
        const authorText = document.createTextNode("Author: " + this.author);
        author.appendChild(authorText);

        const description = document.createElement("p");
        description.classList.add("card__description");
        container.appendChild(description);
        const descText = document.createTextNode(
            "Description: " +
                this.description.substring(
                    0,
                    wordLimiter(this.description, 120)
                ) +
                "..."
        );
        description.appendChild(descText);
    }
}

// find up to the last full stop within search length

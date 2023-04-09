import { wordLimiter } from "./global-functions.js";
export class Book {
    //volumeInfo
    image;
    author;
    title;
    description;
    categories;
    language;
    publishedDate;

    //saleInfo
    price;
    country;
    saleability;

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

        container.addEventListener("click", (e) => {
            this.renderModule(document.querySelector("body"));
            e.stopPropagation();
        });
    }

    renderModule(body) {
        const container = document.createElement("div");
        container.classList.add("expanded");
        body.appendChild(container);

        const innerContainer = document.createElement("div");
        innerContainer.classList.add("expanded__inner");
        container.appendChild(innerContainer);

        const image = document.createElement("img");
        image.classList.add("inner__image");
        this.image.thumbnail
            ? (image.src = this.image.thumbnail)
            : (image.src = "");
        innerContainer.appendChild(image);

        const title = document.createElement("p");
        title.classList.add("inner__title");
        const titleText = document.createTextNode(this.title);
        title.appendChild(titleText);
        innerContainer.appendChild(title);

        const author = document.createElement("p");
        author.classList.add("inner__author");
        innerContainer.appendChild(author);
        const authorText = document.createTextNode("Author: " + this.author);
        author.appendChild(authorText);

        const price = document.createElement("p");
        price.classList.add("inner__price");
        innerContainer.appendChild(price);
        const priceText = document.createTextNode("Price: " + this.price);
        price.appendChild(priceText);

        const categories = document.createElement("p");
        categories.classList.add("inner__categories");
        innerContainer.appendChild(categories);
        const categoriesText = document.createTextNode(
            "categories: " + this.categories
        );
        categories.appendChild(categoriesText);

        const language = document.createElement("p");
        language.classList.add("inner__language");
        innerContainer.appendChild(language);
        const languageText = document.createTextNode(
            "languages: " + this.language
        );
        language.appendChild(languageText);

        const publishedDate = document.createElement("p");
        publishedDate.classList.add("inner__publishedDate");
        innerContainer.appendChild(publishedDate);
        const publishedDateText = document.createTextNode(
            "Published Date: " + this.publishedDate
        );
        publishedDate.appendChild(publishedDateText);

        const saleability = document.createElement("p");
        saleability.classList.add("inner__saleability");
        innerContainer.appendChild(saleability);
        const saleabilityText = document.createTextNode(
            "saleability: " + this.saleability
        );
        saleability.appendChild(saleabilityText);

        const description = document.createElement("p");
        description.classList.add("inner__description");
        innerContainer.appendChild(description);
        const descText = document.createTextNode(
            "Description: " + this.description
        );
        description.appendChild(descText);
    }
}

// find up to the last full stop within search length

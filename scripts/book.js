import { wordLimiter } from "./global-functions.js";
import { makeElement } from "./dom-global-functions.js";
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
        const container = makeElement(grid, "card", "div");
        const image = makeElement(container, "card__image", "img");
        this.image.thumbnail
            ? (image.src = this.image.thumbnail)
            : (image.src = "");
        const title = makeElement(container, "card__title", "p", this.title);
        const author = makeElement(container, "card__author", "p", this.author);
        const authHead = makeElement(author, "sub-header", "span", "Author: ");
        author.prepend(authHead);
        const description = makeElement(
            container,
            "card__description",
            "p",
            this.description.substring(0, wordLimiter(this.description, 120)) +
                "..."
        );
        const descHead = makeElement(
            description,
            "sub-header",
            "span",
            "Description: "
        );
        description.prepend(descHead);

        container.addEventListener("click", (e) => {
            this.renderModule(document.querySelector("body"));
            e.stopPropagation();
        });
    }

    renderModule(body) {
        const container = makeElement(body, "expanded", "div");

        const innerContainer = makeElement(container, "expanded__inner", "div");
        innerContainer.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        const exitContainer = makeElement(innerContainer, "exit", "div");
        exitContainer.innerHTML = `<p> X <p>`;
        exitContainer.addEventListener("click", (e) => {
            const childEls = body.children;
            for (let i = 0; i < childEls.length; i++) {
                if (childEls[i].className === "expanded") {
                    body.removeChild(childEls[i]);
                }
            }
            e.stopPropagation();
        });

        const image = makeElement(innerContainer, "inner__image", "img");
        this.image.thumbnail
            ? (image.src = this.image.thumbnail)
            : (image.src = "");

        const title = makeElement(
            innerContainer,
            "inner__title",
            "p",
            this.title
        );

        const author = makeElement(
            innerContainer,
            "inner__author",
            "p",
            this.author
        );
        const authHead = makeElement(author, "sub-header", "span", "Author: ");
        author.prepend(authHead);

        const price = makeElement(
            innerContainer,
            "inner__price",
            "span",
            this.price
        );
        const priceHead = makeElement(price, "sub-header", "span", `Price: `);
        const priceSign = makeElement(
            price,
            "",
            "span",
            `${this.price !== "No price" ? "$" : ""}`
        );
        price.prepend(priceSign);
        price.prepend(priceHead);

        const categories = makeElement(
            innerContainer,
            "inner__categories",
            "p",
            this.categories
        );
        const catHead = makeElement(
            categories,
            "sub-header",
            "span",
            "Categories: "
        );
        categories.prepend(catHead);

        const language = makeElement(
            innerContainer,
            "inner__language",
            "p",
            this.language
        );
        const langHead = makeElement(
            language,
            "sub-header",
            "span",
            "Languages: "
        );
        language.prepend(langHead);

        const publishedDate = makeElement(
            innerContainer,
            "inner__publishedDate",
            "p",
            this.publishedDate
        );
        const pubHead = makeElement(
            publishedDate,
            "sub-header",
            "span",
            "Published Date: "
        );
        publishedDate.prepend(pubHead);

        const saleability = makeElement(
            innerContainer,
            "inner__saleability",
            "p",
            this.saleability.split("_").join(" ")
        );
        const availHead = makeElement(
            saleability,
            "sub-header",
            "span",
            "Availability: "
        );
        saleability.prepend(availHead);

        const description = makeElement(
            innerContainer,
            "inner__description",
            "p",
            this.description
        );
        const descHead = makeElement(
            description,
            "sub-header",
            "span",
            "Description: "
        );
        description.prepend(descHead);
    }
}

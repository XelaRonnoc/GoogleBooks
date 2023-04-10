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
        const authHead = document.createElement("span");
        authHead.classList.add("sub-header");
        const authHeadText = document.createTextNode("Author: ");
        authHead.appendChild(authHeadText);
        author.appendChild(authHead);
        container.appendChild(author);
        const authorText = document.createTextNode(this.author);
        author.appendChild(authorText);

        const description = document.createElement("p");
        description.classList.add("card__description");
        const descHead = document.createElement("span");
        descHead.classList.add("sub-header");
        const descHeadText = document.createTextNode("Description: ");
        descHead.appendChild(descHeadText);
        description.appendChild(descHead);
        container.appendChild(description);
        const descText = document.createTextNode(
            this.description.substring(0, wordLimiter(this.description, 120)) +
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
        innerContainer.addEventListener("click", (e) => {
            e.stopPropagation();
        });

        const exitContainer = document.createElement("div");
        exitContainer.classList.add("exit");
        exitContainer.innerHTML = `<p> X <p>`;
        innerContainer.appendChild(exitContainer);
        exitContainer.addEventListener("click", (e) => {
            const childEls = body.children;
            for (let i = 0; i < childEls.length; i++) {
                if (childEls[i].className === "expanded") {
                    body.removeChild(childEls[i]);
                }
            }
            e.stopPropagation();
        });

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
        const authHead = document.createElement("span");
        authHead.classList.add("sub-header");
        const authHeadText = document.createTextNode("Author: ");
        authHead.appendChild(authHeadText);
        author.appendChild(authHead);
        const authorText = document.createTextNode(this.author);
        author.appendChild(authorText);

        const price = document.createElement("p");
        price.classList.add("inner__price");
        innerContainer.appendChild(price);
        const priceHead = document.createElement("span");
        priceHead.classList.add("sub-header");
        const priceHeadText = document.createTextNode("Price: ");
        priceHead.appendChild(priceHeadText);
        price.appendChild(priceHead);
        const priceText = document.createTextNode("Price: " + this.price);
        price.appendChild(priceText);

        const categories = document.createElement("p");
        categories.classList.add("inner__categories");
        innerContainer.appendChild(categories);
        const catHead = document.createElement("span");
        catHead.classList.add("sub-header");
        const catHeadText = document.createTextNode("Categories: ");
        catHead.appendChild(catHeadText);
        categories.appendChild(catHead);
        const categoriesText = document.createTextNode(this.categories);
        categories.appendChild(categoriesText);

        const language = document.createElement("p");
        language.classList.add("inner__language");
        innerContainer.appendChild(language);
        const langHead = document.createElement("span");
        langHead.classList.add("sub-header");
        const langHeadText = document.createTextNode("Languages: ");
        langHead.appendChild(langHeadText);
        language.appendChild(langHead);
        const languageText = document.createTextNode(
            "Languages: " + this.language
        );
        language.appendChild(languageText);

        const publishedDate = document.createElement("p");
        publishedDate.classList.add("inner__publishedDate");
        innerContainer.appendChild(publishedDate);
        const pubHead = document.createElement("span");
        pubHead.classList.add("sub-header");
        const pubHeadText = document.createTextNode("Published Date: ");
        pubHead.appendChild(pubHeadText);
        publishedDate.appendChild(pubHead);
        const publishedDateText = document.createTextNode(this.publishedDate);
        publishedDate.appendChild(publishedDateText);

        const saleability = document.createElement("p");
        saleability.classList.add("inner__saleability");
        innerContainer.appendChild(saleability);
        const availHead = document.createElement("span");
        availHead.classList.add("sub-header");
        const availHeadText = document.createTextNode("Availability: ");
        availHead.appendChild(availHeadText);
        saleability.appendChild(availHead);
        const saleabilityText = document.createTextNode(
            this.saleability.split("_").join(" ")
        );
        saleability.appendChild(saleabilityText);

        const description = document.createElement("p");
        description.classList.add("inner__description");
        innerContainer.appendChild(description);
        const descHead = document.createElement("span");
        descHead.classList.add("sub-header");
        const descHeadText = document.createTextNode("Description: ");
        descHead.appendChild(descHeadText);
        description.appendChild(descHead);
        const descText = document.createTextNode(this.description);
        description.appendChild(descText);
    }
}

// find up to the last full stop within search length

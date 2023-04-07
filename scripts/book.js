export class Book {
    image;
    author;
    title;
    description;
    constructor() {}

    render(grid) {
        const container = document.createElement("div");
        grid.appendChild(container);

        const image = document.createElement("img");
        this.image.thumbnail
            ? (image.src = this.image.thumbnail)
            : (image.src = "");
        container.appendChild(image);

        const title = document.createElement("p");
        const titleText = document.createTextNode(this.title);
        title.appendChild(titleText);
        container.appendChild(title);
    }
}

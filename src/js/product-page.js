const products = [
  {
    name: "Allison Cloud",
    price: 14.99,
    image: "classico_beans.webp"
  },
  {
    name: "RiihiDMA",
    price: 16.99,
    image: "lavazza_beans.webp"
  },
  {
    name: "Riihicloud",
    price: 18.99,
    image: "milano_beans.webp"
  },
  {
    name: "Plentics",
    price: 19.99,
    image: "starbucks_beans.webp"
  },
];

/** @type {HTMLElement | null} */
const breadcrumb = document.querySelector(".breadcrumb > :last-child");
if (!breadcrumb) throw new Error("could not find breadcrumb name with query '.breadcrumb > :last-child'");

/** @type {HTMLHeadingElement | null} */
const title = document.querySelector("h1");
if (!title) throw new Error("could not find title with query 'h1'");

/** @type {HTMLElement | null} */
const price = document.querySelector(".price");
if (!price) throw new Error("could not find price with query '.price'");

/** @type {HTMLImageElement | null} */
const image = document.querySelector("figure img");
if (!image) throw new Error("could not find product image with query 'figure img'");

const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get('id') ?? "0");
const currentProduct = products[id - 1];

breadcrumb.innerText = currentProduct.name;
title.innerText = currentProduct.name;
price.innerHTML = `${currentProduct.price} &euro;`;
image.src = `./images/${currentProduct.image}`;

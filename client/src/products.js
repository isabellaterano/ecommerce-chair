const products = [
  {
    id: "price_1OfRseHADQctk6aDBOyE2oO3",
    name: "JASON LOUNGE CHAIR",
    price: 150,
    image: "/images/chair4.png",
    description:
      "Introducing our chair, a harmonious blend of modern elegance and timeless comfort. Crafted with meticulous attention to detail, this chair is more than just a piece of furniture; it's an invitation to unwind and relax in style.",
  },
  {
    id: "price_1OfRt1HADQctk6aDKk127Iwn",
    name: "KRAMER LOUNGE CHAIR",
    price: 290,
    image: "/images/chair5.png",
    description:
      "Introducing our chair, a harmonious blend of modern elegance and timeless comfort. Crafted with meticulous attention to detail, this chair is more than just a piece of furniture; it's an invitation to unwind and relax in style.",
  },
  {
    id: "price_1OfRqwHADQctk6aDgneisIxJ",
    name: "NORMAN LOUNGE CHAIR",
    price: 150,
    image: "/images/chair3.png",
    description:
      "Introducing our chair, a harmonious blend of modern elegance and timeless comfort. Crafted with meticulous attention to detail, this chair is more than just a piece of furniture; it's an invitation to unwind and relax in style.",
  },
  {
    id: "price_1OfRtaHADQctk6aDkst0rP0O",
    name: "CARRIE LOUNGE CHAIR",
    price: 270,
    image: "/images/chair6.png",
    description:
      "Introducing our chair, a harmonious blend of modern elegance and timeless comfort. Crafted with meticulous attention to detail, this chair is more than just a piece of furniture; it's an invitation to unwind and relax in style.",
  },
  {
    id: "price_1OfRtuHADQctk6aDwtT3MMno",
    name: "FREDDY LOUNGE CHAIR",
    price: 300,
    image: "/images/chair7.png",
    description:
      "Introducing our chair, a harmonious blend of modern elegance and timeless comfort. Crafted with meticulous attention to detail, this chair is more than just a piece of furniture; it's an invitation to unwind and relax in style.",
  },
  {
    id: "price_1OfRuFHADQctk6aDkdn2k4MS",
    name: "MICHAEL LOUNGE CHAIR",
    price: 500,
    image: "/images/chair8.png",
    description:
      "Introducing our chair, a harmonious blend of modern elegance and timeless comfort. Crafted with meticulous attention to detail, this chair is more than just a piece of furniture; it's an invitation to unwind and relax in style.",
  },
  {
    id: "price_1OfRudHADQctk6aDpoGyO82m",
    name: "LECTER LOUNGE CHAIR",
    price: 355,
    image: "/images/chair1.png",
    description:
      "Introducing our chair, a harmonious blend of modern elegance and timeless comfort. Crafted with meticulous attention to detail, this chair is more than just a piece of furniture; it's an invitation to unwind and relax in style.",
  },
  {
    id: "price_1OfRv1HADQctk6aD74mTqpQk",
    name: "SAMARA LOUNGE CHAIR",
    price: 460,
    image: "/images/chair2.png",
    description:
      "Introducing our chair, a harmonious blend of modern elegance and timeless comfort. Crafted with meticulous attention to detail, this chair is more than just a piece of furniture; it's an invitation to unwind and relax in style.",
  },
];

function getProductData(id) {
  let productData = products.find((product) => product.id === id);

  if (productData == undefined) {
    console.log("Product data does not exist for ID: " + id);
    return undefined;
  }

  return productData;
}

export { products, getProductData };

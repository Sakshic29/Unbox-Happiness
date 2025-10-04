// products.js
// Products data file: Array of hamper objects
// Each object includes id, name, price, image (Unsplash placeholders), and description
// Images are cropped to suitable dimensions for hampers (approx. 400x300)

const products = [
  {
    id: 1,
    name: "anniversary Gift Hamper",
    price: 499,
    image: "assets/images/anniversarygift.jpg",
    description: "Indulge in a sweet assortment of premium chocolates, truffles, and treats wrapped in elegant packaging."
  },
  {
    id: 2,
    name: "Wellness Hamper",
    price: 399,
    image: "assets/images/crochetflower.jpg",
    description: "Relax and rejuvenate with essential oils, herbal teas, bath salts, and soothing candles for ultimate self-care."
  },
  {
    id: 3,
    name: "crochet Hearts Bouquet",
    price: 799,
    image: "assets/images/crochetheartsbouquet.jpg",
    description: "Celebrate the season with festive sweets, decorations, and traditional goodies in a vibrant gift box."
  },
  {
    id: 4,
    name: "RakshaBandhan Special Hamper",
    price: 899,
    image: "assets/images/rakhihamper.jpg",
    description: "Make their day unforgettable with cupcakes, balloons, personalized cards, and fun surprises."
  }
];

export default products;
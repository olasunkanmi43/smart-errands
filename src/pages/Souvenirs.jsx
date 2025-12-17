import ProductCard from "../components/ProductCard";

/* Sample products – you can expand or fetch dynamically */
const products = [
  {
    name: "Handmade Talking Drum",
    price: 45,
    // imgSrc: "/assets/souvenirs/drum.jpg",
  },
  {
    name: "Beaded Bracelet",
    price: 12,
    // imgSrc: "/assets/souvenirs/bracelet.jpg",
  },
];

export default function Souvenirs() {
  return (
    <div className="container page">
      <h2>Souvenirs</h2>
      <div className="product-grid">
        {products.map((p, idx) => (
          <ProductCard
            key={idx}
            name={p.name}
            price={p.price}
            // imgSrc={p.imgSrc}
          />
        ))}
      </div>
    </div>
  );
}

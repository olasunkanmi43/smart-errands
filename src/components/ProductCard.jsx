export default function ProductCard({ name, price, imgSrc }) {
  return (
    <div className="product-card">
      <img
        src={imgSrc}
        alt={name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h4>{name}</h4>
      <p>${price}</p>
      <button className="btn primary">Add to Cart</button>
    </div>
  );
}

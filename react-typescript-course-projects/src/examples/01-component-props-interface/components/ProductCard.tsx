import Card from "./Card";
import "../styles/ProductCard.css";

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  inStock?: boolean;
}

function ProductCard({
  name,
  category,
  price,
  inStock = true,
}: ProductCardProps) {
  return (
    <Card>
      <div className="product-card">
        <h2>{name}</h2>

        <p>
          <strong>Category:</strong> {category}
        </p>

        <p>
          <strong>Price:</strong> ${price}
        </p>

        <p>
          <strong>Stock:</strong> {inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>
    </Card>
  );
}

export default ProductCard;
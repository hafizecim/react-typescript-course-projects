import Card from "./Card";
import PriceTag from "./PriceTag";
import "../styles/ProductCard.css";

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  inStock?: boolean;
  discount?: string;
}

function ProductCard({
  name,
  category,
  price,
  inStock = true,
  discount,
}: ProductCardProps) {
  return (
    <Card>
      <div className="product-card">
        <h2>{name}</h2>

        <p>
          <strong>Category:</strong> {category}
        </p>

        <p>
          <strong>Price:</strong> <PriceTag price={price} />
        </p>

        <p>
          <strong>Stock:</strong> {inStock ? "In Stock" : "Out of Stock"}
        </p>

        {discount && (
          <p>
            <strong>Discount:</strong> {discount}
          </p>
        )}
      </div>
    </Card>
  );
}

export default ProductCard;
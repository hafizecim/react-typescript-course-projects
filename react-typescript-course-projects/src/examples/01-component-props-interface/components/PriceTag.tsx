import "../styles/PriceTag.css";

interface PriceTagProps {
  price: number;
}

function PriceTag({ price }: PriceTagProps) {
  return (
    <span className="price-tag">
      ${price.toFixed(2)}
    </span>
  );
}

export default PriceTag;
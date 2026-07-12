import ProductCard from "./components/ProductCard";

function ComponentPropsInterfaceExample() {
  return (
    <>
      <ProductCard
        name="Wireless Keyboard"
        category="Accessories"
        price={79.99}
      />

      <ProductCard
        name="Gaming Mouse"
        category="Accessories"
        price={49.99}
        inStock={false}
      />
    </>
  );
}

export default ComponentPropsInterfaceExample;
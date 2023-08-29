import ProductItem from "./components/ProductItem";
import data from "./utils/data";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4"> {/* controls responsives */}
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
    </main>
  );
}

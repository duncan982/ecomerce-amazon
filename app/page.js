'use client'
import ProductItem from "./components/ProductItem";
import data from "./utils/data";
import { Store } from '@/app/contexts/Store';

export default function Home() {
  return (
    <main>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4"> {/* controls responsives */}
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
    </main>
  );
}

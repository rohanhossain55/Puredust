import { useMemo } from 'react';
import { products } from '../data';
import ProductCard from './ProductCard';

interface ProductGridProps {
  searchQuery: string;
}

export default function ProductGrid({ searchQuery }: ProductGridProps) {
  const filteredProducts = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return products;
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.nameBn.includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)),
    );
  }, [searchQuery]);

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="text-center mb-10">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-organic-900 mb-3">
          Our Products
        </h2>
        <p className="text-organic-600 max-w-xl mx-auto">
          Naturally sourced, carefully processed, and packed with goodness for your everyday needs.
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-organic-500 text-lg">No products found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

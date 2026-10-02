import { useState } from 'react';
import { ShoppingBag, Zap, Check, Info } from 'lucide-react';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [selectedVariationIndex, setSelectedVariationIndex] = useState(1);
  const [added, setAdded] = useState(false);

  const variation = product.variations[selectedVariationIndex];
  const startingPrice = Math.min(...product.variations.map((v) => v.price));

  const handleAddToCart = () => {
    addToCart(product, variation);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleBuyNow = () => {
    addToCart(product, variation);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-organic-100 overflow-hidden hover:shadow-xl hover:border-organic-200 transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-organic-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-organic-700 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="font-display text-lg font-bold text-organic-900">{product.name}</h3>
          <p className="text-sm text-organic-500 mt-0.5">{product.nameBn}</p>
        </div>

        <p className="text-sm text-organic-600 mb-4 line-clamp-2">{product.description}</p>

        {/* Weight selector */}
        <div className="mb-3">
          <p className="text-xs font-medium text-organic-500 mb-2">Select Weight</p>
          <div className="grid grid-cols-3 gap-2">
            {product.variations.map((v, idx) => (
              <button
                key={v.weight}
                onClick={() => setSelectedVariationIndex(idx)}
                className={`px-2 py-2 rounded-lg text-sm font-medium border transition-all ${
                  selectedVariationIndex === idx
                    ? 'bg-organic-600 text-white border-organic-600 shadow-sm'
                    : 'bg-white text-organic-700 border-organic-200 hover:border-organic-400'
                }`}
              >
                {v.weight}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic note for 1kg */}
        {variation.note && (
          <div className="flex items-start gap-1.5 mb-3 p-2.5 rounded-lg bg-lemon-50 border border-lemon-200 animate-fade-in">
            <Info className="w-4 h-4 text-lemon-700 shrink-0 mt-0.5" />
            <p className="text-xs text-lemon-800">{variation.note}</p>
          </div>
        )}

        {/* Price */}
        <div className="flex items-baseline gap-2 mb-4 mt-auto">
          <span className="font-display text-2xl font-bold text-organic-900">
            ৳{variation.price}
          </span>
          {selectedVariationIndex !== 0 && (
            <span className="text-sm text-organic-400">from ৳{startingPrice}</span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleAddToCart}
            className={`flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-sm border transition-all ${
              added
                ? 'bg-organic-100 text-organic-700 border-organic-200'
                : 'bg-white text-organic-700 border-organic-300 hover:bg-organic-50 hover:border-organic-400'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                Added
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </>
            )}
          </button>
          <button
            onClick={handleBuyNow}
            className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-sm bg-organic-600 text-white hover:bg-organic-700 transition-all shadow-sm hover:shadow-md"
          >
            <Zap className="w-4 h-4" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

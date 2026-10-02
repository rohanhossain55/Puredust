import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  onCheckout: () => void;
}

export default function CartDrawer({ onCheckout }: CartDrawerProps) {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, itemCount } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50 animate-fade-in"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-organic-50 z-50 shadow-2xl transition-transform duration-300 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-organic-200 bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-organic-600" />
            <h2 className="font-display text-lg font-bold text-organic-900">
              Cart ({itemCount})
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="p-2 rounded-lg text-organic-500 hover:bg-organic-100 transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <div className="w-20 h-20 rounded-full bg-organic-100 flex items-center justify-center mb-4">
              <ShoppingBag className="w-10 h-10 text-organic-300" />
            </div>
            <p className="text-organic-500 font-medium">Your cart is empty</p>
            <p className="text-organic-400 text-sm mt-1">Add some products to get started</p>
            <button
              onClick={closeCart}
              className="mt-6 px-6 py-2.5 bg-organic-600 text-white rounded-full font-medium text-sm hover:bg-organic-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {items.map((item, index) => (
                <div
                  key={`${item.productId}-${item.weight}`}
                  className="flex gap-3 bg-white rounded-xl p-3 border border-organic-100"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-organic-900 text-sm truncate">{item.name}</h3>
                        <p className="text-xs text-organic-500">{item.nameBn}</p>
                      </div>
                      <button
                        onClick={() => removeItem(index)}
                        className="p-1 text-organic-300 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="px-2 py-0.5 rounded-md bg-organic-100 text-organic-700 text-xs font-medium">
                        {item.weight}
                      </span>
                      <span className="text-sm font-semibold text-organic-900">৳{item.price}</span>
                    </div>
                    {item.note && (
                      <p className="text-xs text-lemon-700 mt-1 italic">{item.note}</p>
                    )}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                        className="w-7 h-7 rounded-lg border border-organic-200 flex items-center justify-center text-organic-600 hover:bg-organic-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-sm font-semibold text-organic-900 w-6 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                        className="w-7 h-7 rounded-lg border border-organic-200 flex items-center justify-center text-organic-600 hover:bg-organic-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                      <span className="ml-auto text-sm font-bold text-organic-900">
                        ৳{item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="border-t border-organic-200 p-5 bg-white space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-organic-600">Subtotal</span>
                <span className="font-display text-xl font-bold text-organic-900">৳{subtotal}</span>
              </div>
              <p className="text-xs text-organic-400">Delivery fee calculated at checkout</p>
              <button
                onClick={onCheckout}
                className="w-full py-3.5 bg-organic-600 text-white font-semibold rounded-xl hover:bg-organic-700 transition-all shadow-sm hover:shadow-md"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

import { useState } from 'react';
import { ShoppingBag, Search, Phone, Menu, X, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const { itemCount, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-organic-50/95 backdrop-blur-md border-b border-organic-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-organic-600 flex items-center justify-center shadow-sm">
              <Leaf className="w-6 h-6 text-organic-50" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl lg:text-2xl font-bold text-organic-800 leading-none">
                PureDust
              </span>
              <span className="text-[10px] lg:text-xs text-organic-600 font-medium tracking-wide">
                100% Organic &amp; Natural
              </span>
            </div>
          </a>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-organic-400" />
              <input
                type="text"
                placeholder="Search products..."
                onChange={(e) => onSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-organic-200 bg-white text-organic-800 placeholder-organic-400 text-sm focus:outline-none focus:ring-2 focus:ring-organic-400 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#products" className="text-sm font-medium text-organic-700 hover:text-organic-900 transition-colors">
              Products
            </a>
            <a href="#about" className="text-sm font-medium text-organic-700 hover:text-organic-900 transition-colors">
              About
            </a>
            <a
              href="tel:+8801000000000"
              className="flex items-center gap-1.5 text-sm font-medium text-organic-700 hover:text-organic-900 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Contact
            </a>
          </nav>

          {/* Cart + Mobile buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="md:hidden p-2 rounded-lg text-organic-700 hover:bg-organic-100 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={openCart}
              className="relative p-2 rounded-lg text-organic-700 hover:bg-organic-100 transition-colors"
              aria-label="Cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-lemon-400 text-organic-900 text-xs font-bold rounded-full flex items-center justify-center shadow-sm animate-scale-in">
                  {itemCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-organic-700 hover:bg-organic-100 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="md:hidden pb-3 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-organic-400" />
              <input
                type="text"
                placeholder="Search products..."
                onChange={(e) => onSearch(e.target.value)}
                autoFocus
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-organic-200 bg-white text-organic-800 placeholder-organic-400 text-sm focus:outline-none focus:ring-2 focus:ring-organic-400 focus:border-transparent transition-all"
              />
            </div>
          </div>
        )}

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <nav className="lg:hidden flex flex-col gap-1 pb-4 animate-fade-in">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-organic-700 hover:bg-organic-100 transition-colors"
            >
              Products
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-organic-700 hover:bg-organic-100 transition-colors"
            >
              About
            </a>
            <a
              href="tel:+8801000000000"
              className="px-4 py-2.5 rounded-lg text-sm font-medium text-organic-700 hover:bg-organic-100 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

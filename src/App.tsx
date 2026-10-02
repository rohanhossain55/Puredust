import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import Footer from './components/Footer';
import { Leaf, Heart, Shield, Sprout } from 'lucide-react';

function AboutSection() {
  const features = [
    {
      icon: Leaf,
      title: '100% Organic',
      desc: 'No chemicals, no additives — just pure natural ingredients.',
    },
    {
      icon: Heart,
      title: 'Health First',
      desc: 'Rich in nutrients, crafted to support your family\'s wellbeing.',
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      desc: 'Carefully processed and packaged to maintain freshness.',
    },
    {
      icon: Sprout,
      title: 'Locally Sourced',
      desc: 'Supporting local farmers and sustainable agriculture.',
    },
  ];

  return (
    <section id="about" className="bg-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-organic-900 mb-3">
            Why PureDust?
          </h2>
          <p className="text-organic-600 max-w-xl mx-auto">
            We believe in bringing you the purest form of nature, without compromise.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center p-6 rounded-2xl bg-organic-50 border border-organic-100 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-organic-100 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-organic-600" />
              </div>
              <h3 className="font-semibold text-organic-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-organic-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-organic-50 flex flex-col">
        <Header onSearch={setSearchQuery} />
        <main className="flex-1">
          <Hero />
          <ProductGrid searchQuery={searchQuery} />
          <AboutSection />
        </main>
        <Footer />
        <CartDrawer onCheckout={() => setCheckoutOpen(true)} />
        <CheckoutModal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
      </div>
    </CartProvider>
  );
}

export default App;

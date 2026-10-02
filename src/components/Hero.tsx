import { Leaf, Shield, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-organic-50 via-organic-100 to-brown-50">
      <div className="absolute top-0 right-0 w-72 h-72 bg-organic-200/40 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lemon-100/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-organic-200/60 text-organic-700 text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              100% Organic &amp; Natural
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-organic-900 leading-tight mb-6">
              Pure Goodness,
              <br />
              <span className="text-organic-600">From Nature</span>
              <br />
              to Your Home
            </h1>
            <p className="text-lg text-organic-700 mb-8 max-w-lg mx-auto lg:mx-0">
              Discover our range of naturally sourced powders — raw banana, date, and lemon peel —
              crafted with care for your health and wellbeing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#products"
                className="px-8 py-3.5 bg-organic-600 text-white font-semibold rounded-full hover:bg-organic-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Shop Now
              </a>
              <a
                href="#about"
                className="px-8 py-3.5 bg-white text-organic-700 font-semibold rounded-full border border-organic-200 hover:border-organic-400 transition-all hover:-translate-y-0.5"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-organic-300 to-lemon-200 rounded-[3rem] rotate-6" />
              <img
                src="https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Organic natural food ingredients"
                className="absolute inset-0 w-full h-full object-cover rounded-[3rem] shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 animate-fade-in">
                <div className="w-12 h-12 rounded-xl bg-organic-100 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-organic-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-organic-900">No Additives</p>
                  <p className="text-xs text-organic-500">100% Pure</p>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3 animate-fade-in">
                <div className="w-12 h-12 rounded-xl bg-lemon-100 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-lemon-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-organic-900">Fast Delivery</p>
                  <p className="text-xs text-organic-500">All over BD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

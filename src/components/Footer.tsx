import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-organic-900 text-organic-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-organic-600 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-organic-50" />
              </div>
              <div>
                <p className="font-display text-xl font-bold text-white">PureDust</p>
                <p className="text-xs text-organic-400">100% Organic &amp; Natural</p>
              </div>
            </div>
            <p className="text-sm text-organic-300 leading-relaxed">
              Naturally sourced powders made with care for your health and wellbeing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#products" className="text-organic-300 hover:text-white transition-colors">Products</a></li>
              <li><a href="#about" className="text-organic-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#home" className="text-organic-300 hover:text-white transition-colors">Home</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-organic-300">Beetroot Powder</li>
              <li className="text-organic-300">Raw Banana Powder</li>
              <li className="text-organic-300">Natural Date Powder</li>
              <li className="text-organic-300">Lemon Peel Powder</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-organic-300">
                <Phone className="w-4 h-4 shrink-0" />
                +880 1342-446162
              </li>
              <li className="flex items-center gap-2 text-organic-300">
                <Mail className="w-4 h-4 shrink-0" />
                support@puredust.com
              </li>
              <li className="flex items-center gap-2 text-organic-300">
                <MapPin className="w-4 h-4 shrink-0" />
                Meherpur, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-organic-800 mt-8 pt-6 text-center text-sm text-organic-400">
          <p>&copy; {new Date().getFullYear()} PureDust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

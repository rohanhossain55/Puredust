import { useState } from 'react';
import { X, Check, Loader2, Receipt, Banknote, Smartphone, MapPin, User, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { deliveryOptions } from '../data';
import { supabase } from '../lib/supabase';
import type { DeliveryLocation, PaymentMethod, OrderData } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { items, subtotal, clearCart } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState<DeliveryLocation>('meherpur');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('cod');
  const [submitting, setSubmitting] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState<OrderData | null>(null);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const selectedDelivery = deliveryOptions.find((d) => d.id === deliveryLocation)!;
  const deliveryFee = selectedDelivery.fee;
  const total = subtotal + deliveryFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !phone.trim() || !address.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    if (!/^\+?\d{10,15}$/.test(phone.replace(/[\s-]/g, ''))) {
      setError('Please enter a valid phone number.');
      return;
    }

    setSubmitting(true);
    try {
      const orderData: OrderData = {
        customer_name: name.trim(),
        customer_phone: phone.trim(),
        customer_address: address.trim(),
        delivery_location: deliveryLocation,
        delivery_fee: deliveryFee,
        subtotal,
        total,
        payment_method: paymentMethod,
        items,
      };

      const { error: insertError } = await supabase.from('orders').insert({
        customer_name: orderData.customer_name,
        customer_phone: orderData.customer_phone,
        customer_address: orderData.customer_address,
        delivery_location: orderData.delivery_location,
        delivery_fee: orderData.delivery_fee,
        subtotal: orderData.subtotal,
        total: orderData.total,
        payment_method: orderData.payment_method,
        items: orderData.items,
      });

      if (insertError) throw insertError;

      setConfirmedOrder(orderData);
      clearCart();
    } catch {
      setError(
        'We could not place your order right now. Please check your internet connection and try again, or call us at +880 1000-000000.',
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    setConfirmedOrder(null);
    setError('');
    setName('');
    setPhone('');
    setAddress('');
    setDeliveryLocation('meherpur');
    setPaymentMethod('cod');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/50" onClick={handleClose} />

      <div className="relative bg-organic-50 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
        {confirmedOrder ? (
          /* Order Confirmation */
          <div className="p-6 lg:p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-full bg-organic-100 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-organic-600" />
              </div>
              <h2 className="font-display text-2xl font-bold text-organic-900 mb-2">
                Order Placed Successfully!
              </h2>
              <p className="text-organic-600 text-sm">
                We'll contact you at {confirmedOrder.customer_phone} to confirm your order.
              </p>
            </div>

            {/* Invoice */}
            <div className="bg-white rounded-xl border border-organic-200 p-5 mb-6">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-organic-100">
                <Receipt className="w-5 h-5 text-organic-600" />
                <h3 className="font-semibold text-organic-900">Invoice Summary</h3>
              </div>

              <div className="space-y-2 mb-4">
                <div className="text-sm text-organic-600">
                  <span className="font-medium">Name:</span> {confirmedOrder.customer_name}
                </div>
                <div className="text-sm text-organic-600">
                  <span className="font-medium">Phone:</span> {confirmedOrder.customer_phone}
                </div>
                <div className="text-sm text-organic-600">
                  <span className="font-medium">Address:</span> {confirmedOrder.customer_address}
                </div>
                <div className="text-sm text-organic-600">
                  <span className="font-medium">Delivery:</span>{' '}
                  {deliveryOptions.find((d) => d.id === confirmedOrder.delivery_location as DeliveryLocation)?.label}
                </div>
                <div className="text-sm text-organic-600">
                  <span className="font-medium">Payment:</span>{' '}
                  {confirmedOrder.payment_method === 'cod'
                    ? 'Cash on Delivery'
                    : confirmedOrder.payment_method === 'bkash'
                      ? 'bKash'
                      : 'Nagad'}
                </div>
              </div>

              <div className="border-t border-organic-100 pt-3 space-y-2">
                {confirmedOrder.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span className="text-organic-700">
                      {item.name} ({item.weight}) × {item.quantity}
                    </span>
                    <span className="font-medium text-organic-900">
                      ৳{item.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-organic-100 pt-3 mt-3 space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-organic-600">Subtotal</span>
                  <span className="font-medium text-organic-900">৳{confirmedOrder.subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-organic-600">Delivery Fee</span>
                  <span className="font-medium text-organic-900">৳{confirmedOrder.delivery_fee}</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-1">
                  <span className="text-organic-900">Total</span>
                  <span className="text-organic-900">৳{confirmedOrder.total}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-3.5 bg-organic-600 text-white font-semibold rounded-xl hover:bg-organic-700 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          /* Checkout Form */
          <div className="p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-2xl font-bold text-organic-900">Checkout</h2>
              <button
                onClick={handleClose}
                className="p-2 rounded-lg text-organic-500 hover:bg-organic-100 transition-colors"
                aria-label="Close checkout"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Customer Details */}
              <div>
                <h3 className="text-sm font-semibold text-organic-700 mb-3 flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  Customer Details
                </h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-organic-200 bg-white text-organic-800 placeholder-organic-400 text-sm focus:outline-none focus:ring-2 focus:ring-organic-400 focus:border-transparent transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-organic-200 bg-white text-organic-800 placeholder-organic-400 text-sm focus:outline-none focus:ring-2 focus:ring-organic-400 focus:border-transparent transition-all"
                  />
                  <textarea
                    placeholder="Full Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={2}
                    className="w-full px-4 py-2.5 rounded-xl border border-organic-200 bg-white text-organic-800 placeholder-organic-400 text-sm focus:outline-none focus:ring-2 focus:ring-organic-400 focus:border-transparent transition-all resize-none"
                  />
                </div>
              </div>

              {/* Delivery Location */}
              <div>
                <h3 className="text-sm font-semibold text-organic-700 mb-3 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  Delivery Location
                </h3>
                <div className="space-y-2">
                  {deliveryOptions.map((option) => (
                    <label
                      key={option.id}
                      className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                        deliveryLocation === option.id
                          ? 'border-organic-500 bg-organic-50 ring-1 ring-organic-400'
                          : 'border-organic-200 bg-white hover:border-organic-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="delivery"
                          value={option.id}
                          checked={deliveryLocation === option.id}
                          onChange={(e) => setDeliveryLocation(e.target.value as DeliveryLocation)}
                          className="w-4 h-4 accent-organic-600"
                        />
                        <span className="text-sm font-medium text-organic-800">{option.label}</span>
                      </div>
                      <span className="text-sm font-semibold text-organic-700">৳{option.fee}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="text-sm font-semibold text-organic-700 mb-3 flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4" />
                  Payment Method
                </h3>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-organic-500 bg-organic-50 ring-1 ring-organic-400'
                        : 'border-organic-200 bg-white hover:border-organic-300'
                    }`}
                  >
                    <Banknote className="w-5 h-5 text-organic-600" />
                    <span className="text-xs font-medium text-organic-800">Cash on Delivery</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bkash')}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all ${
                      paymentMethod === 'bkash'
                        ? 'border-organic-500 bg-organic-50 ring-1 ring-organic-400'
                        : 'border-organic-200 bg-white hover:border-organic-300'
                    }`}
                  >
                    <Smartphone className="w-5 h-5 text-organic-600" />
                    <span className="text-xs font-medium text-organic-800">bKash</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('nagad')}
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all ${
                      paymentMethod === 'nagad'
                        ? 'border-organic-500 bg-organic-50 ring-1 ring-organic-400'
                        : 'border-organic-200 bg-white hover:border-organic-300'
                    }`}
                  >
                    <Smartphone className="w-5 h-5 text-organic-600" />
                    <span className="text-xs font-medium text-organic-800">Nagad</span>
                  </button>
                </div>

                {/* Manual payment info */}
                {paymentMethod !== 'cod' && (
                  <div className="mt-3 p-3 rounded-xl bg-lemon-50 border border-lemon-200 animate-fade-in">
                    <p className="text-xs text-organic-700">
                      Send money to{' '}
                      <span className="font-semibold">
                        {paymentMethod === 'bkash' ? '01XXXXXXXXX (bKash)' : '01XXXXXXXXX (Nagad)'}
                      </span>{' '}
                      and confirm your order via phone. We'll verify your payment before delivery.
                    </p>
                  </div>
                )}
              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-xl border border-organic-200 p-4">
                <h3 className="text-sm font-semibold text-organic-700 mb-3">Order Summary</h3>
                <div className="space-y-2 mb-3">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-organic-600">
                        {item.name} ({item.weight}) × {item.quantity}
                      </span>
                      <span className="font-medium text-organic-800">
                        ৳{item.price * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-organic-100 pt-3 space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-organic-600">Subtotal</span>
                    <span className="font-medium text-organic-800">৳{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-organic-600">Delivery Fee</span>
                    <span className="font-medium text-organic-800">৳{deliveryFee}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-1">
                    <span className="text-organic-900">Total</span>
                    <span className="text-organic-900">৳{total}</span>
                  </div>
                </div>
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700 animate-fade-in">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={submitting || items.length === 0}
                className="w-full py-3.5 bg-organic-600 text-white font-semibold rounded-xl hover:bg-organic-700 transition-all shadow-sm hover:shadow-md disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Placing Order...
                  </>
                ) : (
                  <>
                    <Check className="w-5 h-5" />
                    Place Order
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

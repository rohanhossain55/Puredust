/*
# Create orders table for PureDust e-commerce

1. New Tables
- `orders`
  - `id` (uuid, primary key)
  - `customer_name` (text, not null) — buyer's full name
  - `customer_phone` (text, not null) — contact phone number
  - `customer_address` (text, not null) — full delivery address
  - `delivery_location` (text, not null) — one of: meherpur, dhaka, rest_of_bd
  - `delivery_fee` (integer, not null) — delivery charge in BDT
  - `subtotal` (integer, not null) — sum of all line items in BDT
  - `total` (integer, not null) — subtotal + delivery_fee
  - `payment_method` (text, not null) — one of: cod, bkash, nagad
  - `items` (jsonb, not null) — array of {product_id, name, weight, price, quantity}
  - `status` (text, not null, default 'pending') — order status
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `orders`.
- Allow anon + authenticated INSERT (customers place orders without login).
- Allow anon + authenticated SELECT (order confirmation display).
*/

CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  customer_phone text NOT NULL,
  customer_address text NOT NULL,
  delivery_location text NOT NULL,
  delivery_fee integer NOT NULL,
  subtotal integer NOT NULL,
  total integer NOT NULL,
  payment_method text NOT NULL,
  items jsonb NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_orders" ON orders;
CREATE POLICY "anon_select_orders" ON orders FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_orders" ON orders;
CREATE POLICY "anon_insert_orders" ON orders FOR INSERT
TO anon, authenticated WITH CHECK (true);

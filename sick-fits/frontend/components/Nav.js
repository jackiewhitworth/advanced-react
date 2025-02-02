import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="products">Products</Link>
      <Link href="sell">Sell</Link>
      <Link href="order">Order</Link>
      <Link href="account">Account</Link>
    </nav>
  );
}

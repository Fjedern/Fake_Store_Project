import Link from "next/link";
import styles from "../../styles/NavAndFooter.module.css";
import shoppingcart from "../../public/shoppingcartIcon.ico";
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/">Electronics</Link>
      <Link href="/">Jewelery</Link>
      <Link href="/">Men's clothing</Link>
      <Link href="/">Womens's clothing</Link>
      <Link href="about">About us</Link>
      <Link href="cart"><Image alt={shoppingcart} src={shoppingcart}/></Link>
    </nav>
  );
}


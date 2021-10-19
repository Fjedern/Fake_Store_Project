import Link from "next/link";
import styles from "../../styles/NavAndFooter.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Hem</Link>
      <Link href="about">About us</Link>
      <Link href="cart">Cart</Link>
    </nav>
  );
}


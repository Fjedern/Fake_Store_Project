import Link from "next/link";
import styles from "../../styles/NavAndFooter.module.css"

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link href="/">Home</Link>
      <Link href="about">About us</Link>
      <Link href="cart">Cart</Link>
    </div>
  );
}

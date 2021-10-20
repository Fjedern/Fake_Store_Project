import Link from "next/link";
import styles from "../../styles/NavAndFooter.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLinks}>
        <Link href="/">Home</Link>
        <Link href="about">About us</Link>
        <Link href="cart">Cart</Link>
      </div>
      <div className={styles.footerCreators}>
        <p>Fjedern</p>
        <p>PalquistS</p>
        <p>Swala</p>
      </div>
    </div>
  );
}

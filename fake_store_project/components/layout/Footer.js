import Link from "next/link";

export default function Footer() {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
      <Link href="/">Home</Link>
      <Link href="about">About us</Link>
      <Link href="cart">Cart</Link>
    </div>
  );
}

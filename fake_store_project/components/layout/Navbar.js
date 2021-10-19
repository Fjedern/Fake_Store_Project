import Link from "next/link";

export default function Navbar({categories}) {
  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        fontSize: "24px",
      }}
    >
      <Link href="/">Hem</Link>
      {console.log(categories)}
      {/* {categories.map((category) => (
        <Link key={category} href="">{category}</Link>
      ))} */}
      <Link href="about">About us</Link>
      <Link href="cart">Cart</Link>
    </nav>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();

  console.log(data);
  return { props: { categories: data } };
}

import Link from "next/link";
import styles from "../../styles/NavAndFooter.module.css";
import shoppingcart from "../../public/shoppingcartIcon.ico";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [loading, setLoading] = useState(false);
  const [navLinks, setNavLinks] = useState([]);
  useEffect(() => {
    //get starter deck once when site loads
    async function getCategories() {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      console.log(data);

      setNavLinks(data);
      setLoading(false);
    }

    getCategories();
  }, []);

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  if (loading) return <div>Loading...</div>;
  if (!navLinks) return <div>Error</div>;

  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      {navLinks.map((item) => (
        <Link key={item} href={`/${encodeURIComponent(item)}`} passHref>
          {Capitalize(item)}
        </Link>
      ))}
      <Link href="about" passHref>
        About us
      </Link>
      <Link href="cart" passHref>
        <Image alt={shoppingcart} src={shoppingcart} />
      </Link>
    </nav>
  );
}

/*<nav className={styles.navbar}>
<Link href="/">Home</Link>
<Link href={`${category[0]}`}</Link>

<Link href="/">Jewelery</Link>
<Link href="/">Men's clothing</Link>
<Link href="/">Womens's clothing</Link>
<Link href="about">About us</Link>
<Link href="cart">
  <Image alt={shoppingcart} src={shoppingcart} />
</Link>
</nav>*/

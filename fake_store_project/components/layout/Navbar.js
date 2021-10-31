import Link from "next/link";
import styles from "../../styles/NavAndFooter.module.css";
import shoppingcart from "../../public/shoppingcartIcon.ico";
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import { Context } from "../../pages/_app";

export default function Navbar() {
  const [loading, setLoading] = useState(false);
  const [navLinks, setNavLinks] = useState([]);

  const value = useContext(Context);

  useEffect(() => {
    //get starter deck once when site loads
    async function getCategories() {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      //console.log(data);

      setNavLinks(data);
      setLoading(false);
      //console.log(cartItems);
    }

    getCategories();
  }, []);

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  if (loading) return <div>Loading...</div>;
  if (!navLinks) return <div>Error</div>;

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <Link href="/">
            <a className="text-grey-300 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-lg font-medium">
              Home
            </a>
          </Link>
          {navLinks.map((item) => (
            <Link key={item} href={`/${encodeURIComponent(item)}`} passHref>
              <a className="text-grey-300 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-lg font-medium ">
                {Capitalize(item)}
              </a>
            </Link>
          ))}
          <Link href="/cart" passHref>
            <Image
              className="filter invert text-grey-300 hover:bg-gray-700 text-white px-3 py-2 rounded-md realtive-flex"
              alt={shoppingcart}
              src={shoppingcart}
            />
          </Link>
          <span
            className="absolute right-0 top-0 rounded-full bg-red-600 w-5 h-5 top right p-0 m-0 
            text-white font-mono text-sm leadinf-tight text-center"
          >
            {value.count}
          </span>
        </div>
      </div>
    </nav>
  );
}

//<Context.Consumer>{value =>{value}}</Context.Consumer>

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

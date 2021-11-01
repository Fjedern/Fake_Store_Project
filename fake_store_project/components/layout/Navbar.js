import Link from "next/link";
import styles from "../../styles/NavAndFooter.module.css";
import shoppingcart from "../../public/shoppingcartIcon.ico";
import Image from "next/image";
import { useEffect, useState, useContext, forwardRef } from "react";
import { Context } from "../../pages/_app";

// eslint-disable-next-line react/display-name
const Navbar = forwardRef(({ onClick, href }, ref) => {
  //export default function Navbar() {
  const [loading, setLoading] = useState(false);
  const [navLinks, setNavLinks] = useState([]);

  const value = useContext(Context);

  useEffect(() => {
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
          <Link href="/" passHref>
            <a
              className="text-grey-300 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-lg font-medium"
              href={href}
              onClick={onClick}
              ref={ref}
            >
              Home
            </a>
          </Link>
          {navLinks.map((item) => (
            <Link key={item} href={`/${encodeURIComponent(item)}`} passHref>

              <a
                className="text-grey-300 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-lg font-medium"
                href={href}
                onClick={onClick}
                ref={ref}
              >

           
                {Capitalize(item)}
              </a>
            </Link>
          ))}
          <Link href="/cart" passHref>
            <a href={href} onClick={onClick} ref={ref}>
              <Image
                className="filter invert text-grey-300 hover:bg-gray-700 text-white px-3 py-2 rounded-md realtive-flex"
                alt={shoppingcart}
                src={shoppingcart}
              />
            </a>
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

});

export default Navbar;



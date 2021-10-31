import Link from "next/link";
import styles from "../../styles/NavAndFooter.module.css";
import shoppingcart from "../../public/shoppingcartIcon.ico";
import searchLogo from "../../public/search-icon.png";
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import { Context } from "../../pages/_app";

export default function Navbar() {
  const [loading, setLoading] = useState(false);
  const [showInputField, setShowInputField] = useState(false);
  const [navLinks, setNavLinks] = useState([]);
  const [products, setProducts] = useState([]);
  const [productsMatchInput, setProductMatchInput] = useState([]);
  const [inputText, setInputText] = useState();

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

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    }
    getProducts();
  }, []);

  useEffect(() => {
    let tempArray = products.filter(
      (el) => (el = el.title.toLowerCase().includes(inputText.toLowerCase()))
    );
    setProductMatchInput(tempArray);
  }, [inputText]);

  const showSearchField = () => {
    setShowInputField(!showInputField);
    setInputText("");
  };

  const storeInLocalStorage = () => {
    const myJSON = JSON.stringify(productsMatchInput);
    localStorage.setItem("productSearch", myJSON);
  };

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
            <a
              className="text-grey-300 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-lg font-medium"
              onClick={() => (showInputField ? showSearchField() : false)}
            >
              Home
            </a>
          </Link>
          {navLinks.map((item) => (
            <Link key={item} href={`/${encodeURIComponent(item)}`} passHref>
              <a
                className="text-grey-300 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-lg font-medium"
                onClick={() => (showInputField ? showSearchField() : false)}
              >
                {Capitalize(item)}
              </a>
            </Link>
          ))}
          <Image
            className=""
            alt={searchLogo}
            src={searchLogo}
            onClick={() => showSearchField()}
          />
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
      <div style={{ display: showInputField ? "block" : "none" }}>
        <div>
          <div className="flex space-x-1 pt-1 pb-1 pl-2">
            <input
              className="h-10  rounded-lg"
              id="inputValue"
              onChange={(e) => setInputText(e.target.value)}
              value={inputText}
              placeholder="Search by name"
            ></input>
            <Link href={`/search`}>
              <button
                className="py-2 px-4 bg-red-400 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                onClick={() => {
                  showInputField ? showSearchField() : false,
                    storeInLocalStorage();
                }}
              >
                Search
              </button>
            </Link>
          </div>
          {inputText &&
            productsMatchInput.map((item) => (
              <Link key={item.id} href={`/products/${item.id}`} passHref>
                <ul
                  className="text-grey-300 hover:bg-gray-700 text-white px-3 py-2 rounded-md text-lg font-medium"
                  onClick={showSearchField}
                >
                  {Capitalize(item.title)}
                </ul>
              </Link>
            ))}
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

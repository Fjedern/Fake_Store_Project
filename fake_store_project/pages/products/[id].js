import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/productsDisplay.module.css";
import { useEffect, useState } from "react";



export default function Item({ item }) {
  let [cart, setCart] = useState([]);

  let localCart;
  if (typeof window !== "undefined") {
    localCart = localStorage.getItem("cart");
  }

  const addItem = (item) => {
    //create a copy of our cart state, avoid overwritting existing state
    let cartCopy = [...cart];
  
    //assuming we have an ID field in our item
    let { id } = item;
  
    //look for item in cart array
    let existingItem = cartCopy.find((cartItem) => cartItem.id == id);
  
    //if item already exists
    if (existingItem) {
       existingItem.quantity += item.quantity; //update item
    } else {
      //if item doesn't exist, simply add it
      cartCopy.push(item);
    }
  
    //update app state
    setCart(cartCopy);
  
    //make cart a string and store in local space
    let stringCart = JSON.stringify(cartCopy);
    localStorage.setItem("cart", stringCart);
  };

  //this is called on component mount
  useEffect(() => {
    //turn it into js
    localCart = JSON.parse(localCart);
    //load persisted cart into state if it exists
    if (localCart) setCart(localCart);
  }, []); //the empty array ensures useEffect only runs once

  console.log(localCart);
  return (
    <div className={styles.main}>
      <Head>
        <title>{item.title}</title>
      </Head>

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8 md:flex-shrink-0">
            <Image width={200} height={200} src={item.image} alt={item.image} />
          </div>
          <div className="p-8">
            <h2 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {item.title}
            </h2>
            <h6 className="mt-1 text-gray-500">
              Rating: {item.rating.rate} Reviews: {item.rating.count}
            </h6>
            <p className="mt-2 leading-relaxed">{item.description}</p>
            <div className="mt-4">
              <h4>Price: ${item.price}</h4>
              <button
                className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                onClick={() => addItem(item)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  const paths = data.map((item) => ({ params: { id: item.id.toString() } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data = await res.json();
  console.log(data);

  return { props: { item: data } };
}

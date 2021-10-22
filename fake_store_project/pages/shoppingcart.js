import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Shoppingcart() {
  let [cart, setCart] = useState([]);

  let localCart;
  if (typeof window !== "undefined") {
    localCart = localStorage.getItem("cart");
  }

  //this is called on component mount
  useEffect(() => {
    //turn it into js
    localCart = JSON.parse(localCart);
    //load persisted cart into state if it exists
    if (localCart) setCart(localCart);
  }, []); //the empty array ensures useEffect only runs once

 

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Shoppingcart!</h1>

      {cart.map((item) => (
        <div key={item}>
          <h2>{item.title}</h2>
        </div>
      ))}
    </div>
  );
}

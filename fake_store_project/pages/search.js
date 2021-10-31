import Head from "next/head";
import ProductCard from "../components/layout/ProductCard";
import { useState, useEffect } from "react";

export default function Search() {
  let [searchFor, setSearchFor] = useState([]);

  let productSearch;
  if (typeof window !== "undefined") {
    productSearch = localStorage.getItem("productSearch");
  }

  useEffect(() => {
    productSearch = JSON.parse(productSearch);
    if (productSearch) setSearchFor(productSearch);
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ProductCard category={searchFor}></ProductCard>
      </div>
    </div>
  );
}
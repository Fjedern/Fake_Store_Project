import Head from "next/head";
import styles from "../styles/productsDisplay.module.css";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "../components/layout/ProductCard";

export default function Category({ category }) {
  //console.log(category);

  return (
    <div className={styles.main}>
      <Head>
        <title>{category.category}</title>
      </Head>

      <div>
        <ProductCard category={category}></ProductCard>
      </div>
    </div>
  );
}

//fetch the categories and puts in array
export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();
  //console.log("from paths: " + data);

  const paths = data.map((item) => ({ params: { category: item } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${params.category}`
  );
  const data = await res.json();
  //console.log("from props: " + data);

  return { props: { category: data } };
}

import Head from "next/head";
import styles from "../styles/productsDisplay.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Category({ category }) {
  //console.log(category);

  return (
    <div className={styles.main}>
      <Head>
        <title>{category.category}</title>
      </Head>
      <div className={styles.container}>
        {category.map((item) => (
          <Link key={item.id} href={`products/${item.id}`} passHref>
            <div>
              <Image
                src={item.image}
                alt={item.image}
                width={200}
                height={200}
              />
              <h2>{item.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

//fetch the categories and puts in array
export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products/categories");
  const data = await res.json();
  console.log("from paths: " + data);

  const paths = data.map((item) => ({ params: { category: item } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${params.category}`
  );
  const data = await res.json();
  console.log("from props: " + data);

  return { props: { category: data } };
}

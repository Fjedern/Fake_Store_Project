import Head from "next/head";
import Image from "next/image";
import styles from "../styles/productsDisplay.module.css";
import ProductCard from "../components/layout/ProductCard";
import { motion } from "framer-motion";

export default function Home({ products }) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className={styles.main}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div className="w-auto">
          <div className="grid justify-items-center">
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 1 }}>
              <Image
                src="/FakeStoreLogo.PNG"
                alt="Fake store"
                width={400}
                height={400}
              />
            </motion.div>
            <motion.h2
              animate={{ rotate: 720 }}
              transition={{ duration: 3 }}
              className="mt-20 mb-8 text-4xl font-black"
            >
              Today´s offer
            </motion.h2>
          </div>
          <ProductCard></ProductCard>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return { props: { products: data } };
}

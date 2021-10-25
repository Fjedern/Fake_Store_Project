import Link from "next/link";
import Image from "next/dist/client/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ProductCard({ category }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      setLoading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      //console.log(data);

      setProducts(data.slice(0, 3)); //only for start page, if we have a view all products this needs to change
      setLoading(false);
    }

    category ? setProducts(category) : getProducts();
  }, [category]);

  if (loading) return <div>Loading...</div>;
  if (!products) return <div>Error</div>;

  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-50 min-w-full md:min-w-0  max-w-7xl mx-auto">
      {products.map((product) => (
        <Link key={product.id} href={`products/${product.id}`} passHref>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 5 } }}
            transition={{ duration: 0.2 }}
            className=" opacity-80 hover:opacity-100 p-2 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl grid justify-items-center"
          >
            <Image
              src={product.image}
              alt={product.image}
              width={170}
              height={210}
            />
            <h3 className="text-2xl font-semibold">{product.title}</h3>
            <p className="text-xl font-medium">
              Only ${product.price.toFixed(2)}
            </p>
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
}

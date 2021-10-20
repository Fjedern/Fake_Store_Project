import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/productsDisplay.module.css";

function addItemToCart(){
  console.log("You pressed button");
}

export default function Item({ item }) {
  console.log(item);
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
              Rate: {item.rating.rate} Reviews: {item.rating.count}
            </h6>
            <p className="mt-2 leading-relaxed">{item.description}</p>
            <div className="mt-4">
              <h4>Price: ${item.price}</h4>
              <button
                className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
                onClick={() => addItemToCart()}
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

  const paths = data.map((item) => ({ params: { id: item.id.toString()} }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data = await res.json();
  console.log(data);

  return { props: { item: data } };
}

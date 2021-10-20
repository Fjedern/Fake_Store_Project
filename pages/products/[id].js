import Head from "next/head";
import Image from "next/image";

export default function Item({ item }) {
  console.log(item);
  return (
    <div>
      <Head>
        <title>{item.title}</title>
      </Head>
      <h1>{item.title}</h1>
      <Image width={200} height={200} src={item.image} alt={item.image} />
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

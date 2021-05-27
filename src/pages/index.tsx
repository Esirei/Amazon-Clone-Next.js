import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Banner from '~/components/Banner';
import Header from '~/components/Header';
import ProductFeed from '~/components/ProductFeed';
import { Product } from '~/features/product';

interface Props {
  products: Product[];
}

export default function Home({ products }: Props) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon</title>
        <meta name="description" content="Amazon clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const products = await axios
    .get<Product[]>('https://fakestoreapi.com/products')
    .then(response => response.data);

  return { props: { products } };
};

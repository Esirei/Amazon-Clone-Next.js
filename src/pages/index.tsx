import Head from 'next/head';
import Banner from '~/components/Banner';
import Header from '~/components/Header';

export default function Home() {
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
      </main>
    </div>
  );
}

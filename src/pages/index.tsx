import Head from 'next/head';
import Header from '~/components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon</title>
        <meta name="description" content="Amazon clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
    </div>
  );
}

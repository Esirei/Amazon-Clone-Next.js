import { FC } from 'react';
import Header from '~/components/Header';
import Image from 'next/image';

const Checkout: FC = () => (
  <div className="bg-gray-100">
    <Header />
    <main className="lg:flex max-w-screen-2xl mx-auto">
      <section className="flex-grow m-5 shadow-sm">
        <Image src="/prime-day-banner.png" width={1020} height={250} objectFit={'contain'} />

        <div className="flex flex-col p-5 space-y-10 bg-white">
          <h1 className="text-3xl border-b pb-4">Your Amazon Cart is empty</h1>
        </div>
      </section>

      <section></section>
    </main>
  </div>
);

export default Checkout;

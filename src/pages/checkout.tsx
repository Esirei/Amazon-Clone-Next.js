import { FC } from 'react';
import Header from '~/components/Header';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectCartItems } from '~/features/cart';
import CheckoutProductItem from '~/components/CheckoutProductItem';

const Checkout: FC = () => {
  const items = useSelector(selectCartItems);
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <section className="flex-grow m-5 shadow-sm">
          <Image src="/prime-day-banner.png" width={1020} height={250} objectFit="contain" />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length ? 'Shopping Cart' : 'Your Amazon Cart is empty'}
            </h1>

            {items.map(product => (
              <CheckoutProductItem product={product} key={product.id} />
            ))}
          </div>
        </section>

        <section></section>
      </main>
    </div>
  );
};

export default Checkout;

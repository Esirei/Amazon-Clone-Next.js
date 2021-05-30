import { FC } from 'react';
import Header from '~/components/Header';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartItemsQuantity, selectCartItemsTotal } from '~/features/cart';
import CheckoutProductItem from '~/components/CheckoutProductItem';
import { useSession } from 'next-auth/client';

const Checkout: FC = () => {
  const [session] = useSession();
  const items = useSelector(selectCartItems);
  const itemsQuantity = useSelector(selectCartItemsQuantity);
  const itemsTotal = useSelector(selectCartItemsTotal);
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

        <section className="flex flex-col bg-white p-10 shadow-md">
          {itemsQuantity && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({itemsQuantity} item{itemsQuantity > 1 && 's'}):{' '}
                <span className="font-bold">${itemsTotal.toFixed(2)}</span>
              </h2>
              <button
                disabled={!session}
                className={`mt-2 p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 active:from-yellow-500 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-1 ring-yellow-500 ring-offset-1 ring-offset-yellow-400 ${
                  !session &&
                  'cursor-not-allowed from-gray-300 to-gray-500 border-gray-200 text-gray-200'
                }`.trim()}>
                {session ? 'Checkout' : 'Sign In to Checkout'}
              </button>
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default Checkout;

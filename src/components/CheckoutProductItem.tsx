import { StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React, { FC } from 'react';
import { addToCart, CheckoutProduct, removeFromCart } from '~/features/cart';
import { useDispatch } from '~/store';

interface Props {
  product: CheckoutProduct;
}

const CheckoutProductItem: FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  const addItemToCart = () => dispatch(addToCart(product));
  const removeItemFromCart = () => dispatch(removeFromCart(product.id));
  return (
    <div className="grid grid-cols-5">
      <Image src={product.image} height={200} width={200} objectFit="contain" />

      <div className="col-span-3 mx-5">
        <p>{product.title}</p>
        <div className="flex">
          {[...Array(product.rating)].map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" key={i} />
          ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{product.description}</p>
        <p>${product.total.toFixed(2)}</p>
        {product.hasPrime && (
          <div className="flex items-center space-x-2">
            <img src="/prime.png" alt="prime delivery" className="w-12" />
            <span className="text-xs text-gray-500">FREE Next-day Delivery</span>
          </div>
        )}
      </div>

      <div className="my-auto flex flex-col space-y-2">
        <button
          onClick={addItemToCart}
          className="p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 active:from-yellow-500 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-1 ring-yellow-500 ring-offset-1 ring-offset-yellow-400">
          Add to Cart
        </button>
        <button
          onClick={removeItemFromCart}
          className="p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 active:from-yellow-500 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-1 ring-yellow-500 ring-offset-1 ring-offset-yellow-400">
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProductItem;

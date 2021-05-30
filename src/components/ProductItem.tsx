import React, { FC } from 'react';
import { Product } from '~/features/product';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';

interface Props {
  product: Product;
  className?: string;
}

const MAX_RATING = 5;

const ProductItem: FC<Props> = ({ product, className }) => {
  const rating = React.useRef(Math.ceil(Math.random() * MAX_RATING)).current;
  const hasPrime = React.useRef(Math.random() > 0.5).current;

  return (
    <div className={`relative flex flex-col bg-white p-10${className && ` ${className}`}`}>
      <p className="text-xs italic text-gray-400 absolute top-4 right-4">{product.category}</p>

      <Image src={product.image} height={200} width={200} objectFit="contain" />

      <h4 className="my-3">{product.title}</h4>

      <div className="flex">
        {[...Array(rating)].map((_, i) => (
          <StarIcon className="h-5 text-yellow-500" key={i} />
        ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{product.description}</p>

      <div className="mb-5">${product.price.toFixed(2)}</div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img src="/prime.png" alt="prime delivery" className="w-12" />
          <span className="text-xs text-gray-500">FREE Next-day Delivery</span>
        </div>
      )}
      <button className="mt-auto p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 active:from-yellow-500 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-1 ring-yellow-500 ring-offset-1 ring-offset-yellow-400">
        Add to Cart
      </button>
    </div>
  );
};

ProductItem.defaultProps = { className: '' };

export default ProductItem;

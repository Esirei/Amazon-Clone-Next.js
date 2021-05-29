import React, { FC } from 'react';
import { Product } from '~/features/product';
import ProductItem from './ProductItem';

interface Props {
  products: Product[];
}

const ProductFeed: FC<Props> = ({ products }) => (
  <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-5 -mt-24 sm:-mt-32 md:-mt-48 lg:-mt-64 xl:-mt-80 pb-5">
    {products.slice(0, 4).map(product => (
      <ProductItem product={product} key={product.id} />
    ))}
    <img src="/products-feed-ad.jpg" alt="advert" className="md:col-span-full" />
    <ProductItem product={products[4]} className="md:col-span-2" />
    {products.slice(5).map(product => (
      <ProductItem product={product} key={product.id} />
    ))}
  </div>
);

export default ProductFeed;

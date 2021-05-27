import React, { FC } from 'react';
import { Product } from '~/features/product';
import ProductItem from './ProductItem';

interface Props {
  products: Product[];
}

const ProductFeed: FC<Props> = ({ products }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-5">
    {products.map(product => (
      <ProductItem product={product} key={product.id} />
    ))}
  </div>
);

export default ProductFeed;

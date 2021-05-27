import React, { FC } from 'react';
import { Product } from '~/features/product';
import ProductItem from './ProductItem';

interface Props {
  products: Product[];
}

const ProductFeed: FC<Props> = ({ products }) => (
  <div>
    {products.map(product => (
      <ProductItem product={product} key={product.id} />
    ))}
  </div>
);

export default ProductFeed;

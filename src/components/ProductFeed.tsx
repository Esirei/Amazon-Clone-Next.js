import React, { FC } from 'react';
import { Product } from '~/features/product';

interface Props {
  products: Product[];
}

const ProductFeed: FC<Props> = ({ products }) => (
  <div>
    {products.map(product => (
      <p>{product.title}</p>
    ))}
  </div>
);

export default ProductFeed;

import React, { useState } from 'react';
import { CardWrapper, Body, Header } from './ProductCardElement';
import ReactStars from 'react-star-rating-component';
import { BsHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { Product } from '../../types';

const ProductCard: React.FC<Product> = (product: Product) => {
  const navigate = useNavigate();
  return (
    <CardWrapper
      hoverable
      style={{ width: 240 }}
      cover={<img alt='example' src={product.small_image.url} />}
    >
      <Body>
        <Header onClick={() => navigate(`/products/${product.id}`)}>
          {product.name}
        </Header>
        <div>
          <b>{product.price.regularPrice.amount.currency}</b>
          <span>
            {new Intl.NumberFormat().format(
              product.price.regularPrice.amount.value
            )}
          </span>
        </div>

        <div className='rating'>
          <ReactStars
            name='rating'
            starCount={5}
            value={product.rating_summary}
            starColor='#a84e32'
          />
          <BsHeart />
        </div>
      </Body>
    </CardWrapper>
  );
};

export default ProductCard;

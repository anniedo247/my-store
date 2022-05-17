import React from 'react';
import { CardWrapper, Body, Header } from './ProductCardElement.jsx';
import ReactStars from 'react-rating-stars-component';
import { BsHeart } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
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
          <ReactStars count={5} size={15} activeColor='#a84e32' />
          <BsHeart />
        </div>
      </Body>
    </CardWrapper>
  );
};

export default ProductCard;

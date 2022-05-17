import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Divider } from 'antd';
import { BsHeart } from 'react-icons/bs';
import { Flex, Container } from './ProductInformationElements';

const ProductInformation = ({ product }) => {
  return (
    <Container columns>
      <p>{product?.name}</p>
      <Flex style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Flex style={{ gap: '5px', alignItems: 'center' }}>
          <ReactStars
            count={5}
            size={15}
            isHalf={true}
            value={product.rating_summary}
            activeColor='#a84e32'
          />
          <span>
            {product && product.review_count !== 0 ? product?.review_count : '0'} Reviews
          </span>
          <Divider type='vertical' />
          <span> {new Intl.NumberFormat().format(2670)} Sold</span>
        </Flex>
        <BsHeart />
      </Flex>
      <div className='price'>
        <b>{product?.price?.regularPrice?.amount.currency}</b>
        <span>
          {new Intl.NumberFormat().format(
            product?.price?.regularPrice?.amount.value
          )}
        </span>
      </div>
    </Container>
  );
};

export default ProductInformation;

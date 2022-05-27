import React from 'react';
import ReactStars from 'react-star-rating-component';
import { Divider } from 'antd';
import { BsHeart } from 'react-icons/bs';
import { Flex, Container } from './ProductInformationElements';
import { ProductInfo } from '../../types';

type Props = Pick<
  ProductInfo,
  'name' | 'rating_summary' | 'review_count' | 'price'
>;

const ProductInformation: React.FC<Partial<Props>> = ({
  name,
  rating_summary,
  review_count,
  price,
}) => {
  return (
    <Container>
      <p>{name}</p>
      <Flex style={{ justifyContent: 'space-between', alignItems: 'center' }}>
        <Flex style={{ gap: '5px', alignItems: 'center' }}>
          <ReactStars
            name='rating'
            starCount={5}
            value={rating_summary ? rating_summary : 0}
            starColor='#a84e32'
          />
          <span>{review_count !== 0 ? review_count : '0'} Reviews</span>
          <Divider type='vertical' />
          <span> {new Intl.NumberFormat().format(2670)} Sold</span>
        </Flex>
        <BsHeart />
      </Flex>
      <div className='price'>
        <b>{price?.regularPrice?.amount.currency}</b>
        <span>
          {price &&
            new Intl.NumberFormat().format(price.regularPrice.amount.value)}
        </span>
      </div>
    </Container>
  );
};

export default ProductInformation;

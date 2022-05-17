import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import ProductInformation from '../components/ProductInformation';
import ProductQuantity from '../components/ProductQuantity';
import { Container, Tag, Flex } from './ProductDetailsElements';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:3000/products/${id}`,
    })
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);
  const images = [
    {
      original: product?.small_image?.url,
      thumbnail: product?.small_image?.url,
    },
  ];
  return (
    <Container>
      <div>
        <ImageGallery
          items={images}
          thumbnailPosition='left'
          showPlayButton={false}
        />
      </div>
      <div>
        <Flex style={{ gap: '5px' }}>
          <Tag white green small>
            Sale
          </Tag>
          <Tag outlined>Ready To Ship</Tag>
        </Flex>
        <ProductInformation product={product} />
        <ProductQuantity />
      </div>
    </Container>
  );
};

export default ProductDetails;

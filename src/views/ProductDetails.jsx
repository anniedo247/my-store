import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import ReactStars from 'react-rating-stars-component';

import {
  Container,
  Images,
  Tag,
  Flex,
  ProductInformation,
} from './ProductDetailsElements';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:3000/products/${id}`,
    })
      .then((response) => {
        console.log(response.data.small_image.url);
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
      <Images>
        <ImageGallery
          items={images}
          thumbnailPosition='left'
          showPlayButton={false}
        />
      </Images>
      
    </Container>
  );
};

export default ProductDetails;

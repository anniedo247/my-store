import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Tabs } from 'antd';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import ProductInformation from '../components/ProductInformation';
import ProductQuantity from '../components/ProductQuantity';
import { Container, Tag, Flex, Button } from './ProductDetailsElements';

const ProductDetails = () => {
  const { TabPane } = Tabs;
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const SubtractItemHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1)
    }
  };
  const AddItemHandler = () => {
    setQuantity(quantity + 1);
  };
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
    <div style={{padding: "60px 150px"}}>
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
          <ProductQuantity
            quantity={quantity}
            SubtractItemHandler={SubtractItemHandler}
            AddItemHandler={AddItemHandler}
          />
          <Flex style={{ justifyContent: 'space-between' }}>
            <Button>Add to Cart</Button>
            <Button gray white>
              Buy now
            </Button>
          </Flex>
        </div>
      </Container>
      <div>
        <Tabs defaultActiveKey='1'>
          <TabPane tab='Description' key='1'>
            Description
          </TabPane>
          <TabPane tab='Reviews' key='2'>
            Reviews
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetails;

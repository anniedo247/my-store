import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductService from '../apiServices';
import { Tabs } from 'antd';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import ProductInformation from '../components/ProductInformation';
import ProductQuantity from '../components/ProductQuantity';
import { Container, Tag, Flex, Button } from './ProductDetailsElements';
import { ProductInfo } from '../types';
import { ReactImageGalleryItem } from 'react-image-gallery';

const ProductDetails = () => {
  const { TabPane } = Tabs;
  const { id } = useParams();
  const [product, setProduct] = useState<ProductInfo>();
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    ProductService.getProductDetails(id)
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const SubtractItemHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1);
    }
  };
  const AddItemHandler = () => {
    setQuantity(quantity + 1);
  };

  const images: ReactImageGalleryItem[] = [
    {
      original: product?.small_image?.url || '',
      thumbnail: product?.small_image?.url,
    },
  ];
  return (
    <div style={{ padding: '60px 150px' }}>
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
            <Tag isGreenTag width='80px'>
              Sale
            </Tag>
            <Tag color='#a84e32' outlined width='190px'>
              Ready To Ship
            </Tag>
          </Flex>
          <ProductInformation {...product} />
          <ProductQuantity
            quantity={quantity}
            price={product?.price.regularPrice.amount.value || 0}
            SubtractItemHandler={SubtractItemHandler}
            AddItemHandler={AddItemHandler}
          />
          <Flex style={{ justifyContent: 'space-between' }}>
            <Button color='#373433'>Add to Cart</Button>
            <Button color='white' isGray>
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

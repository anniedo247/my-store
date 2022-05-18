import { useEffect, useState } from 'react';
import axios from 'axios';
import  ProductService from '../apiServices';
import { Row, Col } from 'antd';
import ProductCard from '../components/ProductCard';
import {Header} from './ProductListsElement'

const ProductLists = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getProductList().then((data) => {
        setProducts(data);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <Header>Our products</Header>
      <div style={{ padding: '40px 40px' }}>
        <Row>
          {products &&
            products.map((item) => {
              return (
                <Col
                  xl={5}
                  lg={6}
                  md={8}
                  xs={12}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                  key={item.id}
                >
                  <ProductCard product={item} />
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
};

export default ProductLists;

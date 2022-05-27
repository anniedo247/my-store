import { useEffect, useState } from 'react';
import ProductService from '../apiServices';
import { Row, Col } from 'antd';
import ProductCard from '../components/ProductCard';
import { Header } from './ProductListsElement';
import { Product } from './../types';

const ProductLists: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    ProductService.getProductList()
      .then((data) => {
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
                  <ProductCard {...item} />
                </Col>
              );
            })}
        </Row>
      </div>
    </div>
  );
};

export default ProductLists;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
        setProduct(response.data)
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);
  return <div>{product.name}</div>;
};

export default ProductDetails;

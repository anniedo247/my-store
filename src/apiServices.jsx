import axios from 'axios';

const API_URL = 'http://localhost:3000/products';

const getProductList = () => {
  return axios.get(API_URL).then((response) => {
    return response.data;
  });
};
const getProductDetails = (id) => {
  return axios.get(`${API_URL}/${id}`).then((response) => {
    return response.data;
  });
};

const ProductService = { getProductList, getProductDetails };
export default ProductService;

import axios from "axios";

const PRODUCT_API_KEY = "http://localhost:8080/api/products";

class ProductService {
  getProducts() {
    return axios.get(PRODUCT_API_KEY);
  }

  getProductById(productId) {
    return axios.get(`${PRODUCT_API_KEY}/${productId}`);
  }
}

export default new ProductService();

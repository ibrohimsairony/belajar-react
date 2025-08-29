import axios from "axios";

export const getProducts = (callback) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => callback(res.data))
    .catch((err) => callback(err.message));
};

export const getSingleProduct = (productId = 1, callback) => {
  axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => {
      return callback(res.data);
    })
    .catch((err) => callback(err));
};

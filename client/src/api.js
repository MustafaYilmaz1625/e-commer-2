import axios from "axios";
export const fetchProductList = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/product?page=${pageParam}`
  );
  return data;
};
export const fetchProduct = async (id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_URL}/product/${id}`
  );
  return data;
};

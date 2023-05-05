import axios from "axios";


axios.interceptors.request.use(
  function (config) {
    const { origin } = new URL(config.url);

    const allowedOrigins = [process.env.REACT_APP_BASE_URL];
    const token = localStorage.getItem("access-token");

    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = token;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);



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

export const fetchRegister = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/auth/register`,
    input
  );
  return data;
};
export const fetchLogin = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_URL}/auth/fetchLogin`,
    input
  );
  return data;
};

export const fetchMe = async () => {
  const { data } = await axios.get(
    ` ${process.env.REACT_APP_BASE_URL}/auth/me`
  );
  return data;
};
export const fetchLogout  = async () => {
  const { data } = await axios.post(
    ` ${process.env.REACT_APP_BASE_URL}/auth/logout`,{
      refresh_token:localStorage.getItem("refresh_token")
    }
  );
  return data;
};

export const postOrder  = async (input) => {
  const { data } = await axios.post(
    ` ${process.env.REACT_APP_BASE_URL}/order`,input );
  return data;
};
export const fetchOrders  = async (input) => {
  const { data } = await axios.get(
    ` ${process.env.REACT_APP_BASE_URL}/order`);
  return data;
};
export const deleteProduct  = async (product_id) => {
  const { data } = await axios.delete(
    ` ${process.env.REACT_APP_BASE_URL}/product/${product_id}`);
  return data;
};


import axios from "../../utils/axios.config";

export const fetchProducts = async () => {
  const data = await axios.get('/');

  return data.data;
}

export const postProduct = async (productData) => {
  await axios.post('/', productData)
}
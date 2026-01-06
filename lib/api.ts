import axios from "axios";

const API_BASE_URL = "https://dummyjson.com";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getProducts = async () => {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};



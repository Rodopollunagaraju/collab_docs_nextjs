import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "", // your backend URL
  withCredentials: true, // so cookies (like JWT) are sent automatically
});

export default api;

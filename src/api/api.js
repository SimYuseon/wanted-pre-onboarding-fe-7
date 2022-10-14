import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
});

api.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "access_token"
    )}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const accountAPI = {
  postLogin: async (data) => {
    const response = await api.post("auth/signin", data);
    return response.data;
  },
  postSignUp: async (data) => {
    const response = await api.post("auth/signup", data);
    return response.data;
  },
};

export const todoAPI = {
  getTodos: async () => {
    const response = await api.get("todos");
    return response.data;
  },
  addTodo: async (todo) => {
    const response = await api.post("todos", todo);
    return response.data;
  },
  deleteTodo: async (id) => {
    const response = await api.delete(`todos/${id}`, id);
    return response;
  },
  upDateTodo: async (id, data) => {
    const response = await api.put(`todos/${id}`, data);
    return response.data;
  },
};

import axios from "axios";

export const api = axios.create({
  baseURL: "https://pre-onboarding-selection-task.shop/",
  headers: {
    // "content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
    // accept: "application/json,",
  },
});

export const apis = {
  getTodos: async () => {
    const response = await api.get("todos");
    return response.data;
  },

  addTodo: async (todo) => {
    const response = await api.post("todos", todo);
    return response.data;
  },
  deleteTodo: async (id) => {
    await api.delete(`todos/${id}`, id);
  },
  upDateTodo: async (id, data) => {
    await api.put(`todos/${id}`, data);
  },

  // getBoard: async () => {
  //   const response = await api.get('/board');
  //   return response.data;
  // },
  // getPosts: async () => {
  //   const response = await api.get('posts');
  //   return response.data;
  // },
  // postHeart: async (boardId, heartOn) => {
  //   const response = await api.post('hearts', {
  //     boardId: boardId,
  //     heartOn: heartOn,
  //   });
  //   return response.data;
  // },
};

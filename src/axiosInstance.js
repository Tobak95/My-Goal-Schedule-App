import axios from 'axios'

export const axiosInstance = axios.create({
  baseURL: "https://goal-project-sizh.onrender.com/goals",
});
import axios from "axios";

const API_URL = `http://localhost:3000/api/auth`;

const register = (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

const login = (userData) => {
  return axios.post(`${API_URL}/login`, userData).then((response) => {
    localStorage.setItem("userToken", response.data.token);
  });
};

const logout = () => {
  localStorage.removeItem("userToken");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;

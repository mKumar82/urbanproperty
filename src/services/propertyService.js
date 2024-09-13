import axios from "axios";

const API_URL = "http://localhost:3000/api/properties";

const getAllProperties = () => {
  return axios.get(API_URL).then((response) => response.data);
};

const propertyService = {
  getAllProperties,
};

export default propertyService;

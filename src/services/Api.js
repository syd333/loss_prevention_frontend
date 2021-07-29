import axios from 'axios';
const BACKEND_URL = "http://localhost:3000/api/v1/";

const rails = axios.create({
    baseURL: BACKEND_URL,
  });

  const token =  () => localStorage.getItem("token");

  const headers = () => {
      return {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer " + token(),
      };
  };


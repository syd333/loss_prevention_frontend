import axios from 'axios';
const BACKEND_URL = "http://localhost:3000/api/v1";

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

//* Auth API
const signup = (data) => {
    return fetch(`${BACKEND_URL}/signup`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify({
            user: data
        }),
    }).then((res) => res.json());
}

const login = (data) => {
    return fetch(`${BACKEND_URL}/login`, {
        method: 'POST',
        headers: headers(),
        body: JSON.stringify(data),
    }).then((res) => res.json())
};

// change to '/profile'?
const getCurrentUser = () => {
    console.log(token());
    return fetch(`${BACKEND_URL}/profile`, {
        headers: headers(),
    }).then((res) => res.json());
};

export const api = {
    rails,
    auth: {
        signup,
        login,
        getCurrentUser,
    }
};

export default api;
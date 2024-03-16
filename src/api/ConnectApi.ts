import axios from 'axios';

export const ConnectApi = async () => {
    return axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}`,
      headers: {}
    });
  };
  


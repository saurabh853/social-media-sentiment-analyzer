import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tweets';

export const fetchTweets = (keyword) => {
  return axios.get(`${API_URL}/search`, {
    params: {
      keyword,
    },
  });
};
import axios from "axios";

const API_KEY = "8ajuCz6HjlDgi1MReblnOCYkBU396nzxtfo_AVH1Z0o";
const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page = 1) => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: API_KEY,
    },
  });

  return {
    images: response.data.results,
    total: response.data.total,
  };
};

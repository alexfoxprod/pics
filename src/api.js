import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID WYG1jdVsi2nDiWJqO0h-XZBMkIL3e2NsxdyTfyOv7ss",
    },
    params: {
      query: term,
      per_page: 50,
    },
  });
  return response.data.results;
};

export default searchImages;

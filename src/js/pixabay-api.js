import axios from 'axios';

const apiKey = '53042587-5c2e345549771b4d4f5e75931';
const baseUrl = 'https://pixabay.com/api/';

export async function getImagesByQuery(query) {
  const params = {
    key: apiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const response = await axios.get(baseUrl, { params });
  return response.data;
}

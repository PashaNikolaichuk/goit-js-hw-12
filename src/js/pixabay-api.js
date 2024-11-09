import axios from 'axios';

const API_KEY = '46831416-189b424aaa4e35cb9d06aecea';
const BASE_URL = 'https://pixabay.com/api/';

let page = 1;

export async function getImageData(search = '', page = 1) {
  const { data } = await axios(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: search,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
    },
  });
  return data;
}

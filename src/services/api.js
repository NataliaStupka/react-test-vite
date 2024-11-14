import axios from 'axios'; //http запит (замість fetch)

axios.defaults.baseURL = 'http://hn.algolia.com/api/v1';

// async/await (асинхронна функція, чекаємо поки відпрацює запит)
export const fetchArticles = async (query, page) => {
  const response = await axios.get(`/search`, {
    params: { query, page, hitsPerPage: 100 },
  });
  //   console.log('response:', response);
  //   console.log('👈 response.data з api:', response.data);
  //   console.log('data.hits:', response.data.hits);
  return response.data;
};

// `http://hn.algolia.com/api/v1/search?query=${query}&page=${page}&hitsPerPage=100`

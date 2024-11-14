import axios from 'axios'; //http запит (замість fetch)

// async/await (асинхронна функція, чекаємо поки відпрацює запит)
export const fetchArticle = async () => {
  const response = await axios.get(
    'http://hn.algolia.com/api/v1/search?query=react'
  );
  console.log('response:', response);
  console.log('👈 response.data з api:', response.data);
  console.log('data.hits:', response.data.hits);
  return response.data;
};

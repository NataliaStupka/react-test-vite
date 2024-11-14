//components
import Articles from './Articles/Articles';
import Loader from './Loader.jsx/Loader';
import SearchBar from './SearchBar/SearchBar';

import { useEffect, useState } from 'react';

import { fetchArticles } from '../services/api'; //запит
import toast from 'react-hot-toast'; //тостер(повідомлення)

//fetch робимо в useEffect, замість fetch використовуємо axios (resp.data.)
const App = () => {
  const [articles, setArticles] = useState([]); //статті
  const [isLoading, setIsLoading] = useState(false); //Loader(завантажувач)
  const [isError, setIsError] = useState(false); //помилка
  const [query, setQuery] = useState('react'); //поле вводу пошуку
  const [page, setPage] = useState(0); //сторінка
  const [nbPages, setNbPage] = useState(0); //всого сторінок прийшло з бекенду

  //Toster при nbPages === page
  useEffect(() => {
    if (nbPages === page) {
      toast.success('You already download all posts!🦊');
    }
  }, [nbPages, page]);

  useEffect(() => {
    //створюємо функцію getData
    const getData = async () => {
      try {
        setIsLoading(true);
        //обнуляємо все при новому запиті
        setIsError(false);

        //деструктуризація              передаємо занчення і сторінку
        const { hits, nbPages } = await fetchArticles(query, page); //приходить data
        setNbPage(nbPages);
        setArticles(prev => [...prev, ...hits]); // записали в articles те що прийшло (і те що було до цього(load more))
      } catch (error) {
        setIsError(true);

        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query, page]);

  //змінює наш input
  //приходить нове значення
  const handleChangeQuery = query => {
    setArticles([]); // очищає попередні статті при новому запиті
    setQuery(query);
    setPage(0);
    toast.error(' 🐣 Query changed ');
  };

  return (
    <div>
      <h1>HTTP запит, Axios, async/await, pagination</h1>

      <SearchBar onChangeQuery={handleChangeQuery} />
      {/* якщо є що завантажувати */}
      {nbPages > page && (
        <button onClick={() => setPage(prev => prev + 1)}>
          Load more: {page}
        </button>
      )}

      {/* якщо true то показує завантажувач */}
      {isLoading && <Loader />}
      <Articles articles={articles} />
      {isError && <h2>Щось сталось! Онови сторінку або спрбуй пізніше.</h2>}
    </div>
  );
};

export default App;

// замінили на async/await
// useEffect(() => {
//   axios
//     .get('http://hn.algolia.com/api/v1/search?query=react')
//     .then(resp => setArticles(resp.data.hits));
// }, []);

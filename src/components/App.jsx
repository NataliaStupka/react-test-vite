//components
import Articles from './Articles/Articles';
import Loader from './Loader.jsx/Loader';

import { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik'; //форма

import { fetchArticle } from '../services/api'; //запит

//fetch робимо в useEffect, замість fetch використовуємо axios (resp.data.)
const App = () => {
  const [articles, setArticles] = useState([]); //статті
  const [isLoading, setIsLoading] = useState(false); //Loader(завантажувач)
  const [isError, setIsError] = useState(false); //помилка

  useEffect(() => {
    //створюємо функцію getData
    const getData = async () => {
      try {
        setIsLoading(true);
        //обнуляємо все при новому запиті
        setIsError(false);

        //деструктуризація
        const { hits } = await fetchArticle(); //приходить data

        setArticles(hits); // записали в articles те що прийшло
      } catch (error) {
        setIsError(true);

        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h1>HTTP запит, Axios, async/await, pagination</h1>

      {/* якщо true то показує завантажувач */}
      {isLoading && <Loader />}
      <Articles articles={articles} />
      {isError && <h2>Щось сталось! Онови сторінку або спрбуй пізніше.</h2>}

      <Formik>
        <Form>
          <Field />
        </Form>
      </Formik>
      <button>Find</button>
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

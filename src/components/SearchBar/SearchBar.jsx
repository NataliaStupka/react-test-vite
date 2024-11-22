import { Formik, Form, Field } from 'formik';

//компонент SearchBar виводимо на сторінці User
const SearchBar = ({ handleSetQuery }) => {
  const handleSubmit = values => {
    console.log('values:', values);
    handleSetQuery(values.query);
  };

  //початковий стан (об'єкт)
  const initialValue = {
    query: '',
  };

  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValue}>
        <Form>
          <Field name="query" placeholder="Enter username" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;

import { Formik, Form, Field } from 'formik'; //форма

const SearchBar = ({ onChangeQuery }) => {
  //початкові значення
  const initialValues = {
    query: '',
  };
  const handleSubmit = values => {
    console.log('value:', values); // приходить об'єкт
    onChangeQuery(values.query);
  };

  return (
    <div style={{ display: 'flex', marginBottom: '15px' }}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="query" placeholder="Search ..." />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;

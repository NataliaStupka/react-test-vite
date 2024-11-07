//Formik
//обгортка Formik, потім Form. Усі input тепер це Field
//Formik має 2 обов'язкові поля: onSubmit={}, c={}
import { Field, Form, Formik } from 'formik';

const OrderForm = () => {
  const handleSubmit = (values, options) => {
    console.log(values);
  };
  const initialValues = {
    username: '',
    tel: '',
    email: '',
  };

  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <label>
            <span>Ім'я</span>
            <Field type="text" name="username" placeholder="Введіть ім'я" />
          </label>

          <label>
            <span>Телефон</span>
            <Field type="text" name="tel" placeholder="Номер телефону" />
          </label>

          <label>
            <span>Email</span>
            <Field type="email" name="email" placeholder="Email" />
          </label>
          <button type="submit">Order</button>
        </Form>
      </Formik>
    </div>
  );
};

export default OrderForm;

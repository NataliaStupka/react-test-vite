//Formik
//обгортка Formik, потім Form. Усі input тепер це Field
//Formik має 2 обов'язкові поля: onSubmit={}, c={}
// as - textarea, select, всі інші через type
import { Field, Form, Formik } from 'formik';

import s from './OrderForm.module.css';

const OrderForm = () => {
  //values це initialValues
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm(); // очистка форми
    //console.log(options);
  };
  const initialValues = {
    username: '',
    tel: '',
    email: '',
    petType: '',
    desire: '',
    agree: false,
    gender: 'male',
  };

  return (
    <div className={s.wrapper}>
      {/* тег Formik не стилізується*/}
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          {/* input */}
          <label className={s.label}>
            <span>Ім'я</span>
            <Field
              className={s.input}
              type="text"
              name="username"
              placeholder="Введіть ім'я"
            />
          </label>

          <label className={s.label}>
            <span>Телефон</span>
            <Field
              className={s.input}
              type="text"
              name="tel"
              placeholder="Номер телефону"
            />
          </label>

          <label className={s.label}>
            <span>Email</span>
            <Field
              className={s.input}
              type="email"
              name="email"
              placeholder="Email"
            />
          </label>

          {/* textarea */}
          <label className={s.label}>
            <span>Побажання</span>
            <Field
              className={s.input}
              as="textarea"
              name="desire"
              placeholder="Введіть побажання"
            />
          </label>

          {/* select */}
          <label className={s.label}>
            <span>Тип улюбленця</span>
            <Field className={s.input} as="select" name="petType">
              {/* disabled - не можемо обрати */}
              <option disabled value="">
                Оберіть з варіантів:
              </option>
              <option value="cat">Кіт</option>
              <option value="dog">Собака</option>
              <option value="bird">Пташка</option>
              <option value="rodent">Гризун</option>
            </Field>
          </label>

          {/* radiobatton */}
          <div>
            <label>
              <Field
                type="radio"
                value="male"
                className={s.input}
                name="gender"
              />
              <span>Хлопчик</span>
            </label>
            <label>
              <Field
                type="radio"
                value="female"
                className={s.input}
                name="gender"
              />
              <span>Дівчинка</span>
            </label>
          </div>

          {/* checkbox */}
          <label>
            <Field type="checkbox" className={s.input} name="agree" />
            <span>Приймаю всі правила платформи</span>
          </label>

          <button type="submit">Обрати</button>
        </Form>
      </Formik>
    </div>
  );
};

export default OrderForm;

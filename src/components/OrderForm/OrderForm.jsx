//Formik
//обгортка Formik, потім Form. Усі input тепер це Field
//Formik має 2 обов'язкові поля: onSubmit={}, c={}
// as - textarea, select, всі інші через type
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import s from './OrderForm.module.css';

const OrderForm = () => {
  //values це initialValues
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm(); // очистка форми
    //console.log(options);
  };

  //для валідації email (враховує @i.com)
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const orderShema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Поле не може бути менше ніж 3 символи')
      .max(20, 'Поле не може бути більше ніж 20 символів')
      .required("Це поле обов'язкове"),
    email: Yup.string()
      .matches(re, 'Не є емейлом')
      .required("Це поле обов'язкове"),
    range: Yup.number().min(10).max(20),
    tel: Yup.number().required("Це поле обов'язкове"),
    desire: Yup.string().min(3).max(120),
    // прописати oneOf, від взлому. Можна map і передати в oneOf
    petType: Yup.string().oneOf(['cat', 'dog', 'bird', 'rodent']),
  });

  const initialValues = {
    username: '',
    tel: '',
    email: '',
    range: 0,
    petType: '',
    desire: '',
    agree: false,
    gender: 'male',
  };

  return (
    <div className={s.wrapper}>
      {/* тег Formik не стилізується*/}
      <Formik
        validationSchema={orderShema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
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
            <ErrorMessage
              name="username"
              component="span"
              className={s.error}
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
            <ErrorMessage name="tel" component="span" className={s.error} />
          </label>

          <label className={s.label}>
            <span>Email</span>
            <Field
              className={s.input}
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage name="email" component="span" className={s.error} />
          </label>

          {/* range */}
          <label className={s.label}>
            <span>Вік</span>
            <Field className={s.input} type="range" name="range" />
            <ErrorMessage name="range" component="span" className={s.error} />
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
            <ErrorMessage name="desire" component="span" className={s.error} />
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
            <ErrorMessage name="petType" component="span" className={s.error} />
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

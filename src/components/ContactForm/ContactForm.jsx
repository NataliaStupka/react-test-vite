// import { nanoid } from 'nanoid'; //id
// import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

import { useDispatch } from 'react-redux';
//action
import { addContact } from '../../redux/contacts/action';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    console.log('FORM.name:', form.name.value);
    console.log('FORM.number:', form.number.value);

    //виклик функ. addContact(payload) як аргумент payload
    dispatch(
      addContact({
        id: crypto.randomUUID(),
        name: form.elements.name.value,
        number: form.elements.number.value,
      })
    );
    form.reset();
  };

  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit}>
        <label className={s.label}>
          <span>Name</span>
          <input type="text" name="name" placeholder="Enter name..." />
        </label>

        <label className={s.label}>
          <span>Number</span>
          <input type="text" name="number" placeholder="Enter number..." />
        </label>

        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    </div>
  );
};

// ContactForm.prototype = {
//   onAdd: PropTypes.func.isRequired,
// };

export default ContactForm;

//import { Formik, Form, Field, ErrorMessage } from 'formik'; //форма
//import * as Yup from 'yup'; //валідація форми
// // валідация, прописуємо у Formik
// const contactSchema = Yup.object().shape({
//   username: Yup.string()
//     .min(3, 'Too short!')
//     .max(50, 'Поле не може бути більше ніж 50 символи')
//     .required('Required'),
//   tel: Yup.number()
//     .positive('Число має бути додатним')
//     .integer('Число має бути цілим')
//     .required('Required'),
// });
//
//  return (
//    <div className={s.wrapper}>
//      {/* Formik має 2 обов'язкові поля: onSubmit={}, obj={initialValues}, +validationSchema */}
//      <Formik
//        validationSchema={contactSchema}
//        initialValues={initialValues}
//        handleSubmit={handleSubmit}
//      >
//        <Form className={s.form}>
//          <label className={s.label}>
//            <span>Name</span>
//            <Field type="text" name="username" />
//            <ErrorMessage name="username" component="span" className={s.error} />
//          </label>

//          <label className={s.label}>
//            <span>Number</span>
//            <Field type="text" name="tel" />
//            <ErrorMessage name="tel" component="span" className={s.error} />
//          </label>

//          <button type="submit" className={s.button}>
//            Add contact
//          </button>
//        </Form>
//      </Formik>
//    </div>
//  );

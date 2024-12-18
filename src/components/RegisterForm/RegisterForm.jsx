import { Field, Form, Formik } from "formik";
import s from "./RegisterForm.module.css";

import { register } from "../../redux/auth/operation"; //регістрація
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast"; //ЧОМУСЬ НЕ ПРАЦЮЄ ?????

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //unwrap - dispatch дочекається відповіді (для перенаправлення на task)
  //інший варіант if (isLoggedIn) {return <Navigate to="/tasks" />}
  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then((res) => {
        toast(`Welcome ${res.user.name}`);
        navigate("/tasks");
      })
      .catch(() => {
        toast.error("Сталися помилка! Спробуй ще раз.");
      });
    options.resetForm();
  };

  //те що потребує бекенд, те і передаємо
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  return (
    <div className={s.wrapper}>
      <h2>Register</h2>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={s.form}>
          <Field name="name" placeholder="Enter name" />
          <Field name="email" placeholder="Enter email" />
          <Field name="password" type="password" placeholder="Enter pass" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default RegisterForm;

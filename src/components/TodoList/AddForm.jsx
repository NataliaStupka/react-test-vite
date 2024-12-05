import { Field, Form, Formik } from 'formik';
import s from './TodoList.module.css';
import { useDispatch } from 'react-redux';
//import { addTodo } from '../../redux/todoSlice';
import { nanoid } from '@reduxjs/toolkit'; //включений в Redux
import { addTodo } from '../../redux/operations';

export const AddForm = () => {
  const initialValues = { todo: '' };

  const dispatch = useDispatch();

  const onSubmit = (values, options) => {
    //генеруємо нове завдання
    const newTodo = {
      id: nanoid(), //включений в Redux
      todo: values.todo, //з name Field
      completed: false,
    };
    //addTodo з operations.js - запише в бекенді
    dispatch(addTodo(newTodo));
  };

  return (
    <div className={s.addFormWrapper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field className={s.input} name="todo" placeholder="Enter new todo" />
          <button type="submit">Add todo</button>
        </Form>
      </Formik>
    </div>
  );
};

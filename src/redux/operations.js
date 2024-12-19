import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { goitApi } from "./auth/operation";

//з https://mockapi.io/ на goitApi from "./auth/operation";
//todos на tasks
//andpoint
//axios.defaults.baseURL = "https://6750ab5169dc1669ec1bf24f.mockapi.io";

//викликаємо цю функцію в todoList                          // _ це можуть бути дані, але для get дані не потрібні
export const fetchTodos = createAsyncThunk(
  "todos/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await goitApi.get("/tasks");
      return response.data; //ловимо в slice (нижче reducer) через extraReducer
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//так видалиться на бекенді
// використовуємо в Item.js при видаленні todo
//також додаємо у slice addCase
export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id, thunkAPI) => {
    try {
      const response = await goitApi.delete(`/tasks/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//в addForm, а також в slice addCase
export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async (body, thunkAPI) => {
    try {
      const response = await goitApi.post(`/tasks`, body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//put - оновлення об'єкта цілком
//patch - оновлення поля об'єкта
//Item.js
export const editTodo = createAsyncThunk(
  "todos/editTodo",
  async (body, thunkAPI) => {
    try {
      const response = await goitApi.patch(`/tasks/${body.id}`, body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleTodo = createAsyncThunk(
  "todos/toggleTodo",
  async (body, thunkAPI) => {
    try {
      const response = await goitApi.patch(`/tasks/${body.id}`, body);
      console.log("del", body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

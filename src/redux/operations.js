import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//сайт https://mockapi.io/
//andpoint
axios.defaults.baseURL = 'https://6750ab5169dc1669ec1bf24f.mockapi.io';

//викликаємо цю функцію в todoList                          // _ це можуть бути дані, але для get дані не потрібні
export const fetchTodos = createAsyncThunk(
  'todos/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/todos');
      return response.data; //ловимо в slice (нижче reducer) через extraReducer
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

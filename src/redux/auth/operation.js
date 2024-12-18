import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//створюємо окремий axios, працюємо через нього
export const goitApi = axios.create({
  baseURL: "https://task-manager-api.goit.global",
  //baseURL: "https://connections-api.goit.global",
});

//для logout
// використовуємо в місцях де логінемось/реєструємось (для збереження token)
const setAuthHeader = (token) => {
  goitApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
//очищаємо сторінку при logout
const clearAuthHeader = () => {
  goitApi.defaults.headers.common.Authorization = ``;
};

// === РЕГІСТРАЦІЯ ===
//credential - дані входу
export const register = createAsyncThunk(
  "auth/register",
  async (credential, thunkAPI) => {
    try {
      const response = await goitApi.post("/users/signup", credential);
      setAuthHeader(response.data.token); //для збереження token
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// === ЛОГІНІЗАЦИЯ ===
//credential - дані входу
export const login = createAsyncThunk(
  "auth/login",
  async (credential, thunkAPI) => {
    try {
      ///users/signup - маршрут
      const response = await goitApi.post("/users/login", credential);
      setAuthHeader(response.data.token); //для збереження token
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// === LOGOUT ===
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await goitApi.post("/users/logout");
    clearAuthHeader; //обробити це в slice
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// === REFRESH === опрацювати в slice
//ініціалізуємо в App
export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    //thunkAPI.getState() - поверне весь store
    //  const savedToken = thunkAPI.getState();
    //  console.log("STORE:", savedToken);
    const savedToken = thunkAPI.getState().auth.token;
    console.log("STORE:", savedToken);
    if (!savedToken) {
      return thunkAPI.rejectWithValue("Token is not exist!");
    }
    try {
      setAuthHeader(savedToken); // token
      const { data } = await goitApi.get("/users/me"); //запит за токеном
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

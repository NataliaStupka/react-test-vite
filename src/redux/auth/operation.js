import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//створюємо окремий axios, працюємо через нього
export const goitApi = axios.create({
  baseURL: "https://task-manager-api.goit.global",
  //baseURL: "https://connections-api.goit.global",
});

// === РЕГІСТРАЦІЯ ===
//credential - дані входу
export const register = createAsyncThunk(
  "auth/register",
  async (credential, thunkAPI) => {
    try {
      const response = await goitApi.post("/users/signup", credential);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchWeatherData = createAsyncThunk(
  "weather/fetcWeatherData",
  async (city) => {
    const responce = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.latitude}&lon=${city.longitude}&units=metric&lang=tr&appid=${process.env.REACT_APP_API_KEY}`
      //`https://api.openweathermap.org/data/2.5/forecast?q=${city.name}&appid=${process.env.REACT_APP_API_KEY}`
    );
    return responce.data;
  }
);

export const fetchWeatherDataCurrent = createAsyncThunk(
  "weather/fetcWeatherDataCurrent",
  async (city) => {
    const responce = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${city.latitude}&lon=${city.longitude}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      //`https://api.openweathermap.org/data/2.5/forecast?q=${city.name}&appid=${process.env.REACT_APP_API_KEY}`
    );
    return responce.data;
  }
);

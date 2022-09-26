import { createSlice } from "@reduxjs/toolkit";

import {
  fetchWeatherData,
  fetchWeatherDataCurrent,
} from "../../../services/services";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    id: null,
    name: null,
    latitude: null,
    longitude: null,
    population: null,
    region: null,
    data: [],
    current: {},
  },
  reducers: {
    changeCity: (state, action) => {
      state.latitude = action.latitude;
      state.longitude = action.longitude;
    },
  },
  extraReducers: {
    [fetchWeatherData.fulfilled]: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    [fetchWeatherDataCurrent.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

export const { changeCity } = weatherSlice.actions;

export default weatherSlice.reducer;

import { createSlice, current } from "@reduxjs/toolkit";

import {
  fetchWeatherData,
  fetchWeatherDataCurrent,
} from "../../../services/services";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: [],
    dataStatus: "idle",
    current: [],
    currentStatus: "idle",
  },
  reducers: {
    changeCity: (state, action) => {
      state.latitude = action.latitude;
      state.longitude = action.longitude;
    },
  },
  extraReducers: {
    [fetchWeatherData.fulfilled]: (state, action) => {
      state.dataStatus = "succeeded";
      state.data = [...state.data, action.payload];
    },
    [fetchWeatherData.rejected]: (state, action) => {
      state.dataStatus = "failed";
    },
    [fetchWeatherData.pending]: (state, action) => {
      state.dataStatus = "loading";
    },
    [fetchWeatherDataCurrent.fulfilled]: (state, action) => {
      state.currentStatus = "succeeded";
      state.current = [...state.current, action.payload];
    },
    [fetchWeatherDataCurrent.rejected]: (state, action) => {
      state.currentStatus = "failed";
    },
    [fetchWeatherDataCurrent.pending]: (state, action) => {
      state.currentStatus = "loading";
    },
  },
});

export const { changeCity } = weatherSlice.actions;

export default weatherSlice.reducer;

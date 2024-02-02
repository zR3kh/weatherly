import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY

const initialState = {
  isLoading: true,
  city: '',
  temperature: null,
  humidity: null,
  wind: null,
  icon: null
}

export const getWeather = createAsyncThunk( 
  'weather/getWeather',
  async(city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const res = await axios(url)
    const data = await res.data;
    return data
  }
)

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.temperature = action.payload.main.temp;
        state.humidity = action.payload.main.humidity;
        state.wind = action.payload.wind.speed;
        state.city = action.payload.name;
        state.icon = action.payload.weather[0].icon
      })
      .addCase(getWeather.rejected, (state) => {
        state.isLoading = false;
        alert('Something went wrong.')
      })
  }
})

export default weatherSlice.reducer;
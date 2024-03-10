import { configureStore } from '@reduxjs/toolkit'

import weatherReducer from './Weather/WeatherSlice'
import cityReducer from './City/CitySlice'
import gifReducer from './Gif/GifSlice'
import locationReducer from './Location/LocationSlice'

import fetchWeatherEpic from './Weather/WeatherEpics'
import fetchCityEpic from './City/CityEpics'
import fetchGifEpic from './Gif/GifEpics'
import fetchLocationEpic from './Location/LocationEpics'

import { createEpicMiddleware, combineEpics } from 'redux-observable';

const epicMiddleware = createEpicMiddleware();

const rootEpic = combineEpics(fetchCityEpic, fetchGifEpic, fetchWeatherEpic, fetchLocationEpic);

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    city: cityReducer,
    gif: gifReducer,
    location: locationReducer,
  },
  middleware: [epicMiddleware],
})

epicMiddleware.run(rootEpic);
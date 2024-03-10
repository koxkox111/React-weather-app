import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cache: {},

  currentWeatherJson: {},

  currentSearch: '',
  currentCity: '',

  style: -1, // {0 - current, 1 - hourly, 2 - daily}
  isLoading: false,

  currentTemp: 0,
  currentCondition: '',
  currentIcon: '',

  dailyTemp: [0,0,0],
  dailyCondition: ['', '', ''],
  dailyMaxTemp: [0,0,0],
  dailyMinTemp: [0,0,0],
  dailyNiceweather: [0,0,0],
  dailyIcon: ['', '', ''],

  hourlyTemp: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  hourlyCondition: ['', '', '' ,'', '', '' ,'', '', '' ,'', '', '' ,'', '', '' ,'', '', '' ,'', '', '' ,'', '', ''],
  hourlyIcon: ['', '', '' ,'', '', '' ,'', '', '' ,'', '', '' ,'', '', '' ,'', '', '' ,'', '', '' ,'', '', ''],  
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {      
    changeWeatherStyle: (state, action) => {
      if(state.style === -1)
        return
      state.style = action.payload
    },
    changeLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setCurrentSearch: (state, action) => {
      state.currentSearch = action.payload
    },
    setJSON: (state, action) => {
      state.currentWeatherJson = action.payload
    },
    addToCache: (state, action) => {
      const currentCity = action.payload.city;
      const currentData = action.payload.data;
      const cacheData = state.cache[currentCity];
      if(!cacheData)
        state.cache[state.currentSearch] = currentData
    },
    changeCurrentCity: (state) => {
      state.currentCity = state.currentWeatherJson.location.name + ', ' + state.currentWeatherJson.location.country
    },
    changeCurrentTemp: (state) => {
      state.currentTemp = state.currentWeatherJson.current.temp_c
      state.currentCondition = state.currentWeatherJson.current.condition.text
      state.currentIcon = state.currentWeatherJson.current.condition.icon
    },
    changeHourlyTemp: (state) => {
      for(let i = 0; i < 24; i++){
        state.hourlyTemp[i] = (state.currentWeatherJson.forecast.forecastday[0].hour[i].temp_c)
        state.hourlyCondition[i] = (state.currentWeatherJson.forecast.forecastday[0].hour[i].condition.text)
        state.hourlyIcon[i] = (state.currentWeatherJson.forecast.forecastday[0].hour[i].condition.icon)
      }
    },
    changeDailyTemp: (state) => {
      for(let i = 0; i < 3; i++){
        state.dailyTemp[i] = (state.currentWeatherJson.forecast.forecastday[i].day.avgtemp_c)
        state.dailyMaxTemp[i] = (state.currentWeatherJson.forecast.forecastday[i].day.maxtemp_c)
        state.dailyMinTemp[i] = (state.currentWeatherJson.forecast.forecastday[i].day.mintemp_c)
        state.dailyCondition[i] = (state.currentWeatherJson.forecast.forecastday[i].day.condition.text)
        state.dailyIcon[i] = (state.currentWeatherJson.forecast.forecastday[i].day.condition.icon)
      }
    },
    changeDailyNiceWeather: (state) => {
      let points = [0, 0, 0]
      for(let i = 0; i < 3; i++){
        if(state.dailyTemp[i] >= 18 && state.dailyTemp[i] <= 25)
          points[i] += 1
        if(state.dailyMinTemp[i] >= 15 && state.dailyMaxTemp[i] <= 30)
          points[i] += 1
        if(!state.dailyCondition[i].includes('rain') && !state.dailyCondition[i].includes('snow') && !state.dailyCondition[i].includes('storm'))
          points[i] += 1
        if(points[i] === 3){
          state.dailyNiceweather[i] = 'nice'
        }
        else if(points[i] === 2){
          state.dailyNiceweather[i] = 'passable'
        }
        else {
          state.dailyNiceweather[i] = 'not nice'
        }
      }
    },
    checkWeatherStyle: (state) => {
      if(state.style === -1){
        state.style = 0
      }
    },
  },
})

export const { 
  changeWeatherStyle, 
  changeLoading,
  addToCache,
  setCurrentSearch,
  setJSON,
  changeCurrentCity,
  changeCurrentTemp,
  changeDailyNiceWeather,
  changeDailyTemp,
  changeHourlyTemp,
  checkWeatherStyle } = weatherSlice.actions

export default weatherSlice.reducer
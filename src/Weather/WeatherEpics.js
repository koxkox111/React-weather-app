import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, catchError, switchMap, startWith } from 'rxjs/operators';
import axios from 'axios';

import { WeatherLink } from '../config';
import {
  addToCache,
  changeCurrentCity,
  changeCurrentTemp,
  changeDailyNiceWeather,
  changeDailyTemp,
  changeHourlyTemp,
  checkWeatherStyle,
  setCurrentSearch,
  setJSON,
  changeLoading,
} from './WeatherSlice';


const arrayReducers = (data, city) =>{
  return [
    setJSON(data),
    addToCache({ data: data, city: city }),
    changeCurrentCity(),
    changeCurrentTemp(),
    changeHourlyTemp(),
    changeDailyTemp(),
    changeDailyNiceWeather(),
    checkWeatherStyle(),
    changeLoading(false),
  ]
}

const fetchWeatherEpic = (action$, state$) =>
action$.pipe(
  ofType(setCurrentSearch.type),
  mergeMap((action) => {
    const city = action.payload;
    const cahceData = state$.value.weather.cache[city];
    if(cahceData)
      return arrayReducers(cahceData, city)
    return from(axios.get(WeatherLink(city))).pipe(
      switchMap((response) => {
        return arrayReducers(response.data, city)
      }),
      catchError((error) => {
        console.error('error getting weather', error);
        return of(changeLoading(false));
      }),
      startWith(changeLoading(true)),
    );
  
  })
);

export default fetchWeatherEpic;

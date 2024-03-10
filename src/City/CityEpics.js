import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { switchMap, catchError, debounceTime, map } from 'rxjs/operators';
import axios from 'axios';

import { AutoComplLink } from '../config';
import { setAutocompleteList, setCityName } from './CitySlice';

const fetchCityEpic = (action$) =>
  action$.pipe(
    ofType(setCityName.type),
    debounceTime(300),
    switchMap((action) => {
      const char = action.payload;
      if(char.trim() === '')
        return of(setAutocompleteList([]));
      const url = AutoComplLink(char);
      return from(axios.get(url)).pipe(
        map((response) => response.data),
        map((data) => setAutocompleteList(data)),
        catchError((error) => {
          console.error('Error getting city suggestions:', error);
          return of();
        })
      );
    })
  );

export default fetchCityEpic;

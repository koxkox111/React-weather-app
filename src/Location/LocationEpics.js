import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { mergeMap, catchError, startWith } from 'rxjs/operators';
import { setCurrentLocation } from './LocationSlice';
import { setCurrentSearch, changeLoading } from '../Weather/WeatherSlice';

const fetchLocationEpic = (action$, state$) =>
action$.pipe(
  ofType(setCurrentLocation.type),
  mergeMap((action) => {
    const location = state$.value.location.location;
    if (location !== '')
      return of(setCurrentSearch(location));
    return from(
      new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position.coords.latitude + ', ' + position.coords.longitude);
          },
          (error) => {
            console.error('Error getting location', error);
            reject(error);
          }
        );
      })
    ).pipe(
      mergeMap((location) => of(setCurrentLocation(location))),
      catchError(() => of()),
      startWith(changeLoading(true))
    )
  })
);

export default fetchLocationEpic;
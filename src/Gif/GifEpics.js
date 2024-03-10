import { from, timer } from 'rxjs';
import { switchMap, catchError, distinctUntilChanged, filter } from 'rxjs/operators';
import axios from 'axios';

import { GifLink } from '../config';

import { setGifURL, setGifList, setGifError } from './GifSlice';

const fetchGifEpic = (action$, state$) =>
  state$.pipe(
    distinctUntilChanged((prev, curr) => prev.weather.currentCondition === curr.weather.currentCondition),
    filter((state) => state.weather.currentCondition),
    switchMap((state) => {
      const condition = state.weather.currentCondition;
      return from(axios.get(GifLink(condition + ' sky'))).pipe(
        switchMap((response) => {
          const gifs = response.data.results;
          const urls = gifs.map((gif) => gif.media[0].gif.url);
          return timer(0, 30000).pipe(
            switchMap(() => {
              const newIndex = Math.floor(Math.random() * urls.length);
              return [ setGifList(urls), setGifURL(urls[newIndex]) ];
            })
          );
        }),
        catchError((error) => {
          console.error('Error getting gifs:', error);
          return [ setGifError() ];
        })
      );
    })
  );


export default fetchGifEpic;

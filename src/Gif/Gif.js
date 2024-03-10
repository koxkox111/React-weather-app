import React from 'react';
import { useSelector } from 'react-redux';

import { Image, Wrapper } from './Style';

const WeatherGif = () => {
  const condition = useSelector((state) => state.weather.currentCondition);
  const gifURL = useSelector((state) => state.gif.gifURL);
  const gifList = useSelector((state) => state.gif.gifList);
  
  return (
    <Wrapper>
      {gifList.length > 0 && <Image src={gifURL} alt={condition + ' sky'}/>}
    </Wrapper>
  );
};

export default WeatherGif;
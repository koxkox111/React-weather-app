import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { changeWeatherStyle } from './WeatherSlice'

import { CurrentTemp } from './Temperature/CurrentTemp'
import { HourlyTemp } from './Temperature/HourlyTemp'
import { DailyTemp } from './Temperature/DailyTemp'

import { TailSpin } from 'react-loader-spinner';

import WeatherGif from '../Gif/Gif'

import { SpinWrapper, TemperatureWrapper, ButtonWrapper, Button } from './Style'

export function Weather() {
  const chosenCity = useSelector((state) => state.weather.currentCity)
  const isLoading = useSelector((state) => state.weather.isLoading)
  const style = useSelector((state) => state.weather.style)
  const dispatch = useDispatch()

  const componentMap = {
    0: CurrentTemp,
    1: HourlyTemp,
    2: DailyTemp,
  }
  const MergedComponent = componentMap[style]

  return (
    <div>
      <ButtonWrapper>
        <Button onClick={() => dispatch(changeWeatherStyle(0))}>Show current weather </Button>
        <Button onClick={() => dispatch(changeWeatherStyle(1))}>Show hourly weather</Button>
        <Button onClick={() => dispatch(changeWeatherStyle(2))}>Show daily weather</Button>
      </ButtonWrapper>
      {isLoading ? (
        <SpinWrapper>
          <TailSpin/>
        </SpinWrapper>
      ) : (
        <div>
          <h1>{chosenCity}</h1>
          {style !== null && style !== -1 &&
            <TemperatureWrapper>
              <MergedComponent/>
              <WeatherGif/>
            </TemperatureWrapper>
          }
        </div>
      )}
    </div>
  )
}
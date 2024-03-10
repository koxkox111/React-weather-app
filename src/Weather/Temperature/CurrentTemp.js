import React from 'react'
import { useSelector } from 'react-redux'
import { Box,  Container, Temperature, AvgTemp, WeatherInfo  } from './Style'

export function CurrentTemp() {
	const currentTemp = useSelector((state) => state.weather.currentTemp)
	const currentCondition = useSelector((state) => state.weather.currentCondition)
	const currentIcon = useSelector((state) => state.weather.currentIcon)
	const dailyNiceweather = useSelector((state) => state.weather.dailyNiceweather)

	return (
		<Box>
			<Container>
				<Temperature>
					<AvgTemp>{currentTemp}°C</AvgTemp>
				</Temperature>
				<WeatherInfo>
					<p>{currentCondition}</p>
					<img src={currentIcon} alt="icon"/>
				</WeatherInfo>
				<h3>Weather is: {dailyNiceweather[0]}</h3>
			</Container>
		</Box>
	)
}
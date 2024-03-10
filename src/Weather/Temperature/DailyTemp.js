import React from 'react'
import { useSelector } from 'react-redux'
import { Box, Container, Temperature, MinTemp, AvgTemp, MaxTemp, WeatherInfo  } from './Style'


export function DailyTemp() {
	const dailyTemp = useSelector((state) => state.weather.dailyTemp)
	const dailyCondition = useSelector((state) => state.weather.dailyCondition)
	const dailyMaxTemp = useSelector((state) => state.weather.dailyMaxTemp)
	const dailyMinTemp = useSelector((state) => state.weather.dailyMinTemp)
	const dailyNiceweather = useSelector((state) => state.weather.dailyNiceweather)
	const dailyIcon = useSelector((state) => state.weather.dailyIcon)

	return (
		<Box>
			{dailyTemp.map((temp, index) => (
			<Container key={index}>
				<Temperature>
					<MinTemp>{dailyMinTemp[index]}°C</MinTemp>
					<AvgTemp>{temp}°C</AvgTemp>
					<MaxTemp>{dailyMaxTemp[index]}°C</MaxTemp>
				</Temperature>
				<WeatherInfo>
					<p>{dailyCondition[index]}</p>
					<img src={dailyIcon[index]} alt="icon"/>
				</WeatherInfo>
				<p>Weather is: {dailyNiceweather[index]}</p>
			</Container>
			))
			}
		</Box>
	)
}
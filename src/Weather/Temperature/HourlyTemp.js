import React from 'react'
import { useSelector } from 'react-redux'
import { Box, InnerBox, Container, Temperature, AvgTemp, WeatherInfo  } from './Style'

export function HourlyTemp() {
	const hourlyTemp = useSelector((state) => state.weather.hourlyTemp)
	const hourlyCondition = useSelector((state) => state.weather.hourlyCondition)
	const hourlyIcon = useSelector((state) => state.weather.hourlyIcon)

	return (
		<Box>
			<InnerBox>
				{hourlyTemp.map((temp, index) => (
					<Container key={index}>
					<Temperature>
						<AvgTemp>{temp}°C</AvgTemp>
					</Temperature>
						<WeatherInfo>
							<p>{hourlyCondition[index]}</p>
							<img src={hourlyIcon[index]} alt="icon"/>
						</WeatherInfo>
						<p>{index}:00</p>
					</Container>
				))
				}
			</InnerBox>
		</Box>
	)
}
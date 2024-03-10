import styled from 'styled-components'

export const Box = styled.div`
	border: 3px solid ${props => props.theme.primaryColor};
	border-radius: 5px;
	padding: 20px;
	margin: 20px;
	width: 90%;
	height: auto;
	overflow-y: scroll;
	overflow-x: auto;
	display: flex;
	text-align: center;
	justify-content: center;
	align-items: center;
	display: flex;
	justify-content: center;
	align-items: center;
`
export const InnerBox = styled.div`
	display: flex;
	width: 100%;
	overflow-x: auto;
`
export const Container = styled.div`
	height: 300px;
	width: 300px;
	display: flex;
	flex-wrap: nowrap;
	flex-direction: column;
	align-items: center;
	margin: 10px;
	&:hover {
		background-color: ${props => props.theme.hoverColor};
	}
`
export const Temperature = styled.div`
	display: flex;
	justify-content: center;
	align-items: baseline;
	flex-direction: row;
	width: 100%;
`
export const MinTemp = styled.p`
	margin: 0;
	margin-right: 5px;
`

export const AvgTemp = styled.p`
	font-weight: bold;
	font-size: 30px;
	margin: 0;
`
export const MaxTemp = styled.p`
	margin: 0;
	margin-left: 5px;
`
export const WeatherInfo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
`
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentSearch } from '../Weather/WeatherSlice'
import { setCityName, setShowSuggestions } from "./CitySlice";

import { Form, Input, Suggestions, SuggestionItem } from './Style';

export function City() {

	const dispatch = useDispatch()
	const showSugg = useSelector((state) => state.city.showSuggestions);
	const listOfSuggestion = useSelector((state) => state.city.listCity);
	const cityName = useSelector((state) => state.city.name);

	const handleSubmit = (e, city = '', country = '') => {
		e.preventDefault();
		let cityToSubmit = city;
		if(city === '' && country === '')
		cityToSubmit = cityName;
		else 
			cityToSubmit = city + ', ' + country;
		dispatch(setShowSuggestions(false));
		dispatch(setCurrentSearch(cityToSubmit));
	};

	const inputFunction = (e) => {
		dispatch(setCityName(e.target.value));
	}
	
	return (
		<Form onSubmit={(e) => handleSubmit(e)}>
			<Input
				placeholder="Search a location..."
				value={cityName}
				onChange={(e) => inputFunction(e)}/>
			{listOfSuggestion && showSugg && (
				<Suggestions>
				{listOfSuggestion.slice(0, 5).map((item) => (
					<SuggestionItem key={item.id} onClick={(e) => handleSubmit(e, item.name, item.country)}>
						{item.name}, {item.country}
					</SuggestionItem>
					))}
				</Suggestions>
			)}
		</Form>
	)
}
import styled from 'styled-components'


export const Form = styled.form`
	position: relative;
	margin: 20px
`
export const Input = styled.input`
	width: 519px;
	padding: 10px;
	font-size: 16px;
	border: 1px solid
	border-color: ${props => props.theme.primaryColor};
	border-radius: 4px;
	outline: none;
	color: ${props => props.theme.textColor};
	background-color: ${props => props.theme.backgroundColor};
	transition: all 1s ease;
`
export const Suggestions = styled.ul`
	position: absolute;
	top: 100%;
	left: 0;
	width: 520px;
	list-style: none;
	padding: 0;
	margin: 0;
	border: 1px solid;
	border-color: ${props => props.theme.backgroundColor};
	border-top: none;	
`
export const SuggestionItem = styled.li`
	padding: 5px;
	background-color: ${props => props.theme.backgroundColor};
	border-bottom: 1px solid;
	border-color: ${props => props.theme.backgroundColor};
	&:hover {
		background-color: ${props => props.theme.hoverColor};
	}
	transition: all 1s ease;

`
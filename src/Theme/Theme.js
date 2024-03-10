import React, { useState } from 'react'
import styled from 'styled-components';

export const lightTheme = {
  backgroundColor: '#ffffff',
  textColor: '#000000',
  primaryColor: '#ff7f50',
  hoverColor: '#cccccc',
  borderColor: '#000000',
};
  
export const darkTheme = {
  backgroundColor: '#1e1e1e',
  textColor: '#ffffff',
  primaryColor: '#61dafb',
  hoverColor: '#2a2a2a',
  borderColor: '#ffffff',

};

const Button = styled.button`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  position: absolute;
  top: 20px;
  right: 20px;
  &:hover {
    background-color: ${props => props.theme.hoverColor};
  }
  transition: all 1s ease;
`

export function Switch( { toggleTheme, isDarkTheme} ) {
  const [isToggleOn, setIsToggleOn] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggleOn(!isToggleOn);
    toggleTheme();
  }

  return (
    <Button onClick={onToggle}>
      Change theme
    </Button>
  )
}


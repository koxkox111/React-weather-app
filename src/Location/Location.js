import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentLocation } from './LocationSlice'
import styled from 'styled-components'

const Button = styled.button`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  &:hover {
    background-color: ${props => props.theme.hoverColor};
  }
  top: 60px;
  right: 20px;
  position: absolute;
  transition: all 1s ease;
`

export function Location() {
  const dispatch = useDispatch()

  return (
    <Button onClick={() => dispatch(setCurrentLocation(''))}>Show current location</Button>
  )
}
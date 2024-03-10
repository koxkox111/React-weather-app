import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
export const Button = styled.button`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  &:hover {
    background-color: ${props => props.theme.hoverColor};
  }
  transition: all 1s ease;
`
export const SpinWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`
export const TemperatureWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-left: 20px;
  `
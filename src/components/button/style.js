import styled from 'styled-components';

export const Container =  styled.button`
  width: 100%;

  align-items: center;
  background-color: ${({theme}) => theme.COLORS.ORANGE};
  color: black;
  padding: 16px;
  border: none;
  border-radius: 8px;
  margin: 16px 0;
  &:disabled{
    opacity: 0.5;
  }
`


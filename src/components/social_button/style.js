import styled from 'styled-components'

export const Component = styled.button`
  background: none;
  border: none;

  transition: transform 0.5s, filter 0.5s;
  background: none;
  
  &:hover{
    transform: scale(1.1);
    filter: drop-shadow(0px 0px 20px ${({theme}) => theme.COLORS.RED});
  }
  img {
    background: none;
    width: 100%;
  }
`
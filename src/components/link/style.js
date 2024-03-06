import styled from "styled-components";

export const Component =
    styled.a`
    
      display: inline-block;
      text-decoration: underline;
      font-size: 16px;

      transition: transform  0.5s, background-color 0.5s;

      margin: 6px;
      padding: 0 8px;
      
      text-transform: uppercase;


      &:hover{
        background-color: ${({theme}) => theme.COLORS.RED};
        color: ${({theme}) => theme.COLORS.BACKGROUND};
        transform: scale(1.1);

        border-radius: 2px;
      }
    `

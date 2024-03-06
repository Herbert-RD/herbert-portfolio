import styled from "styled-components";

export const Component =
    styled.a`
    
      display: inline-block;
      text-decoration: underline;
      font-size: 16px;

      transition: transform  0.5s, background-color 0.5s;

      margin: 6px;

      padding: 0 8px;


      &:hover{
        background-color: white;
        color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        transform: scale(1.2);

        border-radius: 2px;
      }
    `

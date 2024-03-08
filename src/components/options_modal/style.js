import styled from 'styled-components';

export const Component = styled.div`

  width: 100%;
  height: 100%;

  background-color: rgb(0, 0, 0, 0.8);
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: white;

  #modal {
    position: absolute;

    top: 20px;

    display: flex;
    flex-direction: column;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
    text-transform: uppercase;
    text-decoration: underline;
    width: 80%;

    border-radius: 2px;
  }
  
  #modal a {
    color: ${({theme}) => theme.COLORS.WHITE};
    text-decoration: none;

    padding: 20px 10px;
    border-top: black solid 4px;
  }

  #button-wrapper {
    background-color: none;
    padding: 10px 10px;

    display: flex;
    justify-content: end;
  }

  #button-wrapper button {
    border: none;
    background: none;

    display: flex;
    justify-content: center;
    align-items: center;

  }
`
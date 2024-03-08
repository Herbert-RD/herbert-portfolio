import styled from 'styled-components';

export const Component = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 28px 0;

  > h2 {
    text-decoration: underline;
  }

  > .clients-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 24px;
    
    margin: 28px 0;
  }

  > .clients-wrapper button, .clients-wrapper button img {
    background: none;
    border: none;
    
    width: 100%;
    max-width: 40vw;

    transition: transform 0.5s, filter 0.5s;
  }

  > .clients-wrapper button:hover{
    transform: scale(1.2);
    filter: drop-shadow(0px 0px 13px rgba(110, 110, 110, 0.5));

  }
`
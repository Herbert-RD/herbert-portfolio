import styled from 'styled-components';

export const Component = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8vw;
  gap: 2.5vw;
  justify-content: center;
  align-items: center;
  
  .about-side{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  .about-side p{
    font-size: 18px;
  }

  .about-side p:first-child {
    color: ${({theme}) => theme.COLORS.RED}
  }

  .about-side h1 {
    font-size: 8vw;
    text-transform: uppercase;
    font-weight: 900;
  }

  .image-side img {
    width: 90%;
    margin: 0 auto;
    text-align: center;
    display: flex;
    align-items: center;
  }

  .socials {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 25px;
  }
`
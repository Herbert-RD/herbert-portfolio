import styled from 'styled-components';


export const Container = styled.div`
  #nav-links {
    display: flex;
    flex-direction: row;
    gap: 2.5vw;
  }



  .header-nav{
    display: flex;
    align-content: center;
    justify-content: space-between;
    align-items: center;

    padding: 0 66px;
    margin-top: 22px;
    width: 100%;
  }
  .header-nav p {
    font-weight: bold;
    font-size: 32px;
  }

  .header-nav p a {
    text-decoration: none;
    color: ${({theme}) => theme.COLORS.WHITE};
  }
`


import styled from 'styled-components';

export const StyledPocemonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  min-height: calc(100vh - 140px);
  max-width: 1280px;
  width: 100%;
  

  .image-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
      padding-top: 20px;
    }
    img{
      width: 200px;
      height: 200px;
    }
  }

  .abilities{
    padding-top: 50px;
    display: flex;
    flex-direction: column;
  }

  .abilitie{
    padding-top: 20px;
  }

  .moves{
    margin-top: 49px;
    display: flex;
    flex-direction: column;
    max-height: 200px;
    max-width: 150px;
    overflow: auto;
  }

  .move{
    padding-top: 20px;
  }

  .container{
    max-width: 500px;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

import styled from 'styled-components';

export const StyledMainPageContainer = styled.div`
  min-height: calc(100vh - 140px);
  padding-top: 20px;
  box-sizing: border-box;

  .pocemon-item{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 60px 20px;
  }
`;

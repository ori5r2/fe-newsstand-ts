import styled from 'styled-components';
import GridEntireTemplate from './Grid/GridEntire';
import NavBar from './NavBar';

function MainNewsTemplate() {
  return (
    <StyledMainNewsTemplate>
      <NavBar />
      <GridEntireTemplate />
    </StyledMainNewsTemplate>
  );
}

const StyledMainNewsTemplate = styled.div`
  ${({ theme }) => theme.flex.flexCenterCol}
`;

export default MainNewsTemplate;

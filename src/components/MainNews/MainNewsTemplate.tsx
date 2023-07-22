import styled from 'styled-components';
import GridEntireTemplate from './Grid/GridEntire';

function MainNewsTemplate() {
  return (
    <StyledMainNewsTemplate>
      <div>네비게이션 바</div>
      <GridEntireTemplate />
    </StyledMainNewsTemplate>
  );
}

const StyledMainNewsTemplate = styled.div`
  ${({ theme }) => theme.common.flexCenterCol}
`;

export default MainNewsTemplate;

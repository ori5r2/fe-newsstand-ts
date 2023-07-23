import styled from 'styled-components';
import Title from './Title';
import TodaysDate from './TodaysDate';

function HeaderTemplate() {
  return (
    <StyledHeaderTemplate className="header">
      <Title />
      <TodaysDate />
    </StyledHeaderTemplate>
  );
}

const StyledHeaderTemplate = styled.div`
  ${({ theme }) => theme.flex.flexBetween};
  width: inherit;
  margin-bottom: 40px;
`;

export default HeaderTemplate;

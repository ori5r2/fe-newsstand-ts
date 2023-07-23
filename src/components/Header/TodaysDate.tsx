import styled from 'styled-components';

type numOption = 'numeric' | '2-digit' | undefined;
type strOption = 'long' | 'short' | 'narrow' | undefined;
interface dateOption {
  year?: numOption;
  month?: numOption | strOption;
  day?: numOption;
  weekday?: strOption;
}

function TodaysDate() {
  const date: Date = new Date();
  const options: dateOption = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    weekday: 'long',
  };

  return (
    <StyledDate className="header-date">
      {date.toLocaleDateString('ko-kr', options)}
    </StyledDate>
  );
}

const StyledDate = styled.div`
  ${({ theme }) => theme.fontSize.display_medium16};
`;

export default TodaysDate;

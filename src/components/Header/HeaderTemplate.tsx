import styled from 'styled-components';

function HeaderTemplate() {
  return (
    <StyledHeaderTemplate>
      <div>뉴스스탠드</div>
      <div>날짜</div>
    </StyledHeaderTemplate>
  );
}

const StyledHeaderTemplate = styled.div`
  ${({ theme }) => theme.common.flexBetween};
  width: inherit;
`;

export default HeaderTemplate;

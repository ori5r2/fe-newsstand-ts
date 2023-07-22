import styled from 'styled-components';

function GridEntireTemplate() {
  return (
    <StyledGridEntireTemplate>
      <button>왼쪽 화살표</button>
      <div>메인 뉴스 화면</div>
      <button>오른쪽 화살표</button>
    </StyledGridEntireTemplate>
  );
}

const StyledGridEntireTemplate = styled.div`
  ${({ theme }) => theme.common.flexCenterRow}
`;

export default GridEntireTemplate;

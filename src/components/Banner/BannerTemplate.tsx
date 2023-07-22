import styled from 'styled-components';

function BannerTemplate() {
  return (
    <StyledBannerTemplate>
      <div>배너1</div>
      <div>배너2</div>
    </StyledBannerTemplate>
  );
}

const StyledBannerTemplate = styled.div`
  ${({ theme }) => theme.common.flexBetween};

  width: inherit;
`;

export default BannerTemplate;

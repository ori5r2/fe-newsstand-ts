import { styled } from 'styled-components';
import Icon from '@components/Common/Icon';
import newspaper from '@assets/icons/newspaper.svg';

function Title() {
  return (
    <StyledTitle className="header-title">
      <Icon src={newspaper} alt="newspaper-icon" />
      <div>뉴스스탠드</div>
    </StyledTitle>
  );
}

const StyledTitle = styled.div`
  ${({ theme }) => theme.flex.flexCenterRow};
  ${({ theme }) => theme.fontSize.bold24};
  gap: 8px;
`;

export default Title;

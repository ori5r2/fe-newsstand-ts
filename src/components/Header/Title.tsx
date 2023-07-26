import { styled } from 'styled-components';
import Icon from '@components/Common/Icon';
import newspaper from '@assets/icons/newspaper.svg';

function Title() {
  return (
    <StyledTitle className="header-title">
      <Icon src={newspaper} alt="newspaper-icon" $size="big" />
      <div>뉴스스탠드</div>
    </StyledTitle>
  );
}

const StyledTitle = styled.div`
  ${({ theme }) => `
    ${theme.flex.flex_center_row};
    ${theme.fontSize.bold24};
    ${theme.colorLightSystem.text_strong};
  `}
  gap: 8px;
`;

export default Title;

import { styled } from 'styled-components';
import { RollingNews } from './BannerInterface';
import NewsHeaderList from './NewsHeaderList';

function Banner({ rolling_data, is_right }: { rolling_data: RollingNews; is_right: boolean }) {
  return (
    <StyledBanner className="banner-item">
      <StylePressName>{rolling_data.press_name}</StylePressName>
      <NewsHeaderList news_data={rolling_data.news_header} is_right={is_right} />
    </StyledBanner>
  );
}

const StyledBanner = styled.div`
  ${({ theme }) => `
    ${theme.flex.flex_center_row};
    ${theme.colorLightSystem.border_default};
    ${theme.colorLightSystem.surface_alt};
  `}
  gap: 16px;
  padding: 0 16px;
`;

const StylePressName = styled.div`
  ${({ theme }) => `
    ${theme.fontSize.bold14};
    ${theme.colorLightSystem.text_strong};
  `};
`;

export default Banner;

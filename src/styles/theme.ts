import { DefaultTheme } from 'styled-components';

const colors = {
  grayscale_100: '#d2dae0',
  grayscale_black: '#14212b',
  blue_500: '#4362d0',
  blue_100: '#7890e7',
  grayscale_500: '#4b5966',
  grayscale_400: '#5f6e76',
  grayscale_300: '#6e8091',
  grayscale_200: '#879298',
  grayscale_50: '#f5f7f9',
  grayscale_white: '#ffffff',
  grayscale_white_alt: 'rgba(255, 255, 255, 0.7)',
};

const fontSize = {
  bold24: `
  font-size:24px;
  font-weight:700;
  color: ${colors.grayscale_black};
  `,
  bold16: `
  font-size:16px;
  font-weight:700;
  color: ${colors.grayscale_black};
  `,
  bold14: `
  font-size:14px;
  font-weight:700;
  color: ${colors.grayscale_black};
  `,
  bold12: `
  font-size:14px;
  font-weight:700;`,

  available_medium16: `
  font-size:16px;
  font-weight:500;
  color: ${colors.grayscale_200};
  `,
  display_medium16: `
  font-size:16px;
  font-weight:500;
  color: ${colors.grayscale_400};
  `,
  medium16_hover: `
  font-size:16px;
  font-weight:500;
  text-decoration-line:underline;`,
  medium14: `
  font-size:14px;
  font-weight:500;
  color: ${colors.grayscale_400}
  `,
  medium14_hover: `
  font-size:16px;
  font-weight:500;
  text-decoration-line:underline;`,
  medium12: `
  font-size:12px;
  font-weight:500;
  color: ${colors.grayscale_200};
  `,
};

const flex = {
  flexDefault: `
  display: flex;
  align-items:center;
  `,
  flexCenterCol: `
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  `,
  flexCenterRow: `
  display:flex;
  justify-content:center;
  align-items:center;
  `,
  flexBetween: `
  display:flex;
  justify-content:space-between;
  `,
};

const border = {
  default: `border: 1px solid ${colors.grayscale_100};`,
  border_tl: `
  border-top: 1px solid ${colors.grayscale_100};
  border-left: 1px solid ${colors.grayscale_100};
  `,
};

const backgroundColor = {
  surfaceAlt: ` background-color: ${colors.grayscale_50};`,
  surfaceDefault: ` background-color: ${colors.grayscale_white};`,
};

const hover = {
  text_deco: ` &:hover {
    text-decoration: underline;
  }
  `,
};

export type Colors = typeof colors;
export type FontSize = typeof fontSize;
export type Flex = typeof flex;
export type Border = typeof border;
export type BackgroundColor = typeof backgroundColor;
export type Hover = typeof hover;

const theme: DefaultTheme = {
  colors,
  fontSize,
  flex,
  border,
  backgroundColor,
  hover,
};

export default theme;

import { DefaultTheme } from 'styled-components';

const colors = {
  grayscale_black: '#14212b',
  grayscale_500: '#4b5966',
  grayscale_400: '#5f6e76',
  grayscale_300: '#6e8091',
  grayscale_200: '#879298',
  grayscale_100: '#d2dae0',
  grayscale_50: '#f5f7f9',
  grayscale_white: '#ffffff',
  grayscale_white_alt: 'rgba(255, 255, 255, 0.7)',
  blue_500: '#4362d0',
  blue_100: '#7890e7',
};

const colorLightSystem = {
  text_strong: `color: ${colors.grayscale_black};`,
  text_bold: `color: ${colors.grayscale_500};`,
  text_default: `color: ${colors.grayscale_400};`,
  text_weak: `color: ${colors.grayscale_200};`,
  text_white_default: `color: ${colors.grayscale_white};`,
  text_white_weak: `color: ${colors.grayscale_white_alt};`,
  text_point: `color: ${colors.blue_500};`,
  surface_default: `background-color: ${colors.grayscale_white};`,
  surface_alt: `background-color: ${colors.grayscale_50};`,
  surface_brand_default: `background-color: ${colors.blue_500};`,
  surface_brand_alt: `background-color: ${colors.blue_100};`,
  border_bold: `border: 1px solid ${colors.grayscale_300};`,
  border_default: `border: 1px solid ${colors.grayscale_100};`,
};

const fontSize = {
  bold24: `
  font-size:24px;
  font-weight:700;
  `,
  bold16: `
  font-size:16px;
  font-weight:700;
  `,
  bold14: `
  font-size:14px;
  font-weight:700;
  `,
  bold12: `
  font-size:14px;
  font-weight:700;`,
  medium16: `
  font-size:16px;
  font-weight:500;
  `,
  medium14: `
  font-size:14px;
  font-weight:500;
  `,
  medium12: `
  font-size:12px;
  font-weight:500;
  `,
};

const flex = {
  flex_default: `
  display: flex;
  align-items:center;
  `,
  flex_center_col: `
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  `,
  flex_center_row: `
  display:flex;
  justify-content:center;
  align-items:center;
  `,
  flex_between: `
  display:flex;
  justify-content:space-between;
  `,
};

const hover = {
  text_deco: `
  &:hover {
    text-decoration: underline;
  }
  `,
};

export type Colors = typeof colors;
export type ColorLightSystem = typeof colorLightSystem;
export type FontSize = typeof fontSize;
export type Flex = typeof flex;
export type Hover = typeof hover;

const theme: DefaultTheme = {
  colors,
  colorLightSystem,
  fontSize,
  flex,
  hover,
};

export default theme;

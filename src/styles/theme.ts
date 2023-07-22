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
  font-weight:700;`,
  bold16: `
  font-size:16px;
  font-weight:700;`,
  bold14: `
  font-size:14px;
  font-weight:700;`,
  bold12: `
  font-size:14px;
  font-weight:700;`,

  medium16: `
  font-size:16px;
  font-weight:500;`,
  medium16_hover: `
  font-size:16px;
  font-weight:500;
  text-decoration-line:underline;`,
  medium14: `
  font-size:14px;
  font-weight:500;`,
  medium14_hover: `
  font-size:16px;
  font-weight:500;
  text-decoration-line:underline;`,
  medium12: `
  font-size:16px;
  font-weight:500;`,
};

const common = {
  flex: `display: flex;`,
  flexCenter: `
  display:flex;
  justify-content:center;
  align-items:center;
  `,
};
const theme: DefaultTheme = {
  colors,
  fontSize,
  common,
};
export default theme;
import { styled } from 'styled-components';

type IconType = 'small' | 'big';

const Icon = styled.img<{ $size: IconType }>`
  width: ${({ $size }) => ($size === 'small' ? 12 : 24)}px;
  height: ${({ $size }) => ($size === 'small' ? 12 : 24)}px;
`;

export default Icon;

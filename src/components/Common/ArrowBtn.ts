import { styled } from 'styled-components';
import leftArrowBtn from '@assets/icons/left_arrow_btn.svg';
import rightArrowBtn from '@assets/icons/right_arrow_btn.svg';

const ArrowBtn = styled.button<{ $is_right: boolean; $is_visible: boolean }>`
  width: 25px;
  height: 40px;
  background-image: ${(props) => (props.$is_right ? `url(${rightArrowBtn})` : `url(${leftArrowBtn})`)};
  visibility: ${(props) => !props.$is_visible && 'hidden'};
`;

export default ArrowBtn;

import Icon from './Icon';
import plus from '@assets/icons/plus.svg';
import closed from '@assets/icons/closed.svg';
import styled from 'styled-components';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps {
  id: number;
  is_subscribe: boolean;
}

type Props = ButtonProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps>;

function SubscribeBtn({ id, is_subscribe, ...restProps }: Props) {
  return (
    <StyledButton {...restProps}>
      <Icon $size="small" src={is_subscribe ? closed : plus} alt="plus-icon" />
      {is_subscribe ? '해지하기' : '구독하기'}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${({ theme }) => `
    ${theme.flex.flex_center_row};
    ${theme.colorLightSystem.border_default};
    ${theme.colorLightSystem.surface_default};
    ${theme.fontSize.medium12};
    ${theme.colorLightSystem.text_weak}
  `}

  padding: 0px 6px;
  height: 24px;
  gap: 2px;
  border-radius: 50px;
`;

export default SubscribeBtn;

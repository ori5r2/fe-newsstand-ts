import Icon from './Icon';
import plus from '@assets/icons/plus.svg';
import closed from '@assets/icons/closed.svg';
import styled from 'styled-components';

interface Props {
  id: number;
  is_subscribe: boolean;
  onClick(): void;
}

function SubscribeBtn({ id, is_subscribe, onClick }: Props) {
  const handleClick = () => {
    onClick();
  };

  return (
    <StyledButton onClick={handleClick}>
      <Icon $size="small" src={is_subscribe ? closed : plus} alt="plus-icon" />
      {is_subscribe ? '해지하기' : '구독하기'}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  ${({ theme }) => theme.flex.flexCenterRow}
  ${({ theme }) => theme.border.default}
  ${({ theme }) => theme.backgroundColor.surfaceDefault}
  ${({ theme }) => theme.fontSize.medium12}

  padding: 0px 6px;
  height: 24px;
  gap: 2px;
  border-radius: 50px;
`;

export default SubscribeBtn;

import styled from 'styled-components';
import Icon from '@components/Common/Icon';
import list_view from '@assets/icons/list_view.svg';
import grid_view from '@assets/icons/grid_view.svg';
import { useEffect, useReducer } from 'react';
import type { ModeType, NavBarProps } from './MainInterface';
import theme from '@styles/theme';

type Action = { type: 'CLICK_SUB' } | { type: 'CLICK_ENTIRE' } | { type: 'CLICK_GRID' } | { type: 'CLICK_LIST' };

function reducer(state: ModeType, action: Action): ModeType {
  switch (action.type) {
    case 'CLICK_SUB':
      return { ...state, is_subscribe_view: true };
    case 'CLICK_ENTIRE':
      return { ...state, is_subscribe_view: false };
    case 'CLICK_GRID':
      return { ...state, is_grid_view: true };
    case 'CLICK_LIST':
      return { ...state, is_grid_view: false };
    default:
      throw new Error('Main Nav Bar error');
  }
}

function NavBar({ changeMode }: NavBarProps) {
  const [state, dispatch] = useReducer(reducer, { is_subscribe_view: false, is_grid_view: true });

  const onClickEntire = () => dispatch({ type: 'CLICK_ENTIRE' });
  const onClickSub = () => dispatch({ type: 'CLICK_SUB' });
  const onClickGrid = () => dispatch({ type: 'CLICK_GRID' });
  const onClickList = () => dispatch({ type: 'CLICK_LIST' });

  useEffect(() => {
    changeMode(state);
  }, [state]);

  return (
    <StyledNavBar>
      <StyledNavBarLeft>
        <StyledTapBtn $is_clicked={!state.is_subscribe_view} onClick={onClickEntire}>
          전체 언론사
        </StyledTapBtn>
        <StyledTapBtn $is_clicked={state.is_subscribe_view} onClick={onClickSub}>
          내가 구독한 언론사
        </StyledTapBtn>
      </StyledNavBarLeft>
      <StyledNavBarRight>
        <StyledIcon
          src={list_view}
          alt="list_view_icon"
          $size="big"
          $is_clicked={!state.is_grid_view}
          onClick={onClickList}
        />
        <StyledIcon
          src={grid_view}
          alt="grid_view_icon"
          $size="big"
          $is_clicked={state.is_grid_view}
          onClick={onClickGrid}
        />
      </StyledNavBarRight>
    </StyledNavBar>
  );
}

const StyledNavBar = styled.div`
  ${({ theme }) => theme.flex.flex_between};
  width: inherit;
  margin-bottom: 24px;
`;

const StyledNavBarLeft = styled.div`
  ${({ theme }) => `
    ${theme.flex.flex_center_row};
    ${theme.fontSize.medium16};
    ${theme.colorLightSystem.text_weak};
  `};
  gap: 24px;
`;

// TODO: theme 불러오는 방법?
const StyledTapBtn = styled.div<{ $is_clicked: boolean }>`
  ${({ theme, $is_clicked }) =>
    $is_clicked &&
    `
    ${theme.colorLightSystem.text_strong};
    ${theme.fontSize.bold16};
  `}
`;

const StyledNavBarRight = styled.div`
  ${({ theme }) => theme.flex.flex_center_row};
  gap: 8px;
`;

const StyledIcon = styled(Icon)<{ $is_clicked: boolean }>`
  filter: ${(props) =>
    props.$is_clicked && 'invert(49%) sepia(83%) saturate(5417%) hue-rotate(218deg) brightness(87%) contrast(85%)'};
`;

export default NavBar;

import styled from 'styled-components';
import Icon from '@components/Common/Icon';
import list_view from '@assets/icons/list_view.svg';
import grid_view from '@assets/icons/grid_view.svg';
import { useReducer } from 'react';

type Action = { type: 'CLICK_SUB' } | { type: 'CLICK_ENTIRE' } | { type: 'CLICK_GRID' } | { type: 'CLICK_LIST' };
type State = {
  is_sub: boolean;
  is_grid: boolean;
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'CLICK_SUB':
      return { ...state, is_sub: true };
    case 'CLICK_ENTIRE':
      return { ...state, is_sub: false };
    case 'CLICK_GRID':
      return { ...state, is_grid: true };
    case 'CLICK_LIST':
      return { ...state, is_grid: false };
    default:
      throw new Error('Main Nav Bar error');
  }
}

function NavBar() {
  const [state, dispatch] = useReducer(reducer, { is_sub: false, is_grid: true });

  const onClickEntire = () => dispatch({ type: 'CLICK_ENTIRE' });
  const onClickSub = () => dispatch({ type: 'CLICK_SUB' });
  const onClickGrid = () => dispatch({ type: 'CLICK_GRID' });
  const onClickList = () => dispatch({ type: 'CLICK_LIST' });

  return (
    <StyledNavBar>
      <StyledNavBarLeft>
        <StyledTapBtn $is_clicked={!state.is_sub} onClick={onClickEntire}>
          전체 언론사
        </StyledTapBtn>
        <StyledTapBtn $is_clicked={state.is_sub} onClick={onClickSub}>
          내가 구독한 언론사
        </StyledTapBtn>
      </StyledNavBarLeft>
      <StyledNavBarRight>
        <StyledIcon src={list_view} alt="list_view" $is_clicked={!state.is_grid} onClick={onClickList} />
        <StyledIcon src={grid_view} alt="grid_view" $is_clicked={state.is_grid} onClick={onClickGrid} />
      </StyledNavBarRight>
    </StyledNavBar>
  );
}

const StyledNavBar = styled.div`
  ${({ theme }) => theme.flex.flexBetween};
  width: 100%;
`;

const StyledNavBarLeft = styled.div`
  ${({ theme }) => theme.flex.flexCenterRow};
  ${({ theme }) => theme.fontSize.available_medium16};
  gap: 24px;
`;

// TODO: theme 불러오는 방법?
const StyledTapBtn = styled.div<{ $is_clicked: boolean }>`
  color: ${(props) => props.$is_clicked && '#14212b'};
  font-weight: ${(props) => props.$is_clicked && '700'};
`;

const StyledNavBarRight = styled.div`
  ${({ theme }) => theme.flex.flexCenterRow};
  gap: 8px;
`;

const StyledIcon = styled(Icon)<{ $is_clicked: boolean }>`
  filter: ${(props) =>
    props.$is_clicked && 'invert(49%) sepia(83%) saturate(5417%) hue-rotate(218deg) brightness(87%) contrast(85%)'};
`;

export default NavBar;

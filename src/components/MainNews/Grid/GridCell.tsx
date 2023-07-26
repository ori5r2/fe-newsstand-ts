import SubscribeBtn from '@components/Common/SubscribeBtn';
import type { GridCellProps } from './GridInterface';
import { styled } from 'styled-components';
import { useEffect, useReducer } from 'react';

type Action =
  | { type: 'MOUSE_OVER' }
  | { type: 'MOUSE_OUT' }
  | { type: 'CLICK_BTN' }
  | { type: 'SET_SUBSCRIBE'; payload: boolean };

type State = {
  id: number;
  is_hover: boolean;
  is_subscribe: boolean;
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'MOUSE_OVER':
      return { ...state, is_hover: true };
    case 'MOUSE_OUT':
      return { ...state, is_hover: false };
    case 'CLICK_BTN':
      return { ...state, is_subscribe: !state.is_subscribe };
    case 'SET_SUBSCRIBE':
      return { ...state, is_subscribe: action.payload };
    default:
      throw new Error('grid cell action error');
  }
}

function GridCell({ press_info, sub_list, setSubList, is_right, is_bottom }: GridCellProps) {
  const [state, dispatch] = useReducer(reducer, { id: press_info.id, is_hover: false, is_subscribe: false });

  const onMouseOver = () => dispatch({ type: 'MOUSE_OVER' });
  const onMouseOut = () => dispatch({ type: 'MOUSE_OUT' });
  const onClick = () => {
    const new_list = state.is_subscribe ? sub_list.filter((id) => id !== press_info.id) : [...sub_list, press_info.id];
    setSubList(new_list);
    dispatch({ type: 'CLICK_BTN' });
  };
  const setState = (state: boolean) => dispatch({ type: 'SET_SUBSCRIBE', payload: state });

  useEffect(() => {
    sub_list.includes(press_info.id) && setState(true);
  }, [sub_list]);

  return (
    <StyledGridCell $is_right={is_right} $is_bottom={is_bottom} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <div>
        {state.is_hover ? (
          <SubscribeBtn id={press_info.id} is_subscribe={state.is_subscribe} onClick={onClick} />
        ) : (
          <img src={require(`@assets/logo/${press_info.light_src}`)} alt={press_info.name} />
        )}
      </div>
    </StyledGridCell>
  );
}

const StyledGridCell = styled.li<{ $is_right?: boolean; $is_bottom?: boolean }>`
  ${({ theme }) => `
    ${theme.flex.flex_center_row};
    ${theme.colorLightSystem.border_default};
  `};

  border-right: ${(props) => props.$is_right && 'none'};
  border-bottom: ${(props) => props.$is_bottom && 'none'};

  list-style-type: none;
  &:hover {
    ${({ theme }) => theme.colorLightSystem.surface_alt}
  }
`;

export default GridCell;

import styled from 'styled-components';
import NavBar from './NavBar';
import GridEntireTemplate from './Grid/GridEntireTemplate';
import GridSubscribeTemplate from './Grid/GridSubscribeTemplate';
import ListEntireTemplate from './List/ListEntireTemplate';
import ListSubscribeTemplate from './List/ListSubscribeTemplate';
import { useState } from 'react';
import type { ModeType, ModeState } from './MainInterface';
import { grid_entire_state, grid_subscribe_state, list_entire_state, list_subscribe_state } from './MainInterface';

function MainNewsTemplate() {
  const [mode, setMode] = useState<ModeState>(grid_entire_state);

  const changeMode = ({ is_subscribe_view, is_grid_view }: ModeType) => {
    if (!is_subscribe_view && is_grid_view) setMode(grid_entire_state);
    else if (is_subscribe_view && is_grid_view) setMode(grid_subscribe_state);
    else if (!is_subscribe_view && !is_grid_view) setMode(list_entire_state);
    else if (is_subscribe_view && !is_grid_view) setMode(list_subscribe_state);
    else throw new Error('change mode error');
  };

  return (
    <StyledMainNewsTemplate>
      <NavBar changeMode={changeMode} />
      <GridEntireTemplate mode={mode.is_grid_entire} />
      <GridSubscribeTemplate mode={mode.is_grid_subscribe} />
      <ListEntireTemplate mode={mode.is_list_entire} />
      <ListSubscribeTemplate mode={mode.is_list_subscribe} />
    </StyledMainNewsTemplate>
  );
}

const StyledMainNewsTemplate = styled.div`
  ${({ theme }) => theme.flex.flex_center_col}
  width: inherit;
`;

export default MainNewsTemplate;

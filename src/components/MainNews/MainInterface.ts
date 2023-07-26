export type ModeType = {
  is_subscribe_view: boolean;
  is_grid_view: boolean;
};

export interface NavBarProps {
  changeMode: ({ is_subscribe_view, is_grid_view }: ModeType) => void;
}

export type ModeState = {
  is_grid_entire: boolean;
  is_grid_subscribe: boolean;
  is_list_entire: boolean;
  is_list_subscribe: boolean;
};

const grid_entire_state: ModeState = {
  is_grid_entire: true,
  is_grid_subscribe: false,
  is_list_entire: false,
  is_list_subscribe: false,
};

const grid_subscribe_state: ModeState = {
  is_grid_entire: false,
  is_grid_subscribe: true,
  is_list_entire: false,
  is_list_subscribe: false,
};

const list_entire_state: ModeState = {
  is_grid_entire: false,
  is_grid_subscribe: false,
  is_list_entire: true,
  is_list_subscribe: false,
};

const list_subscribe_state: ModeState = {
  is_grid_entire: false,
  is_grid_subscribe: false,
  is_list_entire: false,
  is_list_subscribe: true,
};

export { grid_entire_state, grid_subscribe_state, list_entire_state, list_subscribe_state };

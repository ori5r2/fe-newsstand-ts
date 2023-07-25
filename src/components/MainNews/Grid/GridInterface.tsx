export interface PressInfo {
  id: number;
  name: string;
  light_src: string;
  dark_src: string;
}

export interface GridCellProps {
  press_info: PressInfo;
  sub_list: number[];
  setSubList: (new_list: number[]) => void;
  is_right?: boolean;
  is_bottom?: boolean;
}

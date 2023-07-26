import { press_list } from '../pressListData';
import GridTemplate from './GridTemplate';

function GridEntireTemplate({ mode }: { mode: boolean }) {
  return <GridTemplate mode={mode} press_info_list={press_list} />;
}

export default GridEntireTemplate;

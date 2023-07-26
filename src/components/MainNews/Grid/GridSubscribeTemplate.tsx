import GridTemplate from './GridTemplate';
import { press_list } from '../pressListData';

function GridSubscribeTemplate({ mode }: { mode: boolean }) {
  const localStore = localStorage.getItem('subscribe_list');
  const localDataIdx: number[] = localStore && JSON.parse(localStore);
  const localPressList = press_list.filter((press) => localDataIdx.includes(press.id));

  return <GridTemplate mode={mode} press_info_list={localPressList} />;
}

export default GridSubscribeTemplate;

import styled from 'styled-components';
import ArrowBtn from '@components/Common/ArrowBtn';
import GridCell from './GridCell';
import { press_list } from '@components/MainNews/pressListData';
import { useEffect, useState } from 'react';

const COL_SIZE = 4;
const ROW_SIZE = 6;
const TOTAL_SIZE = COL_SIZE * ROW_SIZE;
const MAX_PAGE = Math.ceil(press_list.length / TOTAL_SIZE);

function GridEntireTemplate() {
  const [pageNum, setPageNum] = useState<number>(0);
  const [subList, setSubList] = useState<number[]>([]);

  const onClickLeftBtn = () => {
    pageNum >= 0 && setPageNum(pageNum - 1);
  };
  const onClickRightBtn = () => {
    pageNum < MAX_PAGE && setPageNum(pageNum + 1);
  };

  const setSubListFunc = (new_list: number[]) => {
    setSubList(new_list);
    localStorage.setItem('subscribe_list', JSON.stringify(new_list));
  };

  const drawCell = (idx: number) => {
    if (idx === 23) return [true, true];
    else if (idx % ROW_SIZE === ROW_SIZE - 1) return [true, false];
    else if (Array.from({ length: ROW_SIZE }, (v, i) => ROW_SIZE * (COL_SIZE - 1) + i).includes(idx))
      return [false, true];

    return [false, false];
  };

  useEffect(() => {
    const localStore = localStorage.getItem('subscribe_list');
    const localData: number[] = localStore && JSON.parse(localStore);
    localData ? setSubList(localData) : setSubList([]);
  }, []);

  return (
    <StyledGridEntireTemplate>
      <ArrowBtn $is_right={false} onClick={onClickLeftBtn} $is_visible={pageNum ? true : false} />
      <StyledMainNews>
        {press_list.slice(pageNum * TOTAL_SIZE, (pageNum + 1) * TOTAL_SIZE).map((press, key) => {
          const [is_right, is_bottom] = drawCell(key);
          return (
            <GridCell
              press_info={press}
              sub_list={subList}
              setSubList={setSubListFunc}
              key={key}
              is_right={is_right}
              is_bottom={is_bottom}
            />
          );
        })}
        {pageNum === MAX_PAGE - 1 &&
          Array.from(
            { length: MAX_PAGE * TOTAL_SIZE - press_list.length },
            (v, i) => press_list.length - TOTAL_SIZE * (MAX_PAGE - 1) + i,
          ).map((key) => {
            const [is_right, is_bottom] = drawCell(key);
            return <StyledEmptyGrid key={key} $is_right={is_right} $is_bottom={is_bottom} />;
          })}
      </StyledMainNews>
      <ArrowBtn $is_right={true} onClick={onClickRightBtn} $is_visible={pageNum !== MAX_PAGE - 1 ? true : false} />
    </StyledGridEntireTemplate>
  );
}

const StyledGridEntireTemplate = styled.div`
  ${({ theme }) => theme.flex.flexCenterRow}
`;

const StyledMainNews = styled.div`
  width: 930px;
  height: 388px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  margin: auto 48px;
`;

const StyledEmptyGrid = styled.div<{ $is_right?: boolean; $is_bottom?: boolean }>`
  ${({ theme }) => theme.border.border_tl};

  border-right: ${(props) => props.$is_right && `1px solid #d2dae0`};
  border-bottom: ${(props) => props.$is_bottom && `1px solid #d2dae0`};
`;

export default GridEntireTemplate;

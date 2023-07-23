import { NewsHeader } from './BannerInterface';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const LIST_HEIGHT: number = 49;
const ROLLING_TIME: number = 5000;
const SYNC_TIME: number = 1000;

interface StyledProps {
  $id: number;
  $list_num: number;
}
type transitionType = 'transform 1s ease' | 'transform 0s ease';

function NewsHeaderList({ news_data, is_right }: { news_data: NewsHeader[]; is_right: boolean }) {
  const [idx, setIdx] = useState<number>(0);
  const idxRef = useRef<number>(0);
  const [interval, startInterval] = useState<ReturnType<typeof setInterval>>();

  const handleMouseOver = () => {
    clearInterval(interval);
  };

  const handleMouseOut = () => {
    startInterval(
      setInterval(() => {
        idxRef.current = (idxRef.current + 1) % 5;
        setIdx(idxRef.current);
      }, ROLLING_TIME),
    );
  };

  useEffect(() => {
    if (!is_right) {
      handleMouseOut();
    } else {
      setTimeout(() => {
        handleMouseOut();
      }, SYNC_TIME);
    }
  }, []);

  return (
    <StyledList className="banner-news">
      {news_data.map((news_content, key) => {
        return (
          <StyledListContent className="banner-news-contents" key={key} $id={idx} $list_num={key}>
            <StyledLink href={news_content.url} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
              {news_content.title}
            </StyledLink>
          </StyledListContent>
        );
      })}
    </StyledList>
  );
}

const StyledList = styled.ul`
  height: ${LIST_HEIGHT}px;
  overflow: hidden;
  padding: 0;
`;

const StyledListContent = styled.li<StyledProps>`
  ${({ theme }) => theme.fontSize.medium14};
  ${({ theme }) => theme.flex.flexDefault};

  width: 359px; //??
  height: ${LIST_HEIGHT}px;
  padding: 0;
  transform: translateY(${(props) => getTranslateY(props)}px);
  transition: ${(props) => getTransition(props)};
`;

const StyledLink = styled.a`
  ${({ theme }) => theme.hover.text_deco};
`;

const getTranslateY = (props: StyledProps): number => {
  if (props.$id - props.$list_num <= -3) return LIST_HEIGHT * -(5 + props.$id);
  else if (props.$id - props.$list_num >= 3) return LIST_HEIGHT * (5 - props.$id);
  else return LIST_HEIGHT * -1 * props.$id;
};

const getTransition = (props: StyledProps): transitionType => {
  switch (props.$id) {
    case 0:
      return props.$list_num === 2 ? 'transform 0s ease' : 'transform 1s ease';
    case 1:
      return props.$list_num === 3 ? 'transform 0s ease' : 'transform 1s ease';
    case 2:
      return props.$list_num === 4 ? 'transform 0s ease' : 'transform 1s ease';
    case 3:
      return props.$list_num === 0 ? 'transform 0s ease' : 'transform 1s ease';
    case 4:
      return props.$list_num === 1 ? 'transform 0s ease' : 'transform 1s ease';
    default:
      throw new Error('STYLE ERROR');
  }
};

export default NewsHeaderList;

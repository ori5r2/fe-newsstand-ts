import styled from 'styled-components';
import Banner from './Banner';
import { RollingNews } from './BannerInterface';
import { useEffect, useReducer } from 'react';
import { rolling_news_data_left, rolling_news_data_right } from './RollingNewsData';

type Action = { type: 'LOAD' };

const initValue = {
  press_name: '',
  news_header: [{ title: '', url: '' }],
};

function reducer(state: RollingNews[], action: Action): RollingNews[] {
  switch (action.type) {
    case 'LOAD':
      return [rolling_news_data_left, rolling_news_data_right];
    default:
      throw new Error('Banner Action error');
  }
}

function BannerTemplate() {
  const [state, dispatch] = useReducer(reducer, [initValue, initValue]);

  useEffect(() => {
    dispatch({ type: 'LOAD' });
  }, []);

  return (
    <StyledBannerTemplate className="banner">
      <Banner rolling_data={state[0]} is_right={false} />
      <Banner rolling_data={state[1]} is_right={true} />
    </StyledBannerTemplate>
  );
}

const StyledBannerTemplate = styled.div`
  ${({ theme }) => theme.flex.flex_between};
  width: inherit;
  margin-bottom: 32px;
  gap: 8px;
`;

export default BannerTemplate;

import styled from 'styled-components';
import HeaderTemplate from './components/Header/HeaderTemplate';
import BannerTemplate from './components/Banner/BannerTemplate';
import MainNewsTemplate from './components/MainNews/MainNewsTemplate';

function App() {
  return (
    <StyledApp>
      <HeaderTemplate />
      <BannerTemplate />
      <MainNewsTemplate />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  ${({ theme }) => theme.flex.flexCenterCol};
  width: 930px;
`;

export default App;

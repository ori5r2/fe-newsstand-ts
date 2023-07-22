import styled from 'styled-components';

function App() {
  return <StyledDiv>Hello world</StyledDiv>;
}

const StyledDiv = styled.div`
  ${({ theme }) => theme.common.bold24};
`;

export default App;

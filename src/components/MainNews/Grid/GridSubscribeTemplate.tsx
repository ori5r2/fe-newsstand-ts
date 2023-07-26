import styled from 'styled-components';
import ArrowBtn from '@components/Common/ArrowBtn';

function GridSubscribeTemplate({ mode }: { mode: boolean }) {
  return (
    <StyledGridSubscribeTemplate $mode={mode}>
      <ArrowBtn $is_right={false} $is_visible={true} />
      grid subscribe
      <ArrowBtn $is_right={true} $is_visible={true} />
    </StyledGridSubscribeTemplate>
  );
}

const StyledGridSubscribeTemplate = styled.div<{ $mode: boolean }>`
  ${({ theme }) => theme.flex.flex_center_row}
  display: ${({ $mode }) => !$mode && 'none'};
`;

export default GridSubscribeTemplate;

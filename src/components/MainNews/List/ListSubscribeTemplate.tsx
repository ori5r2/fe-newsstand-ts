import styled from 'styled-components';
import ArrowBtn from '@components/Common/ArrowBtn';

function ListSubscribeTemplate({ mode }: { mode: boolean }) {
  return (
    <StyledListSubscribeTemplate $mode={mode}>
      <ArrowBtn $is_right={false} $is_visible={true} />
      list subscribe
      <ArrowBtn $is_right={true} $is_visible={true} />
    </StyledListSubscribeTemplate>
  );
}

const StyledListSubscribeTemplate = styled.div<{ $mode: boolean }>`
  ${({ theme }) => theme.flex.flex_center_row}
  display: ${({ $mode }) => !$mode && 'none'};
`;

export default ListSubscribeTemplate;

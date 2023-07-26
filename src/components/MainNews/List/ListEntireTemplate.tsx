import styled from 'styled-components';
import ArrowBtn from '@components/Common/ArrowBtn';

function ListEntireTemplate({ mode }: { mode: boolean }) {
  return (
    <StyledListEntireTemplate $mode={mode}>
      <ArrowBtn $is_right={false} $is_visible={true} />
      list entire
      <ArrowBtn $is_right={true} $is_visible={true} />
    </StyledListEntireTemplate>
  );
}

const StyledListEntireTemplate = styled.div<{ $mode: boolean }>`
  ${({ theme }) => theme.flex.flex_center_row}
  display: ${({ $mode }) => !$mode && 'none'};
`;

export default ListEntireTemplate;

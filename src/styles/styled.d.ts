import 'styled-components';
import type { Colors, FontSize, Flex, Border, BackgroundColor, Hover } from './theme.ts';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    fontSize: FontSize;
    flex: Flex;
    border: Border;
    backgroundColor: BackgroundColor;
    hover: Hover;
  }
}

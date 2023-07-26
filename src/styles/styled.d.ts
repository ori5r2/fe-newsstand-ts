import 'styled-components';
import type { Colors, ColorLightSystem, FontSize, Flex, Hover } from './theme.ts';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    colorLightSystem: ColorLightSystem;
    fontSize: FontSize;
    flex: Flex;
    hover: Hover;
  }
}

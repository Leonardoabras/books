import 'styled-components';
import COLORS from '@/config/styles/colors';
import FONTS from '@/config/styles/fonts';
declare module 'styled-components' {
  type COLOR_TYPE = typeof COLORS;
  type FONTS_TYPE = typeof FONTS;
  export interface DefaultTheme {
    colors: COLOR_TYPE;
    fonts: FONTS_TYPE;
  }
}

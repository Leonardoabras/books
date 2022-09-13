import 'styled-components';
import COLORS from '../config/styles/colors';
declare module 'styled-components' {
  type COLOR_TYPE = typeof COLORS;
  export interface DefaultTheme {
    colors: COLOR_TYPE;
  }
}

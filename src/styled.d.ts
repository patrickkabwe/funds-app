import { ThemeInterface } from 'constants';

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeInterface {}
}

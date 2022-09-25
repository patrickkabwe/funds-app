import * as styledComponents from 'styled-components/native';

import { ThemeInterface } from 'constants';

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<ThemeInterface>;

export { css, ThemeProvider };
export default styled;

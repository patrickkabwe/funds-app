import { colors } from './colors';
import { fontSizes, fonts } from './fonts';
import { spacing } from './spacing';

export interface ThemeInterface {
  colors: typeof colors;
  fonts: typeof fonts;
  fontSize: typeof fontSizes;
  spacing: typeof spacing;
}

export const generics = {
  spacing,
  fonts,
  fontSize: {
    ...fontSizes,
  },
};

export const theme = {
  light: {
    colors: {
      primary: colors.primary,
      lightPrimary: colors.lightPrimary,
      secondary: colors.secondary,
      lightGray: colors.lightGray,
      danger: colors.danger,
      success: colors.success,
      transparent: 'transparent',
      white: colors.white,
      neutralBlack: colors.black,
      gradient: colors.gradient,
      black: colors.black,
    },
    ...generics,
  },

  dark: {
    colors: {
      primary: colors.primaryDark,
      lightPrimary: colors.lightPrimary,
      secondary: colors.secondaryDark,
      lightGray: colors.lightGray,
      danger: colors.danger,
      success: colors.success,
      transparent: 'transparent',
      white: colors.white,
      neutralBlack: colors.black,
      gradient: colors.gradient,
      black: colors.black,
    },
    ...generics,
  },
};

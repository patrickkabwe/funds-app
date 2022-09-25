import { fonts } from 'constants/fonts';

export interface CustomTextProps {
  size?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | 'xxl'
    | 'xxxl';
  color?: string;

  light?: boolean;
  fw?: keyof typeof fonts;
  lineHeight?: number;
}

export interface TextProps {
  color?: string;
  fw?: keyof typeof fonts;
}

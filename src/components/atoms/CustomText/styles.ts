import styled from 'styled-components/native';
import { TextProps } from './types';

export const Text = styled.Text<TextProps>`
  color: ${({ color }) => color};
  font-family: ${({ theme, fw }) => theme.fonts[fw || 'normal']};
`;

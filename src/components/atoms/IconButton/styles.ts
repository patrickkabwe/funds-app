import styled from 'styled-components/native';

export const IconButtonContainer = styled.Pressable<{ hasBg: boolean }>`
  padding: ${props => props.theme.spacing.xs}px;
  border-radius: ${props => props.theme.spacing.sm}px;
  background-color: ${props =>
    props.hasBg
      ? props.theme.colors.lightPrimary
      : props.theme.colors.transparent};
`;

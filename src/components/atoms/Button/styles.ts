import styled from 'lib/styled-components';

export const ButtonContainer = styled.Pressable<{
  variant: 'outline' | 'secondary';
}>`
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.spacing.xs}px;
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  height: 55px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, variant }) => {
    if (variant === 'outline') {
      return theme.colors.transparent;
    }
    return theme.colors.primary;
  }};

  border: 1px solid
    ${({ theme, variant }) => {
      if (variant === 'outline') {
        return theme.colors.lightGray;
      }
      return theme.colors.transparent;
    }};
`;

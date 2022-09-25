import styled from 'lib/styled-components';

export const TextInput = styled.TextInput<{ error: boolean }>`
  border-width: 1px;
  padding-horizontal: ${({ theme }) => theme.spacing.sm}px;
  padding-vertical: ${({ theme }) => theme.spacing.md}px;
  border-radius: ${({ theme }) => theme.spacing.xs}px;
  font-size: ${({ theme }) => theme.fontSize.lg}px;
  margin-vertical: ${({ theme }) => theme.spacing.sm}px;
  border-color: ${({ theme, error }) =>
    error ? theme.colors.danger : theme.colors.lightGray};
`;

import styled from 'styled-components/native';

export const ListItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing.sm}px;
`;

export const ListItemLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ListItemLeftInner = styled.View`
  margin-left: ${props => props.theme.spacing.sm}px;
`;

export const ListItemRight = styled.View``;

export const ListIconContainer = styled.View`
  padding: ${props => props.theme.spacing.sm}px;
  border-radius: ${props => props.theme.spacing.xs + 2}px;
  background-color: #f2f2f2;
`;

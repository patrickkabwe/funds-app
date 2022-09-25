import styled from 'styled-components/native';

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`;

export const HomeHeader = styled.View`
  background-color: ${props => props.theme.colors.primary};
  flex: 0.25;
  padding: ${props => props.theme.spacing.md}px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;
export const HomeHeaderInner = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const HomeHeaderLeft = styled.View``;

export const HomeHeaderRight = styled.View``;

export const HomeMain = styled.View`
  flex: 0.75;
  margin-top: ${props => props.theme.spacing.xl * 5}px;
`;

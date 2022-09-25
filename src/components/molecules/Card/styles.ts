import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const CardContainer = styled.View`
  padding: ${props => props.theme.spacing.md}px;
  border-radius: ${props => props.theme.spacing.sm}px;
  overflow: hidden;
  margin-top: ${props => props.theme.spacing.xl}px;
  box-shadow: 0px 0px 100px rgba(0, 0, 0, 1);
  elevation: 20;
  background-color: ${props => props.theme.colors.primary};
  z-index: 1000;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${props => props.theme.spacing.xl}px;
`;

export const CardIconTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const CardTitleContainer = styled.View<{ alignItems?: string }>`
  align-items: ${props => props.alignItems || 'flex-start'};
  justify-content: center;
`;

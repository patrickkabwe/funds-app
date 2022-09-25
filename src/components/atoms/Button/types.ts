import { PressableProps } from 'react-native';

export interface ButtonProps extends PressableProps {
  label?: string;
  color?: string;
  loading?: boolean;
  variant?: 'outline' | 'secondary';
}

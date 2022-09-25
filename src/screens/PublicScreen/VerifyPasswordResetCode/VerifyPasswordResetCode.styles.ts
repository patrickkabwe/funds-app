import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PublicRootStackParamList } from 'navigator/navigatorTypes';

export type VerifyPasswordResetCodeScreenNavigationProp = {
  navigation: NativeStackNavigationProp<
    PublicRootStackParamList,
    'VerifyResetCode'
  >;
};

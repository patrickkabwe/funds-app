import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PublicRootStackParamList } from 'navigator/navigatorTypes';

export type ForgotPasswordScreenNavigationProp = {
  navigation: NativeStackNavigationProp<
    PublicRootStackParamList,
    'ForgotPassword'
  >;
};

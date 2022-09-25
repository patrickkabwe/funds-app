import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PublicRootStackParamList } from 'navigator/navigatorTypes';

export type NewPasswordScreenNavigationProp = {
  navigation: NativeStackNavigationProp<
    PublicRootStackParamList,
    'NewPassword'
  >;
};

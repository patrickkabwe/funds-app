import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PublicRootStackParamList } from 'navigator/navigatorTypes';
import { LoginMutationInput } from '../Login/types';

export interface RegisterMutationInput extends LoginMutationInput {
  name: string;
}

export type RegisterScreenNavigationProp = {
  navigation: NativeStackNavigationProp<PublicRootStackParamList, 'Register'>;
};

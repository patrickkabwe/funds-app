import { Platform } from 'react-native';

let BASE_URL = 'http://127.0.0.1:8000/graphql';

if (__DEV__) {
  if (Platform.OS === 'android') {
    BASE_URL = 'http://10.0.2.2:8000/graphql';
  }
} else {
  BASE_URL = 'https://api.example.com/graphql';
}

export { BASE_URL };

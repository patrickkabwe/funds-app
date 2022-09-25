import AsyncStorage from '@react-native-async-storage/async-storage';
import { GetTokenIntrface } from 'config/asyncStorage/types';

export const USER_TOKEN = 'userToken';
export const GET_STARTED_TOKEN = 'getStartedToken';
export const DEVICE_TOKEN = 'deviceToken';
export const DEVICE_PAYLOAD = 'devicePayload';

export const saveToken = async (key: string, value: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      return resolve(await AsyncStorage.setItem(key, JSON.stringify(value)));
    } catch (error) {
      return reject(error);
    }
  });
};

export const getToken: GetTokenIntrface = async key => {
  return new Promise(async (resolve, reject) => {
    try {
      return resolve(JSON.parse((await AsyncStorage.getItem(key)) as string));
    } catch (error) {
      return reject(error);
    }
  });
};

export const removeToken = async (key: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      return resolve(await AsyncStorage.removeItem(key));
    } catch (error) {
      return reject(error);
    }
  });
};

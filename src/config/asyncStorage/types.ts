import {
  DEVICE_PAYLOAD,
  DEVICE_TOKEN,
  GET_STARTED_TOKEN,
  USER_TOKEN,
} from 'config/asyncStorage';

export type GetTokenIntrface = (
  key:
    | typeof USER_TOKEN
    | typeof GET_STARTED_TOKEN
    | typeof DEVICE_TOKEN
    | typeof DEVICE_PAYLOAD,
) => Promise<string | null>;

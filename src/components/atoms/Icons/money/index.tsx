import React, { FC } from 'react';
import { View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { IconProps } from '../types';

const renderIcon = (color = 'white') => `
<svg width="11" height="18" viewBox="0 0 11 18" fill="${color}" xmlns="http://www.w3.org/2000/svg">
<path d="M5.48 7.9C3.21 7.31 2.48 6.7 2.48 5.75C2.48 4.66 3.49 3.9 5.18 3.9C6.96 3.9 7.62 4.75 7.68 6H9.89C9.82 4.28 8.77 2.7 6.68 2.19V0H3.68V2.16C1.74 2.58 0.18 3.84 0.18 5.77C0.18 8.08 2.09 9.23 4.88 9.9C7.38 10.5 7.88 11.38 7.88 12.31C7.88 13 7.39 14.1 5.18 14.1C3.12 14.1 2.31 13.18 2.2 12H0C0.12 14.19 1.76 15.42 3.68 15.83V18H6.68V15.85C8.63 15.48 10.18 14.35 10.18 12.3C10.18 9.46 7.75 8.49 5.48 7.9Z" fill="black"/>
</svg>
`;

export const MoneyIcon: FC<IconProps> = ({ size }) => {
  return (
    <View style={{ width: size, height: size }}>
      <SvgXml xml={renderIcon()} width="100%" height="100%" />
    </View>
  );
};

export default MoneyIcon;

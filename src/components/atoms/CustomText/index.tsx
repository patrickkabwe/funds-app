import { TextProps } from 'react-native';
import React, { FC } from 'react';
import { CustomTextProps } from './types';
import { Text } from './styles';

const CustomText: FC<TextProps & CustomTextProps> = props => {
  const { lineHeight = 26 } = props;
  const setFontSize = () => {
    switch (props.size) {
      case 'xxs':
        return 9;
      case 'xs':
        return 12;
      case 'sm':
        return 14;
      case 'md':
        return 16;
      case 'lg':
        return 18;
      case 'xl':
        return 20;
      case '2xl':
        return 24;
      case 'xxl':
        return 26;
      case '3xl':
        return 28;
      default:
        return 35;
    }
  };

  return (
    <Text
      {...props}
      style={[
        props.style,
        // eslint-disable-next-line react-native/no-inline-styles
        {
          fontSize: setFontSize(),
          lineHeight: lineHeight,
        },
      ]}>
      {props.children}
    </Text>
  );
};

export default CustomText;

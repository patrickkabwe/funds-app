import React, { FC } from 'react';
import { View } from 'react-native';

const Spacer: FC<{ height?: number; marginLeft?: number }> = props => {
  return (
    <View
      style={{
        height: props.height || 10,
        marginLeft: props.marginLeft || 5,
      }}
    />
  );
};

export default Spacer;

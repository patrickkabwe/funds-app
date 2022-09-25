import React, { FC, PropsWithChildren } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { IconButtonContainer } from './styles';
import { IconButtonProps } from './types';

const IconButton: FC<
  PropsWithChildren<{
    name: IconButtonProps;
    onPress?: () => void;
    size?: number;
    hasBg?: boolean;
  }>
> = ({ name, size = 30, onPress, hasBg = true }) => {
  return (
    <IconButtonContainer hasBg={hasBg} onPress={onPress}>
      <Icon name={name} size={size} color="white" />
    </IconButtonContainer>
  );
};

export default IconButton;

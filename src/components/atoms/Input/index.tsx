import React, { FC } from 'react';
import CustomText from 'components/atoms/CustomText';
import { TextInput } from './styles';
import { InputProps } from './types';

const Input: FC<InputProps> = props => {
  return (
    <>
      {props.label && <CustomText size="md">{props.label}</CustomText>}
      <TextInput {...props} autoCapitalize="none" error={props.error} />
    </>
  );
};

export default Input;

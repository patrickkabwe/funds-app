import React, { FC, type PropsWithChildren } from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  StyleSheet,
} from 'react-native';

const KeyboardAvoidingContainer: FC<
  PropsWithChildren<KeyboardAvoidingViewProps>
> = ({ children }) => {
  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.select({ ios: 60, android: 30 })}
      behavior={Platform.select({ ios: 'padding', android: 'height' })}
      style={style.container}>
      {children}
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default KeyboardAvoidingContainer;

import { StyleSheet } from 'react-native';
import React, { FC } from 'react';
import CustomText from 'components/atoms/CustomText';
import { ErrorTextProps } from 'components/atoms/ErrorText/types';
import { spacing } from 'constants/spacing';

const ErrorText: FC<ErrorTextProps> = ({ message }) => {
  return (
    <CustomText size="xs" color="danger" style={styles.errorText}>
      {message}
    </CustomText>
  );
};

const styles = StyleSheet.create({
  errorText: {
    marginBottom: spacing.sm,
  },
});

export default ErrorText;

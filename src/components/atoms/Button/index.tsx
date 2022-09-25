import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import CustomText from 'components/atoms/CustomText';
import { ButtonProps } from 'components/atoms/Button/types';
import LottieView from 'lottie-react-native';
import { ButtonContainer } from './styles';
import { useTheme } from 'styled-components';

const Button: FC<ButtonProps> = props => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { label, loading, accessibilityRole: _, ...rest } = props;
  const theme = useTheme();
  return (
    <ButtonContainer
      disabled={loading}
      variant={rest.variant || 'secondary'}
      {...rest}>
      {loading ? (
        <View style={styles.loader}>
          <LottieView
            source={require('resources/loaders/loader2.json')}
            autoPlay
            loop
            resizeMode="cover"
          />
        </View>
      ) : (
        <CustomText color={theme.colors.white} size="md">
          {label || 'Submit'}
        </CustomText>
      )}
    </ButtonContainer>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    width: '50%',
  },
});

export default Button;

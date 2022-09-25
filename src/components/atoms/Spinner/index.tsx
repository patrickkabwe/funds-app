import React, { FC } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from 'constants/colors';

type Props = {
  fullPage?: boolean;
  size?: number;
};

const Spinner: FC<Props> = ({ fullPage, size = 50 }) => {
  return (
    <View style={fullPage ? styles.container : {}}>
      <ActivityIndicator size={size} color={colors.TERTIARY} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.WHITE,
    zIndex: 999,
  },
});

export default Spinner;

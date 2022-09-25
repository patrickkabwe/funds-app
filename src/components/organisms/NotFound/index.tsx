import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CustomText from 'components/atoms/CustomText';
import { PRIMARY_COLOR } from 'theme/colors';

const NotFound: FC<{
  message: string;
}> = ({ message }) => {
  return (
    <View style={styles.container}>
      <FontAwesome name="dollar" size={50} color={PRIMARY_COLOR} />
      <CustomText size="md" color="gray" style={styles.text}>
        {message}
      </CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  text: {
    textAlign: 'center',
    width: '40%',
    marginTop: 20,
  },
});

export default NotFound;

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { FC, useEffect } from 'react';
import { AppProps } from './App.types';
import CustomText from 'components/atoms/CustomText';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { DrawerHeaderProps } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';

const AppBar: FC<AppProps & DrawerHeaderProps> = ({
  options,
  route,
  navigation,
}) => {
  const [title, setTitle] = React.useState('');

  const handleDrawerNavigate = () => {
    navigation.openDrawer();
  };

  useEffect(() => {
    if (options && route) {
      const headerTitle = getHeaderTitle(options, route?.name);
      setTitle(headerTitle);
    }
  }, [options, route]);

  return (
    <View style={styles.appBarContainer}>
      <TouchableOpacity onPress={handleDrawerNavigate}>
        <SimpleLineIcons name="menu" size={25} />
      </TouchableOpacity>

      <CustomText size={'xl'} style={styles.title}>
        {title}
      </CustomText>
      <View />
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  appBarContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    marginLeft: -20,
  },
});

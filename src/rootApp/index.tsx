import React, { FC, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { PrivateNavigator } from 'navigator/PrivateNavigator';
import { PublicNavigator } from 'navigator/PublicNavigator';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { inject, observer } from 'mobx-react';
import Spinner from 'components/atoms/Spinner';
import { RootAppProps } from 'rootApp/types';
import { VERIFY_TOKEN } from 'graphql/auth';
import { getToken, removeToken } from 'config/asyncStorage';
import { ThemeProvider } from 'lib/styled-components';
import { theme, ThemeInterface } from 'constants';
import { ThemeEnum } from 'store/theme';

const RootApp: FC<RootAppProps> = ({ store }): JSX.Element => {
  const [verifyToken, { loading }] = useMutation(VERIFY_TOKEN, {
    onCompleted: data => {
      store?.userStore?.setInitialLoading(false);
      store?.userStore?.setUser(data.verifyToken);
    },
    onError: errors => {
      store?.userStore?.setInitialLoading(false);
      store?.userStore?.setUser(null);
      console.log('errors', JSON.stringify(errors));
      removeToken('userToken');
    },
  });

  useEffect(() => {
    (async () => {
      const accessToken = await getToken('userToken');
      if (!accessToken) {
        store?.userStore?.setInitialLoading(false);
        return;
      }
      verifyToken({
        variables: {
          accessToken,
        },
      });
    })();
  }, [store?.userStore, verifyToken]);

  return (
    <ThemeProvider
      theme={
        store?.themeStore?.theme === ThemeEnum.LIGHT
          ? (theme.light as unknown as ThemeInterface)
          : (theme.dark as unknown as ThemeInterface)
      }>
      <SafeAreaView style={styles.safe}>
        {store?.userStore?.initialLoading || loading ? (
          <Spinner fullPage />
        ) : (
          <>
            {store?.userStore?.currentUser ? (
              <PrivateNavigator />
            ) : (
              <PublicNavigator />
            )}
          </>
        )}
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
});

export default inject('store')(observer(RootApp));

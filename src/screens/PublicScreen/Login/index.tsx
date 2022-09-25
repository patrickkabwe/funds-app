import { View, StyleSheet, ScrollView } from 'react-native';
import { inject, observer } from 'mobx-react';
import React, { FC } from 'react';
import CustomText from 'components/atoms/CustomText';
import Input from 'components/atoms/Input';
import { spacing } from 'constants/spacing';
import { Formik } from 'formik';
import Button from 'components/atoms/Button';
import routes from 'resources/routes.json';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from 'graphql/auth';
import { saveToken, USER_TOKEN } from 'config/asyncStorage';
import {
  LoginData,
  LoginMutationInput,
  LoginScreenProps,
} from 'screens/PublicScreen/Login/types';
import { useTheme } from 'styled-components';

const Login: FC<LoginScreenProps> = ({ navigation, store }) => {
  const theme = useTheme();
  const [login, { loading, error }] = useMutation<LoginData>(LOGIN_USER, {
    onCompleted: async data => {
      await saveToken(USER_TOKEN, data?.loginUser?.accessToken as string);
      store.userStore.setUser(data?.loginUser);
    },
    onError: () => {
      // show error
    },
  });

  const onSubmit = async (values: LoginMutationInput) => {
    await login({
      variables: {
        email: values.email,
        password: values.password,
      },
    });
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.mainSection}>
            <CustomText size="xl" style={styles.title}>
              Login
            </CustomText>
            {error && (
              <View style={styles.errorContainer}>
                <CustomText size="sm" color={theme.colors.danger}>
                  {error?.message}
                </CustomText>
              </View>
            )}
            <Formik
              onSubmit={onSubmit}
              initialValues={{
                email: '',
                password: '',
              }}>
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.inputContainer}>
                  <Input
                    label="E-mail address"
                    placeholder="Enter your Email"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />
                  <Input
                    label="Password"
                    placeholder="Enter your password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    secureTextEntry
                  />

                  <CustomText
                    size="sm"
                    style={styles.forgotPassword}
                    onPress={() => navigation.navigate(routes.forgotPassword)}>
                    Forgot Password
                  </CustomText>

                  <Button
                    loading={loading}
                    label="Login"
                    onPress={handleSubmit}
                  />
                </View>
              )}
            </Formik>
          </View>
          <CustomText size="sm" style={styles.joined}>
            New to Funds?{' '}
            <CustomText
              size="sm"
              color="secondary"
              onPress={() => navigation.navigate(routes.register)}>
              Register
            </CustomText>
          </CustomText>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainSection: {
    width: '90%',
  },
  inputContainer: {
    marginTop: spacing.lg,
  },
  mainContainer: {
    flexGrow: 1,
  },
  title: {
    fontWeight: '700',
  },
  footerText: {
    marginTop: spacing.sm,
    lineHeight: spacing.lg,
  },
  joined: {
    marginTop: spacing.lg,
  },
  forgotPassword: {
    textAlign: 'right',
    marginVertical: spacing.sm,
  },
  errorContainer: { justifyContent: 'center' },
});

export default inject('store')(observer(Login)) as any;

import { View, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import CustomText from 'components/atoms/CustomText';
import Input from 'components/atoms/Input';
import { spacing } from 'constants/spacing';
import { Formik } from 'formik';
import Button from 'components/atoms/Button';
import routes from 'resources/routes.json';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { REGISTER_USER } from '../../../graphql/auth';
import { useMutation } from '@apollo/client';
import {
  RegisterMutationInput,
  RegisterScreenNavigationProp,
} from './Register.types';
import ErrorText from 'components/atoms/ErrorText';
import ScrollContainer from 'components/organisms/ScrollContainer';
import KeyboardAvoidingContainer from 'components/organisms/KeyboardAvoidingView';

const validate = (values: RegisterMutationInput) => {
  const errors: any = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = 'Required';
  } else if (!/^[0-9]{10}$/i.test(values.phoneNumber)) {
    errors.phoneNumber = 'Invalid phone number';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be at least 6 characters';
  }
  return errors;
};

const Register: FC<RegisterScreenNavigationProp> = ({ navigation }) => {
  const [passwordError, setPasswordError] = React.useState<any>(null);
  const [phoneNumberError, setPhoneNumberError] = React.useState<any>(null);
  const [register, { loading }] = useMutation(REGISTER_USER, {
    onCompleted: () => {
      navigation.navigate(routes.login as any);
    },
    onError: error => {
      const { graphQLErrors } = error;

      if (graphQLErrors) {
        graphQLErrors.forEach(({ message }) => {
          let lowerMsg = message.toLowerCase();
          if (lowerMsg.includes('password')) {
            setPasswordError(message);
          } else if (lowerMsg.includes('phone')) {
            setPhoneNumberError(message);
          }
        });
      }
    },
  });

  const onSubmit = async (values: RegisterMutationInput) => {
    await register({
      variables: {
        ...values,
      },
    });
  };

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="keyboard-backspace"
        size={25}
        style={styles.backIcon}
        onPress={() => navigation.navigate(routes.login as any)}
      />
      <View style={styles.mainSection}>
        <KeyboardAvoidingContainer>
          <ScrollContainer
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContainer}>
            <CustomText size="xl" style={styles.title}>
              Register
            </CustomText>

            <Formik
              onSubmit={onSubmit}
              initialValues={{
                name: '',
                phoneNumber: '',
                password: '',
              }}
              validate={(values: RegisterMutationInput) => {
                setPasswordError(null);
                setPhoneNumberError(null);
                return validate(values);
              }}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View style={styles.inputContainer}>
                  <Input
                    label="Full name"
                    error={
                      (errors.name as unknown as boolean) &&
                      (touched.name as boolean)
                    }
                    placeholder="Enter your full name"
                    value={values.name}
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                  />
                  {errors.name && touched.name ? (
                    <ErrorText message={errors.name} />
                  ) : null}

                  <Input
                    label="Phone Number"
                    error={
                      (errors.phoneNumber && touched.phoneNumber) ||
                      phoneNumberError
                    }
                    placeholder="Enter your phone numer"
                    value={values.phoneNumber}
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                  />
                  {(errors.phoneNumber && touched.phoneNumber) ||
                  phoneNumberError ? (
                    <ErrorText
                      message={
                        errors.phoneNumber || (phoneNumberError as string)
                      }
                    />
                  ) : null}
                  <Input
                    label="Password"
                    error={
                      (errors.password && touched.password) || passwordError
                    }
                    placeholder="Enter your password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    secureTextEntry={true}
                  />
                  {(errors.password && touched.password) || passwordError ? (
                    <ErrorText
                      message={errors.password || (passwordError as string)}
                    />
                  ) : null}

                  <Button
                    loading={loading}
                    label="Register"
                    onPress={handleSubmit}
                  />
                </View>
              )}
            </Formik>
            <CustomText size="sm" style={styles.footerText}>
              By siging up, you agree to our Terms of Service and Privacy Policy
            </CustomText>
            <CustomText size="sm" style={styles.joined}>
              Joined us before?{' '}
              <CustomText
                size="sm"
                color="secondary"
                onPress={() => navigation.navigate(routes.login as any)}>
                Login
              </CustomText>
            </CustomText>
          </ScrollContainer>
        </KeyboardAvoidingContainer>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  mainSection: {
    marginTop: spacing.lg + spacing.md,
    width: '90%',
  },
  inputContainer: {
    marginTop: spacing.lg,
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
  backIcon: {
    position: 'absolute',
    top: spacing.sm,
    left: 0,
    padding: spacing.md,
    zIndex: spacing.xl * 100,
  },
});

export default Register;

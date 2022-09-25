import { View, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import CustomText from 'components/atoms/CustomText';
import { spacing } from 'constants/spacing';
import { Formik } from 'formik';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import routes from 'resources/routes.json';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ScrollViewContainer from 'components/organisms/ScrollViewComponent';
import KeyboardAvoidingContainer from 'components/organisms/KeyboardAvoidingView';
import { useMutation } from '@apollo/client';
import { REQUEST_PASSWORD_CODE } from 'graphql/auth';
import ErrorText from 'components/atoms/ErrorText';
import { ForgotPasswordScreenNavigationProp } from './ForgotPassword.styles';

const validate = (values: { email: string }) => {
  const errors: any = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const PasswordReset: FC<ForgotPasswordScreenNavigationProp> = ({
  navigation,
}) => {
  const [emailError, setEmailError] = React.useState<any>(null);
  const [requestCode, { loading }] = useMutation(REQUEST_PASSWORD_CODE, {
    onCompleted: () => {
      navigation.navigate(routes.sendVerificationCodePassword as any);
    },
    onError: error => {
      const { graphQLErrors } = error;
      graphQLErrors.forEach(({ message }) => {
        let lowerMsg = message.toLowerCase();
        if (lowerMsg.includes('email')) {
          setEmailError(message);
        }
      });
    },
  });

  const onSubmit = (values: { email: string }) => {
    requestCode({
      variables: {
        email: values.email,
      },
    });
  };

  return (
    <KeyboardAvoidingContainer keyboardVerticalOffset={0}>
      <ScrollViewContainer contentContainerStyle={styles.mainContainer}>
        <MaterialCommunityIcons
          name="keyboard-backspace"
          size={25}
          style={styles.backIcon}
          onPress={() => navigation.navigate(routes.login as any)}
        />
        <View style={styles.container}>
          <View style={styles.mainSection}>
            <CustomText size="xl" style={styles.title}>
              Forgot{'\n'}Password?
            </CustomText>
            <CustomText size="sm">
              Dont worry! it happens, Please enter the phone associated with
              your account
            </CustomText>

            <Formik
              onSubmit={onSubmit}
              initialValues={{
                email: '',
              }}
              validate={validate}>
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
                    label="E-mail Address"
                    placeholder="Enter your email"
                    value={values.email}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                  />
                  {(errors.email && touched.email) || emailError ? (
                    <ErrorText
                      message={errors.email || (emailError as string)}
                    />
                  ) : null}

                  <Button
                    loading={loading}
                    label="Reset"
                    onPress={handleSubmit}
                  />
                </View>
              )}
            </Formik>
          </View>
        </View>
      </ScrollViewContainer>
    </KeyboardAvoidingContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboardView: {
    flex: 1,
  },
  mainSection: {
    width: '90%',
  },
  mainContainer: {
    flexGrow: 1,
  },
  inputContainer: {
    marginTop: spacing.lg,
  },
  title: {
    fontWeight: '700',
    marginBottom: spacing.md,
  },
  backIcon: {
    position: 'absolute',
    top: spacing.sm,
    left: 0,
    padding: spacing.md,
    zIndex: spacing.md * 200,
  },
});

export default PasswordReset;

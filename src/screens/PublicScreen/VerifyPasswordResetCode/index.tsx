import { View, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import CustomText from 'components/atoms/CustomText';
import { spacing } from 'constants/spacing';
import { Formik } from 'formik';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import routes from 'resources/routes.json';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useMutation } from '@apollo/client';
import { VERIFY_PASSWORD_RESET_CODE } from 'graphql/auth';
import ErrorText from 'components/atoms/ErrorText';
import { VerifyPasswordResetCodeScreenNavigationProp } from './VerifyPasswordResetCode.styles';

const validate = (values: { code: string }) => {
  const errors: any = {};
  if (!values.code) {
    errors.code = 'Required';
  } else if (values.code.length !== 5) {
    errors.code = 'Invalid code';
  }
  return errors;
};

const VerifyPasswordResetCode: FC<
  VerifyPasswordResetCodeScreenNavigationProp
> = ({ navigation }) => {
  const [codeError, setCodeError] = React.useState<any>(null);
  const [verifyCode, { loading }] = useMutation(VERIFY_PASSWORD_RESET_CODE, {
    onCompleted: () => {
      navigation.navigate(routes.newPassword as any);
    },
    onError: error => {
      const { graphQLErrors } = error;
      graphQLErrors.forEach(({ message }) => {
        let lowerMsg = message.toLowerCase();
        if (lowerMsg.includes('code')) {
          setCodeError(message);
        }
      });
    },
  });

  const onSubmit = (values: { code: string }) => {
    verifyCode({
      variables: {
        code: values.code,
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
        <CustomText size="xl" style={styles.title}>
          Reset{'\n'}Password
        </CustomText>
        <CustomText
          size="sm"
          onPress={() => navigation.navigate(routes.register as any)}>
          Enter the code we sent to your email.
        </CustomText>

        <Formik
          onSubmit={onSubmit}
          initialValues={{
            code: '',
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
                label="Code"
                placeholder="Enter your code"
                maxLength={5}
                value={values.code}
                onChangeText={handleChange('code')}
                onBlur={handleBlur('code')}
              />
              {(errors.code && touched.code) || codeError ? (
                <ErrorText message={errors.code || (codeError as string)} />
              ) : null}

              <Button loading={loading} label="Submit" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
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
  mainSection: {
    width: '90%',
  },
  inputContainer: {
    marginTop: spacing.lg,
  },
  title: {
    fontWeight: '700',
    marginBottom: 10,
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
  },
});

export default VerifyPasswordResetCode;

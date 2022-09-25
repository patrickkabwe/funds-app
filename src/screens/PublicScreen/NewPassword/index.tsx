import { View, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import CustomText from 'components/atoms/CustomText';
import { spacing } from 'constants/spacing';
import { Formik } from 'formik';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import routes from 'resources/routes.json';
import { useMutation } from '@apollo/client';
import { NEW_PASSWORD } from 'graphql/auth';
import ErrorText from 'components/atoms/ErrorText';
// import SuccessAndFailedModal from 'components/molecules/SuccessAndFailedModal';
import { NewPasswordScreenNavigationProp } from './NewPassword.styles';

const validate = (values: { newPassword: string; confirmPassword: string }) => {
  const errors: any = {};
  if (!values.newPassword) {
    errors.newPassword = 'Required';
  } else if (values.newPassword.length < 6) {
    errors.newPassword = 'Password must be at least 6 characters';
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required';
  } else if (values.newPassword !== values.confirmPassword) {
    errors.confirmPassword = 'Passwords must match';
  }
  return errors;
};

const NewPassword: FC<NewPasswordScreenNavigationProp> = ({ navigation }) => {
  const [newPasswordError, setNewPasswordError] = React.useState<any>(null);
  const [modalOpen, setModalOpen] = React.useState(false);

  const [newPassword, { loading }] = useMutation(NEW_PASSWORD, {
    onCompleted: () => {
      setModalOpen(true);
    },
    onError: error => {
      const { graphQLErrors } = error;
      graphQLErrors.forEach(({ message }) => {
        let lowerMsg = message.toLowerCase();
        if (lowerMsg.includes('password')) {
          setNewPasswordError(message);
        }
      });
    },
  });
  const onSubmit = (values: { newPassword: string }) => {
    newPassword({
      variables: {
        newPassword: values.newPassword,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainSection}>
        <CustomText size="xl" style={styles.title}>
          New{'\n'}Password
        </CustomText>

        <Formik
          onSubmit={onSubmit}
          initialValues={{
            newPassword: '',
            confirmPassword: '',
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
                label="New Password"
                error={
                  (touched.newPassword as unknown as boolean) &&
                  (errors.newPassword as unknown as boolean)
                }
                placeholder="Enter your new password"
                value={values.newPassword}
                onChangeText={handleChange('newPassword')}
                onBlur={handleBlur('newPassword')}
                secureTextEntry={true}
              />
              {(errors.newPassword && touched.newPassword) ||
              newPasswordError ? (
                <ErrorText message={errors.newPassword || newPasswordError} />
              ) : null}

              <Input
                label="Confirm Password"
                error={
                  (touched.confirmPassword as unknown as boolean) &&
                  (errors.confirmPassword as unknown as boolean)
                }
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                secureTextEntry={true}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <ErrorText message={errors.confirmPassword} />
              )}

              <Button loading={loading} label="Submit" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
      {/* <SuccessAndFailedModal
        type="success"
        children={'Password changed successfully'}
        title="Password Changed"
        onClose={() => navigation.navigate(routes.login as any)}
        visible={modalOpen}
      /> */}
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

export default NewPassword;

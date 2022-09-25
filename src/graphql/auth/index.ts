import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    loginUser(data: { email: $email, password: $password }) {
      firstName
      lastLogin
      accessToken
    }
  }
`;

export const REGISTER_USER = gql`
  mutation (
    $firstName: String!
    $lastName: String!
    $email: String
    $password: String!
  ) {
    register(
      input: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
      }
    ) {
      profile {
        firstName
        lastName
        email
      }
    }
  }
`;

// export const LOG_OUT = gql``;

export const VERIFY_TOKEN = gql`
  mutation VerifyToken($accessToken: String!) {
    verifyToken(data: { accessToken: $accessToken }) {
      firstName
    }
  }
`;

export const REQUEST_PASSWORD_CODE = gql`
  mutation RequestCode($email: String!) {
    requestResetPasswordCode(input: { email: $email }) {
      ok
    }
  }
`;

export const NEW_PASSWORD = gql`
  mutation NewPassword($newPassword: String!) {
    resetPasswordCode(input: { newPassword: $newPassword }) {
      ok
    }
  }
`;

export const VERIFY_PASSWORD_RESET_CODE = gql`
  mutation VerifyPasswordResetCode($code: String!) {
    verifyResetPasswordCode(input: { code: $code }) {
      ok
    }
  }
`;

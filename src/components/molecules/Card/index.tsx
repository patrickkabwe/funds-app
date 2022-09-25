import { View } from 'react-native';
import React, { FC } from 'react';
import CustomText from 'components/atoms/CustomText';

import IconButton from 'components/atoms/IconButton';
import {
  CardContainer,
  CardFooter,
  CardHeader,
  CardIconTitleContainer,
  CardTitleContainer,
} from './styles';
import Spacer from 'components/atoms/Spacer';
import { useTheme } from 'styled-components';
import { currencyFormater } from 'utils';
import { CardProps } from './types';

const Card: FC<CardProps> = ({ balance = 0, income = 0, expenses = 0 }) => {
  const theme = useTheme();
  return (
    <CardContainer>
      <CardHeader>
        <View>
          <CustomText size="sm" color="white">
            Total Balance (K)
          </CustomText>
          <Spacer />
          <CustomText fw="bold" lineHeight={28} size="xxl" color="white">
            {currencyFormater(balance)}
          </CustomText>
        </View>

        <IconButton
          hasBg={false}
          name="ellipsis-horizontal"
          size={20}
          onPress={() => {}}
        />
      </CardHeader>

      <CardFooter>
        <CardTitleContainer>
          <CardIconTitleContainer>
            <IconButton name="arrow-down-outline" size={13} />
            <Spacer marginLeft={theme.spacing.xs} />
            <CustomText size="sm" color="white">
              Budget
            </CustomText>
          </CardIconTitleContainer>
          <CustomText size="md" fw="bold" color="white">
            {currencyFormater(income)}
          </CustomText>
        </CardTitleContainer>
        <CardTitleContainer alignItems="flex-end">
          <CardIconTitleContainer>
            <IconButton name="arrow-up-outline" size={13} />
            <Spacer marginLeft={theme.spacing.xs} />
            <CustomText size="sm" color="white">
              Expenses
            </CustomText>
          </CardIconTitleContainer>
          <CustomText size="md" fw="bold" color="white">
            {currencyFormater(expenses)}
          </CustomText>
        </CardTitleContainer>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;

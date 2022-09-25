import React from 'react';
import CustomText from 'components/atoms/CustomText';
import IconButton from 'components/atoms/IconButton';
import Card from 'components/molecules/Card';

import {
  HomeContainer,
  HomeHeader,
  HomeHeaderInner,
  HomeHeaderLeft,
  HomeHeaderRight,
  HomeMain,
} from './styles';
import { useTheme } from 'styled-components';
import { StatusBar } from 'react-native';
import TransactionList from 'components/molecules/TransactionList';

const Home = () => {
  const theme = useTheme();

  return (
    <HomeContainer>
      <StatusBar backgroundColor={theme.colors.primary} translucent />
      <HomeHeader>
        <HomeHeaderInner>
          <HomeHeaderLeft>
            <CustomText size="sm" color={theme.colors.white}>
              Good Morning,
            </CustomText>
            <CustomText fw="semiBold" size="xl" color={theme.colors.white}>
              Patrick Kabwe
            </CustomText>
          </HomeHeaderLeft>

          <HomeHeaderRight>
            <IconButton name="notifications-outline" onPress={() => {}} />
          </HomeHeaderRight>
        </HomeHeaderInner>
        <Card income={10000} balance={1000000} expenses={200} />
      </HomeHeader>

      <HomeMain>
        <TransactionList />
      </HomeMain>
    </HomeContainer>
  );
};

export default Home;

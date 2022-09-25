import CustomText from 'components/atoms/CustomText';
import Spacer from 'components/atoms/Spacer';
import ScrollViewContainer from 'components/organisms/ScrollViewComponent';
import React from 'react';
import ListItem from '../ListItem';
import { TransactionListContainer } from './styles';

const TransactionList = () => {
  return (
    <TransactionListContainer>
      <CustomText size="lg" fw="bold">
        Transactions History
      </CustomText>
      <Spacer height={20} />
      <ScrollViewContainer showsVerticalScrollIndicator={false}>
        {Array.from({ length: 25 }).map((_, i) => (
          <ListItem key={i} />
        ))}
      </ScrollViewContainer>
    </TransactionListContainer>
  );
};

export default TransactionList;

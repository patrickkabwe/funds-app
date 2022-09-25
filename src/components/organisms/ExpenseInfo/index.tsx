import { StyleSheet, ScrollView } from 'react-native';
import React, { FC } from 'react';
import ListItem from 'components/molecules/ListItem';
import NotFound from '../NotFound';
import { ExpenseInfoProps } from './types';

const ExpenseInfo: FC<ExpenseInfoProps> = ({ type }) => {
  return [].length ? (
    <ScrollView style={styles.container}>
      {[].map(item => (
        <ListItem {...(item as any)} key={item} />
      ))}
    </ScrollView>
  ) : (
    <NotFound message={`No Expenses Recorded ${type}`} />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default ExpenseInfo;

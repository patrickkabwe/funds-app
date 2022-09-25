import { View } from 'react-native';
import React, { FC } from 'react';
import CustomText from 'components/atoms/CustomText';
import {
  ListIconContainer,
  ListItemContainer,
  ListItemLeft,
  ListItemLeftInner,
} from './styles';
import MoneyIcon from 'components/atoms/Icons/money';
import { useTheme } from 'styled-components';
import { currencyFormater } from 'utils';

const ListItem: FC = ({}) => {
  const theme = useTheme();

  return (
    <ListItemContainer>
      <ListItemLeft>
        <ListIconContainer>
          <MoneyIcon size={30} />
        </ListIconContainer>
        <ListItemLeftInner>
          <CustomText
            lineHeight={16}
            fw="bold"
            size="md"
            color={theme.colors.black}>
            {'Fuel Purchase'}
          </CustomText>
          <CustomText lineHeight={16} size="xs" fw="semiBold" color="#ccc">
            {'Today'}
          </CustomText>
        </ListItemLeftInner>
      </ListItemLeft>

      <View>
        <CustomText fw="bold" size="md" color={theme.colors.success}>
          {currencyFormater(1000)}
        </CustomText>
      </View>
    </ListItemContainer>
  );
};

export default ListItem;

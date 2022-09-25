import React, { FC, type PropsWithChildren } from 'react';
import { ScrollView, ScrollViewProps } from 'react-native';

const ScrollViewContainer: FC<PropsWithChildren<ScrollViewProps>> = props => {
  return <ScrollView {...props}>{props.children}</ScrollView>;
};

export default ScrollViewContainer;

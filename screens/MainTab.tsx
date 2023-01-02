import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';

type MainTabParamList = {
  Home: undefined;
  Account: undefined;
};

type MainTabNavigationProp = BottomTabNavigationProp<MainTabParamList>;

const Tab = createBottomTabNavigator<MainTabParamList>();

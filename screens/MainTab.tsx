import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  useNavigation,
  CompositeNavigationProp,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {RootStackNavigationProp} from './RootStack';
import {Button, Text, View} from 'react-native';

/**
 * 네이티브 스택 내비게이션 없이 하단 탭 내비게이션만 단독으로 사용한다면 위와 같이
 * BottomTabNavigationProp<MainTabParamList>만으로 충분
 * 하지만 하단 탭 내비게이션에서 그 상위에 있는 RootStack의 Detailscreen에 접근하려면
 * Navigationprop들을 합쳐줘야함
 */
type MainTabParamList = {
  Home: undefined;
  Account: undefined;
};

export type MainTabNavigationProp = CompositeNavigationProp<
  RootStackNavigationProp,
  BottomTabNavigationProp<MainTabParamList>
>;

/**
 * 추후 RootStack 내부 화면에서
 * navigation.navigate('MainTab',{scree:'Account'})가 가능하게 해줌
 */
export type MainTabNavigationScreenParams =
  NavigatorScreenParams<MainTabParamList>;
const Tab = createBottomTabNavigator<MainTabParamList>();

function HomeScreen() {
  const navigation = useNavigation<MainTabNavigationProp>();
  const onPress = () => {
    navigation.navigate('Detail', {id: 1});
  };
  return (
    <View>
      <Text>Home</Text>
      <Button title="Open Detail" onPress={onPress} />
    </View>
  );
}

function AccountScreen() {
  return (
    <View>
      <Text>Account</Text>
    </View>
  );
}

function MainTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default MainTab;

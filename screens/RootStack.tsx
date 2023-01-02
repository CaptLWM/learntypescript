import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import MainTab, {MainTabNavigationScreenParams} from './MainTab';

/**
 * 타입스크립트에서 네이티브 스택 네비게이션을 사용할 때는 어떤 화면에
 * 어떤 파라미터가 필요한지 정의하는 StackParamList 타입을 정의해 줘야함
 * interface가 아닌 type 사용
 */
type RootStackParamList = {
  MainTab: MainTabNavigationScreenParams;
  Detail: {
    id: number;
  };
};

/**
 * useNavigation을 사용할 때는 NavigationProp을 선언해야함
 * 그리고 선언한 타입을 useNavigation의 Generic으로 지정해야 함
 */

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

type DetailScreenRouteProp = RouteProp<RootStackParamList, 'Detail'>;

function DetailScreen() {
  const {params} = useRoute<DetailScreenRouteProp>();
  return (
    <View>
      <Text>Detail{params.id}</Text>
    </View>
  );
}
function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={MainTab}
        name="MainTab"
        options={{headerShown: false}}
      />
      <Stack.Screen component={DetailScreen} name="Detail" />
    </Stack.Navigator>
  );
}

export default RootStack;

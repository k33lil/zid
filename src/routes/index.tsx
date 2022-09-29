import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../screens/ProductsScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const AppRoutes = function () {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerLargeTitle: true,
        headerTransparent: true,
        headerTitleAlign: 'left',
        headerBlurEffect: 'light',
        headerRight: () => (
          <Icon name={'heart-outline'} size={26} color={'black'} />
        ),
        headerLargeTitleShadowVisible: false,
      }}>
      <Stack.Screen name="Home" component={Main} />
    </Stack.Navigator>
  );
};

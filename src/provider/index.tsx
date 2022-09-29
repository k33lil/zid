import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {AppRoutes} from '../routes';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function AppProvider() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RNBootSplash from 'react-native-bootsplash';
import { ThemeProvider } from 'styled-components';
import Router from '@router';
import theme from '@theme';

const App = () => {
  useEffect(() => {
    (async () => {
      await RNBootSplash.hide({ duration: 250, fade: true });
    })();
  }, []);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;

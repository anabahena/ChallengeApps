import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from './src/components';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => Node = () => {
  const scheme = useColorScheme();

  const ThemeDark = {
    colors: {
      "primary": '#79CC46',
      "secondary": '#ADB4B9',
      "third": '#000',
      "warning":"#FF9212",
      "error":"#F24040"
    },
  };

//console.log(config.ColorIcono)

  const ThemeLight = {
    colors: {
      "primary": '#79CC46',
      "secondary": '#ADB4B9',
      "third": '#000',
      "warning":"#FF9212",
      "error":"#F24040"
    },
  };

  return (
      <NavigationContainer theme={scheme === 'dark' ? ThemeDark : ThemeLight}>
        <Stack.Navigator initialRouteName={'Home'} screenOptions={{
          headerTintColor: '#fff',
          headerBackButtonVisible: false
        }}>
          <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

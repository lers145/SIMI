import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Principal from './Principal';
import Local from './Local';
import Mapa from './Mapa';
//import Seguro from './src/Seguro';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen name="Principal"component={Principal} options={{headerShown: false}} />
        <Stack.Screen name="Local"component={Local} options={{headerShown: false}} />
        <Stack.Screen name="Mapa"component={Mapa} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
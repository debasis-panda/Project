import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from './Screen/LoginScreen';
import HomeScreen from './Screen/Dashboard/HomeScreen'


const Stack = createStackNavigator();

const Auth = () => {

  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Auth">
    
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{
          title: 'Login Screen',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#307ecc',
            },
        }}
        />
   
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
          title: 'Home Screen',
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#307ecc',
            },
        }}
        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import News from './Screen/News'

const Stack = createStackNavigator();

function App() {
  return (


    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="News" component={News} options={{headerShown: true,headerStyle: {
        backgroundColor: 'black',}, headerTitleStyle: { color: 'white', }, title: 'News Of The World',
         headerTintColor:'white',headerTitleAlign: 'center'}} />
      </Stack.Navigator>

    </NavigationContainer>

  );

}

export default App
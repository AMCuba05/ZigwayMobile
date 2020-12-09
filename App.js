import 'react-native-gesture-handler'
import React from 'react'
import Agents from "./screens/Agents"
import BorrowersInformation from "./screens/BorrowersInformation"
import Loan from "./screens/Loan"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Agents" component={Agents} />
        <Stack.Screen name="BorrowersInformation" component={BorrowersInformation} />
        <Stack.Screen name="Loan" component={Loan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
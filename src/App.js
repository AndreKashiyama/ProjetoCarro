import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Home';
import CarroDetalheSreen from './CarroDetalhe';

const Stack = createNativeStackNavigator();


function App() {
 return (
 <NavigationContainer>
 <Stack.Navigator>
 <Stack.Screen name="Home" component={HomeScreen} />
 <Stack.Screen name="Detalhe" component={CarroDetalheSreen}/>
 </Stack.Navigator>
 </NavigationContainer>
 );
}
export default App;

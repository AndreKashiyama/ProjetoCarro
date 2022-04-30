import React, {useEffect} from 'react';
import {Button, ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import { pegarCarro } from './services/CarroService';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CarroFoto from './CarroFoto';
import CarroTexto from './CarroTexto';

const Tab = createBottomTabNavigator();

//export default props => {
//    return <Text>{props.route.params.id}</Text>
//}
export default props =>{

    const id = props.route.params.id;
    const carro = pegarCarro(id);

    useEffect(() => {
        props.navigation.setOptions({title: carro.modelo})
      });

      return (
          <Tab.Navigator 
          screenOptions={{headerShown: false}}
          >
            <Tab.Screen name="Texto" component={CarroTexto}
            inicialParams={{carro}}
            />

            <Tab.Screen name="Foto" component={CarroFoto}
            initialParams={{carro}}
            />
          </Tab.Navigator>
      );
    }



  
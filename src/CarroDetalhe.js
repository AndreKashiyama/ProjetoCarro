import React, {useEffect} from 'react';
import {Button, ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import { pegarCarro } from './services/CarroService';



//export default props => {
//    return <Text>{props.route.params.id}</Text>
//}
export default props =>{

    const id = props.route.params.id;
    const carro = pegarCarro(id);

    useEffect(() => {
        props.navigation.setOptions({title: carro.modelo})
      });

    const acaoVoltar = () =>{
        props.navigation.goBack()
    }


    return (
        <ScrollView style={styles.container}>
          <View style={styles.containerFoto}>
            <Image 
            source={carro.foto} 
            style={styles.foto}/>
          </View>
          <Text style={styles.texto}>Modelo: {carro.modelo}</Text>
          <Text style={styles.texto}>Ano: {carro.ano}</Text>
          <View style={styles.containerBotao}>
            <Button 
            onPress={acaoVoltar}
            title={"Voltar"} />
          </View>
        </ScrollView>
      );
    };
    
    let styles = StyleSheet.create({
        container: {},
        containerFoto: {
          flexDirection: 'row'
        },
        foto: {
          flex: 1,
          aspectRatio: 1,
          resizeMode: 'contain'
        },
        texto: {
          fontSize: 16,
          textAlign: 'center'
        },
        containerBotao: {
          flexDirection: 'row',
          justifyContent: 'center',
          marginVertical: 10
        },
        botao: {
          flex: 1
        }
      });
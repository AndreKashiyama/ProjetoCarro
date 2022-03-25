import React, { useState } from 'react';
import {View, StyleSheet, ScrollView, TextInput, ActivityIndicator} from 'react-native';


import CarroItem from './CarroItem';
import CarrosDb from './CarrosDb';

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#DDDDDD',
    padding: 5
  }
})

const App = props => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  console.log('Iniciando')

  const carregadarDados = () => {
    setLoading(false)
  }

  const abrirDetalhe = (id) => {
   // alert(id)
    props.navigation.navigate('Detalhe', {id})
  }
  let CarrosJsx = [] 
  for (let key in data){
    let CarroDb = data[key]
    CarrosJsx.push(<CarroItem foto = {CarroDb.foto} titulo = {CarroDb.modelo + "/" + CarroDb.ano} 
    onPress={abrirDetalhe}
    key={key}/>)
  }

  const jsxCarros = () => (
    <View>
    <TextInput />
  <ScrollView style={styles.container}>
  {CarrosJsx}
  </ScrollView>
  </View>
  )

  const jsxLoading = () => (
    <View> 
      <ActivityIndicator size ="large" />
      </View>
  )

  setTimeout(carregadarDados, 2000)
  if (loading){
    return jsxLoading()
  }else{
    return jsxCarros()
  }
    
}
export default App;

import React, { useState, useEffect } from 'react';
import {View, StyleSheet, TextInput, ActivityIndicator, FlatList,Text} from 'react-native';


import CarroItem from './CarroItem';
import { pegarCarros } from './services/CarroService';

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#DDDDDD',
    padding: 5
  }
})

const App = props => {

  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [q,setQ] = useState('')


useEffect(() => {
  setTimeout(carregadarDados, 2000)
})
//  console.log('Iniciando')

  const carregadarDados = () => {
    console.log('carregarDados')

    setData(pegarCarros())
    setLoading(false)
  }

  const abrirDetalhe = (id) => {
   // alert(id)
    props.navigation.navigate('Detalhe', {id})
  }
  

  const jsxCarros = () => (
    <View flex={1}>
    <TextInput
    placeholder="Pesquisar"
    value={q}
    onChangeText={setQ}
     />
     <FlatList
     data={dataFiltrado}
     renderItem={item}
      />
  </View>
  )

  const item = propsItem =>{
    console.log(propsItem)
    //return (<Text>{propsItem.item.modelo}</Text>)
    return (
   <CarroItem
    id={propsItem.index}
    foto = {propsItem.item.foto} 
    titulo = {propsItem.item.modelo + "/" + propsItem.item.ano} 
        onPress={abrirDetalhe} />
      )
    }

  const jsxLoading = () => (
    <View> 
      <ActivityIndicator size ="large" />
      </View>
  )

let dataFiltrado;
if(q == ''){
  dataFiltrado = data
}else{
  dataFiltrado = []
  let q2 = q.toUpperCase()
  for(let key in data){
    let text = `${data[key].modelo} ${data[key].ano}`
    if (text.toUpperCase().indexOf(q2) >= 0){
      dataFiltrado.push(data[key])
    }
  }
}
//const jsxLista = () => {
//  let CarrosJsx = [] 
//  for (let key in dataFiltrado){
//   let CarroDb = dataFiltrado[key]
//    CarrosJsx.push(<CarroItem foto = {CarroDb.foto} titulo = {CarroDb.modelo + "/" + CarroDb.ano} 
//    onPress={abrirDetalhe}
//    key={key}/>)
//  }
//return CarrosJsx;
//}


  if (loading){
    return jsxLoading()
  }else{
    return jsxCarros()
  }
    
}
export default App;

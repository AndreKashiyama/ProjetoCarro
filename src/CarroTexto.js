import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';



//export default props => {
//    return <Text>{props.route.params.id}</Text>
//}
export default props =>{
    const carro = props.route.params.carro
    let carro = pegarCarro(id)

    const acaoVoltar = () =>{
        props.navigation.goBack()
    }


    return (
        <ScrollView>
          <Text style={styles.texto}>Modelo: {carro.modelo}</Text>
          <Text style={styles.texto}>Ano: {carro.ano}</Text>
          <View style={styles.containerBotao}>
            <Button 
            style={styles.botao}
            onPress={acaoVoltar}
            title={"Voltar"} />
          </View>
        </ScrollView>
      );
    };
    
    let styles = StyleSheet.create({
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
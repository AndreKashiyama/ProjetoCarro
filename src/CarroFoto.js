
import {ScrollView, StyleSheet, View, Image} from 'react-native';

//export default props => {
//    return <Text>{props.route.params.id}</Text>
//}
export default props =>{
    const carro = props.route.params.carro
    let carro = pegarCarro(id)


    return (
        <ScrollView> 
          <View style={styles.containerFoto}>
            <Image 
            source={carro.foto} 
            style={styles.foto}/>
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
  
       
      });
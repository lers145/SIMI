import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Style from './Style';


const Local = ({ route, navigation }) => {
  const { numero } = route.params;

  const armazenarValor = (valor) => {
    if(numero !== valor){
    navigation.navigate('Mapa', { valor, numero });
    }
  };
  const Voltar = () => {
    navigation.goBack();
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'red',
      width: 400,
      marginTop: 10,
      alignItems: 'center',
    },
    containerSensor: {
      alignItems: 'center',
      marginTop: 70
    },
    textExiste: {
      color: '#FFF',
      fontSize: 22,
    },
    roomButtonsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 70,
    },
    containerExiste1: {
      backgroundColor: '#4147C0', // Default color for Sala 1
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 25,
      marginTop: 25,
      width: 350,
      alignItems: 'center',
    },
  });
  

  return (
    <View style={Style.containerSensor}>
      <View style={styles.container}><Text style={Style.Titulo}>Alerta de incêndio!</Text></View>
      
      <Text style={Style.Titulo}>Informe a sala que você está:</Text>

      <View><TouchableOpacity  style={styles.containerExiste1} onPress={() => armazenarValor(11)}><Text style={Style.textExiste}>Sala 1</Text></TouchableOpacity></View>
      <View><TouchableOpacity style={styles.containerExiste1} onPress={() => armazenarValor(12)}><Text style={Style.textExiste}>Sala 2</Text></TouchableOpacity></View>
      <View><TouchableOpacity style={styles.containerExiste1} onPress={() => armazenarValor(13)}><Text style={Style.textExiste}>Sala 3</Text></TouchableOpacity></View>

      <View><TouchableOpacity onPress={Voltar} style={Style.containerExiste1}><Text style={Style.textExiste}>Voltar</Text></TouchableOpacity></View>
    </View>
  );
};

export default Local;

//const handleRoomPress = () => {
 // Alert.alert('Rota Alterada');
//};




import React, { useState, useEffect } from 'react';
import { Text, View, Alert,TouchableOpacity } from 'react-native';
import Style from './Style';



  const Principal = ({ navigation }) => {
    const [textoBotao, setTextoBotao] = useState('Ambiente Seguro');
    const [textoBotao2, setTextoBotao2] = useState('Ambiente Seguro');
    const [textoBotao3, setTextoBotao3] = useState('Ambiente Seguro');
    const [textoBotao4, setTextoBotao4] = useState('Ambiente Seguro');
    const [corBotao, setCorBotao] = useState('#81BE83');
    const [corBotao2, setCorBotao2] = useState('#81BE83');
    const [corBotao3, setCorBotao3] = useState('#81BE83');
    const [corBotao4, setCorBotao4] = useState('#81BE83');
    const handleSelecionarCaso = (numero) => {
      // Troca o texto do botão
      if (textoBotao === 'Ambiente Seguro') {
        setTextoBotao('FOGO DETECTADO');
        setCorBotao('red');
      } else {
        setTextoBotao('Ambiente Seguro');
        setCorBotao('#81BE83');
      }
  
      // Atraso de 2 segundos antes de navegar para outra tela1111122222
      setTimeout(() => {
        navigation.navigate('Local', { numero }); 
      }, 2000);
    };
    const handleSelecionarCaso2 = (numero) => {
      // Troca o texto do botão
      if (textoBotao === 'Ambiente Seguro') {
        setTextoBotao2('FOGO DETECTADO');
        setCorBotao2('red');
      } else {
        setTextoBotao2('Ambiente Seguro');
        setCorBotao2('#81BE83');
      }
  
      // Atraso de 2 segundos antes de navegar para outra tela1111122222
      setTimeout(() => {
        navigation.navigate('Local', { numero }); 
      }, 2000);
    };
    const handleSelecionarCaso3 = (numero) => {
      // Troca o texto do botão
      if (textoBotao === 'Ambiente Seguro') {
        setTextoBotao3('FOGO DETECTADO');
        setCorBotao3('red');
        
      } else {
        setTextoBotao3('Ambiente Seguro');
        setCorBotao3('#81BE83');
      }
  
      // Atraso de 2 segundos antes de navegar para outra tela1111122222
      setTimeout(() => {
        navigation.navigate('Local', { numero }); 
      }, 2000);
    };
    const handleSelecionarCaso4 = (numero) => {
      // Troca o texto do botão
      if (textoBotao === 'Ambiente Seguro') {
        setTextoBotao4('FOGO DETECTADO');
        setCorBotao4('red');
      } else {
        setTextoBotao4('Ambiente Seguro');
        setCorBotao4('#81BE83');
      }
  
      // Atraso de 2 segundos antes de navegar para outra tela1111122222
      setTimeout(() => {
        navigation.navigate('Local', { numero }); 
      }, 2000);
    };

    const offline = () => {
      Alert.alert('Sem conexão.\n\nContate o suporte.');
    };
    const containerExiste1 = {
      backgroundColor: corBotao,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 25,
      width: 350,
      alignItems: 'center',
      marginTop: 25
    }
    const containerExiste2 = {
      backgroundColor: corBotao2,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 25,
      width: 350,
      alignItems: 'center',
      marginTop: 25
    }
    const containerExiste3 = {
      backgroundColor: corBotao3,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 25,
      width: 350,
      alignItems: 'center',
      marginTop: 25
    }
    const containerExiste4 = {
      backgroundColor: corBotao4,
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 25,
      marginTop: 25,
      width: 350,
      alignItems: 'center',
    }
    useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        setTextoBotao('Ambiente Seguro');
        setTextoBotao2('Ambiente Seguro');
        setTextoBotao3('Ambiente Seguro');
        setTextoBotao4('Ambiente Seguro');
        setCorBotao('#81BE83');
        setCorBotao2('#81BE83');
        setCorBotao3('#81BE83');
        setCorBotao4('#81BE83');
      });
  
      // Remove o listener quando o componente é desmontado
      return unsubscribe;
    }, [navigation]);

  return (
    <View style={Style.containerSensor}>
      <Text style={Style.Titulo}>Monitoramento SIMI:</Text>

      <View style={containerExiste1}><TouchableOpacity  onPress={() => handleSelecionarCaso(1)}><Text style={Style.textExiste}>Sensor 1 - {textoBotao}</Text></TouchableOpacity></View>

      <View style={containerExiste2}><TouchableOpacity onPress={() => handleSelecionarCaso2(2)}><Text style={Style.textExiste}>Sensor 2 - {textoBotao2}</Text></TouchableOpacity></View>

      <View style={containerExiste3}><TouchableOpacity onPress={() => handleSelecionarCaso3(3)}><Text style={Style.textExiste}>Sensor 3 - {textoBotao3}</Text></TouchableOpacity></View>

      <View style={containerExiste4}><TouchableOpacity onPress={() => handleSelecionarCaso4(4)}><Text style={Style.textExiste}>Sensor 4 - {textoBotao4}</Text></TouchableOpacity></View>
      <View style={Style.Desconectado}><TouchableOpacity onPress={() => offline()}><Text style={Style.textExiste}>Sensor 5 - Desconectado</Text></TouchableOpacity></View>
      
    </View>
  );
};

export default Principal;

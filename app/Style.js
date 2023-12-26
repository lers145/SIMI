import { StyleSheet } from "react-native";


const Style = StyleSheet.create({
  Container:{
    alignItems: 'center',
    
  },
  Image:{
    width: 300,
    height: 250,
    marginTop: 140,
    marginBottom: 80
  },
  ContainerLogin:{
    padding: 25,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#FFF',
    overflow: 'hidden',
  },
  ContainerButtons:{
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

 containerExiste1 :{
  backgroundColor: '#4147C0', // Default color for Sala 1
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 25,
  marginTop: 25,
  width: 350,
  alignItems: 'center',
  },
 Desconectado :{
    backgroundColor: '#C0C0C0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 25,
    width: 350,
    alignItems: 'center',
  },
  containerSensor : {
    flex: 1, // Use flex para que o container ocupe toda a tela
  alignItems: 'center',
  justifyContent: 'space-evenly', // Alinhe o conteúdo ao centro da tela
  backgroundColor: '#000',
  //paddingHorizontal: 20, // Adicione espaçamento horizontal
  //paddingTop: 20,
  
  },
  textExiste:{
    fontSize: 22,
    color: '#FFF',
  },
  corBotoes :{
    fontSize: 22,
    color: '#FFF',
  },
  Titulo : {
    fontSize: 26,
    color: '#FFF',
  }
});

export default Style
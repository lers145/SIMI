import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Dimensions } from 'react-native';
import Style from './Style';


const Mapa = ({ route, navigation }) => {
  const { valor, numero } = route.params;
  const [imagem, setImagem] = useState(null);
  const [inst, setInst] = useState('');
  const [X, setX] = useState(0);
  const [Sensor1, setSensor1] = useState(0);
  const [Sensor2, setSensor2] = useState(0);
  const [Sensor3, setSensor3] = useState(0);
  const [Sensor4, setSensor4] = useState(0);
  const screenWidth = Dimensions.get('window').width;
  const [botaoVisivel1, setBotaoVisivel1] = useState(true);
  const [botaoVisivel2, setBotaoVisivel2] = useState(true);
  const [botaoVisivel3, setBotaoVisivel3] = useState(true);
  const [botaoVisivel4, setBotaoVisivel4] = useState(true);

  const handleButtonPress1 = () => {
    Alert.alert('Rota alterada!');
    setX(1);
    setSensor1(1);
    setBotaoVisivel1(false);
  };
  const handleButtonPress2 = () => {
    Alert.alert('Rota alterada!');
    setX(2);
    setSensor2(1);
    setBotaoVisivel2(false);
  };
  const handleButtonPress3 = () => {
    Alert.alert('Rota alterada!');
    setX(3);
    setSensor3(1);
    setBotaoVisivel3(false);
  };
  const handleButtonPress4 = () => {
    Alert.alert('Rota alterada!');
    setX(4);
    setSensor4(1);
    setBotaoVisivel4(false);
  };


  const Voltar = () => {
    navigation.goBack();
  }

  useEffect(() => {
    // Lógica para definir a imagem e instrução com base no casoSelecionado e em x
    switch (numero) {
      //Casos de fuga 1
        case 1:
        // Se tiver na sala 1
        setBotaoVisivel1(false);
        
        if (valor === 11) {
            // problema o mapa não tá respondendo de forma inteligente de acordo com o botão selecionado
            // Rota de fuga 1
            if (X === 0) {
              setImagem(require('./assets/Mapa.jpg'));
              setInst('Siga até a saída');
            } // Rota de Fuga 2 
             // Rota de fuga 2
            else if (X === 2) {
                
                setImagem(require('./assets/Mapa.jpg'));
                setInst('Sensor 2');
            }
            else if (X === 3) {
                
                setImagem(require('./assets/Mapa.jpg'));
                setInst('Sensor 3');
            }
            else if (X === 4) {
                setImagem(require('./assets/Mapa.jpg'));
                setInst('Sensor 4');
            }
            else if (Sensor2 === 1 && X === 3) {
                setImagem(require('./assets/Mapa.jpg'));
                setInst('Sensor 2 e 3');
            }
            else if (Sensor2 === 1 && X === 4) {
                
                setImagem(require('./assets/Mapa.jpg'));
                setInst('Sensor 2 e 4');
            }
            else if (Sensor2 === 1 && Sensor3 === 1 && Sensor4 === 1) {
                setImagem(require('./assets/Mapa.jpg'));
                setInst('Todos os sensores');
            }
            
            else if (Sensor4 === 1 && Sensor3 == 1) {
                setImagem(require('./assets/Mapa.jpg'));
                setInst('Sensor 3 e 4');
            }
            
                
          }
          break;
          /* Se tiver na sala 2
          if (valor === 12) {
            setEsp('Caso 7');
            if (x === 0) {
              setImagem(require('./assets/Mapa.jpg'));
              setInst('Prossiga para a saída D');
            } else if (x === 1) {
              setImagem(require('./assets/Mapa.jpg'));
              setInst('Prossiga para a saída E');
            }
          }
          // Se tiver na sala 3
          if (valor === 13) {
            setEsp('Caso 7');
            if (x === 0) {
              setImagem(require('./assets/Mapa.jpg'));
              setInst('Prossiga para a saída D');
            } else if (x === 1) {
              setImagem(require('./assets/Mapa.jpg'));
              setInst('Prossiga para a saída E');
            }
          }
          // Se tiver na sala 4
          if (valor === 14) {
            setEsp1('Fogo Sala 2');
            setEsp2('Fogo Sala 3');
            setEsp3('Fogo Sala 4');
            if (x === 0) {
              setImagem(require('./assets/Mapa.jpg'));
              setInst('Prossiga para a saída D');
            } else if (x === 1) {
              setImagem(require('./assets/Mapa.jpg'));
              setInst('Prossiga para a saída E');

            }
          }
          // Se tiver na sala 5
          if (valor === 15) {
            setEsp1('Fogo Sala 2');
            setEsp2('Fogo Sala 3');
            setEsp3('Fogo Sala 4');
            if (x === 0) {
              setImagem(require('./assets/Mapa.jpg'));
              setInst('Prossiga para a saída D');
            } else if (x === 1) {
              setImagem(require('./assets/Mapa.jpg'));
              setInst('Prossiga para a saída E');
            }
          }
        break;
      case 2:
        if (valor === 10) {
            setEsp('Caso 7');
            if (x === 0) {
              setImagem(require('./assets/Mapa.jpg'));
              setInst('Prossiga para a saída D');
            } else if (x === 1) {
              setImagem(require('./assets/Mapa.jpg'));
              setInst('Prossiga para a saída E');
            }
          }
          if (valor === 11) {
              setEsp('Caso 7');
              if (x === 0) {
                setImagem(require('./assets/Mapa.jpg'));
                setInst('Prossiga para a saída D');
              } else if (x === 1) {
                setImagem(require('./assets/Mapa.jpg'));
                setInst('Prossiga para a saída E');
              }
            }
            if (valor === 12) {
              setEsp('Caso 7');
              if (x === 0) {
                setImagem(require('./assets/Mapa.jpg'));
                setInst('Prossiga para a saída D');
              } else if (x === 1) {
                setImagem(require('./assets/Mapa.jpg'));
                setInst('Prossiga para a saída E');
              }
            }
            if (valor === 13) {
              setEsp('Caso 7');
              if (x === 0) {
                setImagem(require('./assets/Mapa.jpg'));
                setInst('Prossiga para a saída D');
              } else if (x === 1) {
                setImagem(require('./assets/Mapa.jpg'));
                setInst('Prossiga para a saída E');
              }
            }
          break;
      case 3:
        if (valor === 10) {
            setEsp('Caso 7');
            if (x === 0) {
              setImagem(require('./assets/Mapa.jpg'));
              setInst('Prossiga para a saída D');
            } else if (x === 1) {
              setImagem(require('./assets/Mapa.jpg'));
              setInst('Prossiga para a saída E');
            }
          }
          if (valor === 11) {
              setEsp('Caso 7');
              if (x === 0) {
                setImagem(require('./assets/Mapa.jpg'));
                setInst('Prossiga para a saída D');
              } else if (x === 1) {
                setImagem(require('./assets/Mapa.jpg'));
                setInst('Prossiga para a saída E');
              }
            }
            if (valor === 12) {
              setEsp('Caso 7');
              if (x === 0) {
                setImagem(require('./assets/Mapa.jpg'));
                setInst('Prossiga para a saída D');
              } else if (x === 1) {
                setImagem(require('./assets/Mapa.jpg'));
                setInst('Prossiga para a saída E');
              }
            }
            if (valor === 13) {
              setEsp('Caso 7');
              if (x === 0) {
                setImagem(require('./assets/Mapa.jpg'));
                setInst('Prossiga para a saída D');
              } else if (x === 1) {
                setImagem(require('./assets/Mapa.jpg'));
                setInst('Prossiga para a saída E');
              }
            }
          break;
        case 4:
            if (valor === 10) {
                setEsp('Caso 7');
                if (x === 0) {
                  setImagem(require('./assets/Mapa.jpg'));
                  setInst('Prossiga para a saída D');
                } else if (x === 1) {
                  setImagem(require('./assets/Mapa.jpg'));
                  setInst('Prossiga para a saída E');
                }
              }
              if (valor === 11) {
                  setEsp('Caso 7');
                  if (x === 0) {
                    setImagem(require('./assets/Mapa.jpg'));
                    setInst('Prossiga para a saída D');
                  } else if (x === 1) {
                    setImagem(require('./assets/Mapa.jpg'));
                    setInst('Prossiga para a saída E');
                  }
                }
                if (valor === 12) {
                  setEsp('Caso 7');
                  if (x === 0) {
                    setImagem(require('./assets/Mapa.jpg'));
                    setInst('Prossiga para a saída D');
                  } else if (x === 1) {
                    setImagem(require('./assets/Mapa.jpg'));
                    setInst('Prossiga para a saída E');
                  }
                }
                if (valor === 13) {
                  setEsp('Caso 7');
                  if (x === 0) {
                    setImagem(require('./assets/Mapa.jpg'));
                    setInst('Prossiga para a saída D');
                  } else if (x === 1) {
                    setImagem(require('./assets/Mapa.jpg'));
                    setInst('Prossiga para a saída E');
                  }
                }
              break;*/
      default:
        setImagem(require('./assets/Mapa.jpg'));
        setInst('');
        break;
    }
  }, [numero, valor, Sensor1, Sensor2, Sensor3, Sensor4]);



  return (
    <View style={Style.containerSensor}>
      
        <Image style={{ height: screenWidth, width: screenWidth, resizeMode: 'contain' }} source={imagem}></Image>
      
      <Text style={Style.textExiste}>{inst}</Text>
      {botaoVisivel1 && (<View><TouchableOpacity onPress={handleButtonPress1} style={Style.containerExiste1}><Text style={Style.textExiste}>Fogo Sensor 1</Text></TouchableOpacity></View>)}
      {botaoVisivel2 && (<View><TouchableOpacity onPress={handleButtonPress2} style={Style.containerExiste1}><Text style={Style.textExiste}>Fogo Sensor 2</Text></TouchableOpacity></View>)}
      {botaoVisivel3 && (<View><TouchableOpacity onPress={handleButtonPress3} style={Style.containerExiste1}><Text style={Style.textExiste}>Fogo Sensor 3</Text></TouchableOpacity></View>)}
      {botaoVisivel4 && (<View><TouchableOpacity onPress={handleButtonPress4} style={Style.containerExiste1}><Text style={Style.textExiste}>Fogo Sensor 4</Text></TouchableOpacity></View>)}
      <View><TouchableOpacity onPress={Voltar} style={Style.containerExiste1}><Text style={Style.textExiste}>Voltar</Text></TouchableOpacity></View>
      
    </View>
  );
};

export default Mapa;

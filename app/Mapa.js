import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert, Dimensions } from 'react-native';
import Style from './Style';

const Mapa = ({ route, navigation }) => {
    const { valor, numero } = route.params;
    const [imagem, setImagem] = useState(null);
    const [inst, setInst] = useState('');
    const [X, setX] = useState(0);
    const [sensores, setSensores] = useState({
      Sensor1: 0,
      Sensor2: 0,
      Sensor3: 0,
      Sensor4: 0,
    });
    const [botoesVisiveis, setBotoesVisiveis] = useState({
      botaoVisivel1: true,
      botaoVisivel2: true,
      botaoVisivel3: true,
      botaoVisivel4: true,
    });
    const screenWidth = Dimensions.get('window').width;
  
    const handleButtonPress = (sensor) => {
      Alert.alert('Rota alterada!');
      setX(sensor);
      setSensores((prevState) => ({ ...prevState, [`Sensor${sensor}`]: 1 }));
      setBotoesVisiveis((prevState) => ({ ...prevState, [`botaoVisivel${sensor}`]: false }));
    };
  
    const Voltar = () => {
      navigation.goBack();
    };
  
    useEffect(() => {
        // Lógica para definir a imagem e instrução com base no casoSelecionado e em X
        switch (numero) {
          // Casos de fuga 1
          case 1:
             setBotoesVisiveis((prevState) => ({ ...prevState, botaoVisivel1: false }));
            //ROTAS DE FUGA PARTINDO DA SALA 5
            if (valor === 11) {
              // Rota de fuga 1
              if (X === 0) {
                setImagem(require('./assets/Sensor1Sala1.png'));
                setInst('Siga até a saída');
              } else {
                // Sensor 2
                if (sensores.Sensor2 === 1 && sensores.Sensor3 === 0 && sensores.Sensor4 === 0) {
                  setImagem(require('./assets/Sensor1e2Sala1.png'));
                  setInst('Siga até a saída');

                }
                // Sensor 3
                else if (sensores.Sensor3 === 1 && sensores.Sensor2 === 0 && sensores.Sensor4 === 0) {
                  setImagem(require('./assets/Sensor1e3Sala1.png'));
                  setInst('Siga até a saída');
                }
                // Sensor 4
                else if (sensores.Sensor4 === 1 && sensores.Sensor2 === 0 && sensores.Sensor3 === 0) {
                  setImagem(require('./assets/Sensor1e4Sala1.png'));
                  setInst('Siga até a saída');
                }
                // Sensor 2 e 3
                else if (sensores.Sensor2 === 1 && sensores.Sensor3 === 1 && sensores.Sensor4 === 0 ) {
                  setImagem(require('./assets/Sensor1e2e3Sala1.png'));
                  setInst('Siga até a saída');
                }
                // Sensor 2 e 4
                else if (sensores.Sensor2 === 1 && sensores.Sensor4 === 1 && sensores.Sensor3 === 0) {
                  setImagem(require('./assets/Sensor1e2e4Sala1.png'));
                  setInst('Siga até a saída');
                }
                
                
                // Sensor 3 e 4
                else if (sensores.Sensor4 === 1 && sensores.Sensor3 === 1 && sensores.Sensor2 === 0) {
                  setImagem(require('./assets/Sensor1e3e4Sala1.png'));
                  setInst('Siga até a saída');
                }
                // Todos os sensores
                else if (sensores.Sensor4 === 1 && sensores.Sensor3 === 1 && sensores.Sensor2 === 1) {
                  //setImagem(require('./assets/Mapa.png'));
                  setInst('Siga até a saída\n\n Há mais oxigenio proximo ao chão!\n\n Se for atravessar o fogo esteja molhado.\n\nNão retire suas roupas caso tenha contato com fogo.\n\nMantenha a calma os bombeiros já estão indo ao seu resgate.');
                }
              }
            }
              //ROTAS DE FUGA PARTINDO DA SALA 2
              else if (valor === 12) {
                // Rota de fuga 1
                if (X === 0) {
                  setImagem(require('./assets/Sensor1Sala2.png'));
                  setInst('Siga até a saída');
                } else {
                  // Sensor 2
                  if (sensores.Sensor2 === 1 && sensores.Sensor3 === 0 && sensores.Sensor4 === 0) {
                    setImagem(require('./assets/Sensor1e2Sala2.png'));
                    setInst('Siga até a saída');
  
                  }
                  // Sensor 3
                  else if (sensores.Sensor3 === 1 && sensores.Sensor2 === 0 && sensores.Sensor4 === 0) {
                    setImagem(require('./assets/Sensor1e3Sala2.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 4
                  else if (sensores.Sensor4 === 1 && sensores.Sensor2 === 0 && sensores.Sensor3 === 0) {
                    setImagem(require('./assets/Sensor1e4Sala2.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 2 e 3
                  else if (sensores.Sensor2 === 1 && sensores.Sensor3 === 1 && sensores.Sensor4 === 0 ) {
                    setImagem(require('./assets/Sensor1e2e3Sala2.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 2 e 4
                  else if (sensores.Sensor2 === 1 && sensores.Sensor4 === 1 && sensores.Sensor3 === 0) {
                    setImagem(require('./assets/Sensor1e2e4Sala2.png'));
                    setInst('Siga até a saída');
                  }
                  // Todos os sensores
                  
                  // Sensor 3 e 4
                  else if (sensores.Sensor4 === 1 && sensores.Sensor3 === 1 && sensores.Sensor2 === 0) {
                    setImagem(require('./assets/Sensor1e3e4Sala2.png'));
                    setInst('Siga até a saída');
                  }
                  else if (sensores.Sensor4 === 1 && sensores.Sensor3 === 1 && sensores.Sensor2 === 1) {
                    //setImagem(require('./assets/Mapa.png'));
                  setInst('Siga até a saída\n\n Há mais oxigenio proximo ao chão!\n\n Se for atravessar o fogo esteja molhado.\n\nNão retire suas roupas caso tenha contato com fogo.\n\nMantenha a calma os bombeiros já estão indo ao seu resgate.');
                  }
                }
              }
              //ROTAS DE FUGA PARTINDO DA SALA 3
              else if (valor === 13) {
                // Rota de fuga 1
                if (X === 0) {
                  setImagem(require('./assets/Sensor1Sala3.png'));
                  setInst('Siga até a saída');
                } else {
                  // Sensor 2
                  if (sensores.Sensor2 === 1 && sensores.Sensor3 === 0 && sensores.Sensor4 === 0) {
                    setImagem(require('./assets/Sensor1e2Sala3.png'));
                    setInst('Siga até a saída');
  
                  }
                  // Sensor 3
                  else if (sensores.Sensor3 === 1 && sensores.Sensor2 === 0 && sensores.Sensor4 === 0) {
                    setImagem(require('./assets/Sensor1e3Sala3.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 4
                  else if (sensores.Sensor4 === 1 && sensores.Sensor2 === 0 && sensores.Sensor3 === 0) {
                    setImagem(require('./assets/Sensor1e4Sala3.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 2 e 3
                  else if (sensores.Sensor2 === 1 && sensores.Sensor3 === 1 && sensores.Sensor4 === 0 ) {
                    setImagem(require('./assets/Sensor1e2e3Sala3.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 2 e 4
                  else if (sensores.Sensor2 === 1 && sensores.Sensor4 === 1 && sensores.Sensor3 === 0) {
                    setImagem(require('./assets/Sensor1e2e4Sala3.png'));
                    setInst('Siga até a saída');
                  }
                  // Todos os sensores 
                  
                  // Sensor 3 e 4
                  else if (sensores.Sensor4 === 1 && sensores.Sensor3 === 1 && sensores.Sensor2 === 0) {
                    setImagem(require('./assets/Sensor1e3e4Sala3.png'));
                    setInst('Siga até a saída');
                  }
                  else if (sensores.Sensor4 === 1 && sensores.Sensor3 === 1 && sensores.Sensor2 === 1) {
                    //setImagem(require('./assets/Mapa.png'));
                  setInst('Siga até a saída\n\n Há mais oxigenio proximo ao chão!\n\n Se for atravessar o fogo esteja molhado.\n\nNão retire suas roupas caso tenha contato com fogo.\n\nMantenha a calma os bombeiros já estão indo ao seu resgate.');
                  }
                }
              }
            
            break;

            case 2:
             setBotoesVisiveis((prevState) => ({ ...prevState, botaoVisivel2: false }));
            //ROTAS DE FUGA PARTINDO DA SALA 5
            if (valor === 11) {
              // Rota de fuga 1
              if (X === 0) {
                setImagem(require('./assets/Sensor2Sala1.png'));
                setInst('Siga até a saída');
              } else {
                // Sensor 2
                if (sensores.Sensor1 === 1 && sensores.Sensor3 === 0 && sensores.Sensor4 === 0) {
                  setImagem(require('./assets/Sensor1e2Sala1.png'));
                  setInst('Siga até a saída');

                }
                // Sensor 3
                else if (sensores.Sensor3 === 1 && sensores.Sensor1 === 0 && sensores.Sensor4 === 0) {
                  setImagem(require('./assets/Sensor2e3Sala1.png'));
                  setInst('Siga até a saída');
                }
                // Sensor 4
                else if (sensores.Sensor4 === 1 && sensores.Sensor1 === 0 && sensores.Sensor3 === 0) {
                  setImagem(require('./assets/Sensor2e4Sala1.png'));
                  setInst('Siga até a saída');
                }
                // Sensor 2 e 3
                else if (sensores.Sensor1 === 1 && sensores.Sensor3 === 1 && sensores.Sensor4 === 0 ) {
                  setImagem(require('./assets/Sensor1e2e3Sala1.png'));
                  setInst('Siga até a saída');
                }
                // Sensor 2 e 4
                else if (sensores.Sensor1 === 1 && sensores.Sensor4 === 1 && sensores.Sensor3 === 0) {
                  setImagem(require('./assets/Sensor1e2e4Sala1.png'));
                  setInst('Siga até a saída');
                }
                
                
                // Sensor 3 e 4
                else if (sensores.Sensor4 === 1 && sensores.Sensor3 === 1 && sensores.Sensor1 === 0) {
                  setImagem(require('./assets/Sensor2e3e4Sala1.png'));
                  setInst('Siga até a saída');
                }
                // Todos os sensores
                else if (sensores.Sensor4 === 1 && sensores.Sensor3 === 1 && sensores.Sensor1 === 1) {
                  //setImagem(require('./assets/Mapa.png'));
                  setInst('Siga até a saída\n\n Há mais oxigenio proximo ao chão!\n\n Se for atravessar o fogo esteja molhado.\n\nNão retire suas roupas caso tenha contato com fogo.\n\nMantenha a calma os bombeiros já estão indo ao seu resgate.');
                }
              }
            }
              //ROTAS DE FUGA PARTINDO DA SALA 2
              else if (valor === 12) {
                // Rota de fuga 1
                if (X === 0) {
                  setImagem(require('./assets/Sensor2Sala2.png'));
                  setInst('Siga até a saída');
                } else {
                  // Sensor 2
                  if (sensores.Sensor1 === 1 && sensores.Sensor3 === 0 && sensores.Sensor4 === 0) {
                    setImagem(require('./assets/Sensor1e2Sala2.png'));
                    setInst('Siga até a saída');
  
                  }
                  // Sensor 3
                  else if (sensores.Sensor3 === 1 && sensores.Sensor1 === 0 && sensores.Sensor4 === 0) {
                    setImagem(require('./assets/Sensor2e3Sala2.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 4
                  else if (sensores.Sensor4 === 1 && sensores.Sensor1 === 0 && sensores.Sensor3 === 0) {
                    setImagem(require('./assets/Sensor2e4Sala2.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 2 e 3
                  else if (sensores.Sensor1 === 1 && sensores.Sensor3 === 1 && sensores.Sensor4 === 0 ) {
                    setImagem(require('./assets/Sensor1e2e3Sala2.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 2 e 4
                  else if (sensores.Sensor1 === 1 && sensores.Sensor4 === 1 && sensores.Sensor3 === 0) {
                    setImagem(require('./assets/Sensor1e2e4Sala2.png'));
                    setInst('Siga até a saída');
                  }
                  // Todos os sensores
                  
                  // Sensor 3 e 4
                  else if (sensores.Sensor4 === 1 && sensores.Sensor3 === 1 && sensores.Sensor1 === 0) {
                    setImagem(require('./assets/Sensor2e3e4Sala2.png'));
                    setInst('Siga até a saída');
                  }
                  else if (sensores.Sensor4 === 1 && sensores.Sensor3 === 1 && sensores.Sensor1 === 1) {
                    //setImagem(require('./assets/Mapa.png'));
                  setInst('Siga até a saída\n\n Há mais oxigenio proximo ao chão!\n\n Se for atravessar o fogo esteja molhado.\n\nNão retire suas roupas caso tenha contato com fogo.\n\nMantenha a calma os bombeiros já estão indo ao seu resgate.');
                  }
                }
              }
              //ROTAS DE FUGA PARTINDO DA SALA 3
              else if (valor === 13) {
                // Rota de fuga 1
                if (X === 0) {
                  setImagem(require('./assets/Sensor2Sala3.png'));
                  setInst('Siga até a saída');
                } else {
                  // Sensor 2
                  if (sensores.Sensor1 === 1 && sensores.Sensor3 === 0 && sensores.Sensor4 === 0) {
                    setImagem(require('./assets/Sensor1e2Sala3.png'));
                    setInst('Siga até a saída');
  
                  }
                  // Sensor 3
                  else if (sensores.Sensor3 === 1 && sensores.Sensor1 === 0 && sensores.Sensor4 === 0) {
                    setImagem(require('./assets/Sensor2e3Sala3.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 4
                  else if (sensores.Sensor4 === 1 && sensores.Sensor1 === 0 && sensores.Sensor3 === 0) {
                    setImagem(require('./assets/Sensor2e4Sala3.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 2 e 3
                  else if (sensores.Sensor1 === 1 && sensores.Sensor3 === 1 && sensores.Sensor4 === 0 ) {
                    setImagem(require('./assets/Sensor1e2e3Sala3.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 2 e 4
                  else if (sensores.Sensor1 === 1 && sensores.Sensor4 === 1 && sensores.Sensor3 === 0) {
                    setImagem(require('./assets/Sensor1e2e4Sala3.png'));
                    setInst('Siga até a saída');
                  }
                  // Todos os sensores
                  
                  // Sensor 3 e 4
                  else if (sensores.Sensor4 === 1 && sensores.Sensor3 === 1 && sensores.Sensor1 === 0) {
                    setImagem(require('./assets/Sensor2e3e4Sala3.png'));
                    setInst('Siga até a saída');
                  }
                  else if (sensores.Sensor4 === 1 && sensores.Sensor3 === 1 && sensores.Sensor1 === 1) {
                    //setImagem(require('./assets/Mapa.png'));
                  setInst('Siga até a saída\n\n Há mais oxigenio proximo ao chão!\n\n Se for atravessar o fogo esteja molhado.\n\nNão retire suas roupas caso tenha contato com fogo.\n\nMantenha a calma os bombeiros já estão indo ao seu resgate.');
                  }
                }
              }
            
            break;
            
            case 3:
             setBotoesVisiveis((prevState) => ({ ...prevState, botaoVisivel3: false }));
            //ROTAS DE FUGA PARTINDO DA SALA 5
            if (valor === 11) {
              // Rota de fuga 1
              if (X === 0) {
                setImagem(require('./assets/Sensor3Sala1.png'));
                setInst('Siga até a saída');
              } else {
                // Sensor 2
                if (sensores.Sensor2 === 1 && sensores.Sensor1 === 0 && sensores.Sensor4 === 0) {
                  setImagem(require('./assets/Sensor2e3Sala1.png'));
                  setInst('Siga até a saída');

                }
                // Sensor 3
                else if (sensores.Sensor1 === 1 && sensores.Sensor2 === 0 && sensores.Sensor4 === 0) {
                  setImagem(require('./assets/Sensor1e3Sala1.png'));
                  setInst('Siga até a saída');
                }
                // Sensor 4
                else if (sensores.Sensor4 === 1 && sensores.Sensor2 === 0 && sensores.Sensor1 === 0) {
                  setImagem(require('./assets/Sensor3e4Sala1.png'));
                  setInst('Siga até a saída');
                }
                // Sensor 2 e 3
                else if (sensores.Sensor2 === 1 && sensores.Sensor1 === 1 && sensores.Sensor4 === 0 ) {
                  setImagem(require('./assets/Sensor1e2e3Sala1.png'));
                  setInst('Siga até a saída');
                }
                // Sensor 2 e 4
                else if (sensores.Sensor2 === 1 && sensores.Sensor4 === 1 && sensores.Sensor1 === 0) {
                  setImagem(require('./assets/Sensor2e3e4Sala1.png'));
                  setInst('Siga até a saída');
                }
                
                
                // Sensor 3 e 4
                else if (sensores.Sensor4 === 1 && sensores.Sensor1 === 1 && sensores.Sensor2 === 0) {
                  setImagem(require('./assets/Sensor1e3e4Sala1.png'));
                  setInst('Siga até a saída');
                }
                // Todos os sensores
                else if (sensores.Sensor4 === 1 && sensores.Sensor1 === 1 && sensores.Sensor2 === 1) {
                  //setImagem(require('./assets/Mapa.png'));
                  setInst('Siga até a saída\n\n Há mais oxigenio proximo ao chão!\n\n Se for atravessar o fogo esteja molhado.\n\nNão retire suas roupas caso tenha contato com fogo.\n\nMantenha a calma os bombeiros já estão indo ao seu resgate.');
                }
              }
            }

              //ROTAS DE FUGA PARTINDO DA SALA 2
              else if (valor === 12) {
                // Rota de fuga 1
                if (X === 0) {
                  setImagem(require('./assets/Sensor3Sala2.png'));
                  setInst('Siga até a saída');
                } else {
                  // Sensor 2
                  if (sensores.Sensor2 === 1 && sensores.Sensor1 === 0 && sensores.Sensor4 === 0) {
                    setImagem(require('./assets/Sensor2e3Sala2.png'));
                    setInst('Siga até a saída');
  
                  }
                  // Sensor 3
                  else if (sensores.Sensor1 === 1 && sensores.Sensor2 === 0 && sensores.Sensor4 === 0) {
                    setImagem(require('./assets/Sensor1e3Sala2.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 4
                  else if (sensores.Sensor4 === 1 && sensores.Sensor2 === 0 && sensores.Sensor1 === 0) {
                    setImagem(require('./assets/Sensor3e4Sala2.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 2 e 3
                  else if (sensores.Sensor2 === 1 && sensores.Sensor1 === 1 && sensores.Sensor4 === 0 ) {
                    setImagem(require('./assets/Sensor1e2e3Sala2.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 2 e 4
                  else if (sensores.Sensor2 === 1 && sensores.Sensor4 === 1 && sensores.Sensor1 === 0) {
                    setImagem(require('./assets/Sensor2e3e4Sala2.png'));
                    setInst('Siga até a saída');
                  }
                  // Todos os sensores
                  
                  // Sensor 3 e 4
                  else if (sensores.Sensor4 === 1 && sensores.Sensor1 === 1 && sensores.Sensor2 === 0) {
                    setImagem(require('./assets/Sensor1e3e4Sala2.png'));
                    setInst('Siga até a saída');
                  }
                  else if (sensores.Sensor4 === 1 && sensores.Sensor1 === 1 && sensores.Sensor2 === 1) {
                    //setImagem(require('./assets/Mapa.png'));
                  setInst('Siga até a saída\n\n Há mais oxigenio proximo ao chão!\n\n Se for atravessar o fogo esteja molhado.\n\nNão retire suas roupas caso tenha contato com fogo.\n\nMantenha a calma os bombeiros já estão indo ao seu resgate.');
                  }
                }
              }
              //ROTAS DE FUGA PARTINDO DA SALA 3
              else if (valor === 13) {
                // Rota de fuga 1
                if (X === 0) {
                  setImagem(require('./assets/Sensor3Sala3.png'));
                  setInst('Siga até a saída');
                } else {
                  // Sensor 2
                  if (sensores.Sensor2 === 1 && sensores.Sensor1 === 0 && sensores.Sensor4 === 0) {
                    setImagem(require('./assets/Sensor2e3Sala3.png'));
                    setInst('Siga até a saída');
  
                  }
                  // Sensor 3
                  else if (sensores.Sensor1 === 1 && sensores.Sensor2 === 0 && sensores.Sensor4 === 0) {
                    setImagem(require('./assets/Sensor1e3Sala3.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 4
                  else if (sensores.Sensor4 === 1 && sensores.Sensor2 === 0 && sensores.Sensor1 === 0) {
                    setImagem(require('./assets/Sensor3e4Sala3.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 2 e 3
                  else if (sensores.Sensor2 === 1 && sensores.Sensor1 === 1 && sensores.Sensor4 === 0 ) {
                    setImagem(require('./assets/Sensor1e2e3Sala3.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 2 e 4
                  else if (sensores.Sensor2 === 1 && sensores.Sensor4 === 1 && sensores.Sensor1 === 0) {
                    setImagem(require('./assets/Sensor2e3e4Sala3.png'));
                    setInst('Siga até a saída');
                  }
                  // Todos os sensores
                  
                  // Sensor 3 e 4
                  else if (sensores.Sensor4 === 1 && sensores.Sensor1 === 1 && sensores.Sensor2 === 0) {
                    setImagem(require('./assets/Sensor1e3e4Sala3.png'));
                    setInst('Siga até a saída');
                  }
                  else if (sensores.Sensor4 === 1 && sensores.Sensor1 === 1 && sensores.Sensor2 === 1) {
                    //setImagem(require('./assets/Mapa.png'));
                  setInst('Siga até a saída\n\n Há mais oxigenio proximo ao chão!\n\n Se for atravessar o fogo esteja molhado.\n\nNão retire suas roupas caso tenha contato com fogo.\n\nMantenha a calma os bombeiros já estão indo ao seu resgate.');
                  }
                }
              }
            
            break;

            case 4:
             setBotoesVisiveis((prevState) => ({ ...prevState, botaoVisivel4: false }));
            //ROTAS DE FUGA PARTINDO DA SALA 5
              if (valor === 11) {
              // Rota de fuga 1
              if (X === 0) {
                setImagem(require('./assets/Sensor4Sala1.png'));
                setInst('Siga até a saída');
              } else {
                // Sensor 2
                if (sensores.Sensor2 === 1 && sensores.Sensor3 === 0 && sensores.Sensor1 === 0) {
                  setImagem(require('./assets/Sensor2e4Sala1.png'));
                  setInst('Siga até a saída');

                }
                // Sensor 3
                else if (sensores.Sensor3 === 1 && sensores.Sensor2 === 0 && sensores.Sensor1 === 0) {
                  setImagem(require('./assets/Sensor3e4Sala1.png'));
                  setInst('Siga até a saída');
                }
                // Sensor 4
                else if (sensores.Sensor1 === 1 && sensores.Sensor2 === 0 && sensores.Sensor3 === 0) {
                  setImagem(require('./assets/Sensor1e4Sala1.png'));
                  setInst('Siga até a saída');
                }
                // Sensor 2 e 3
                else if (sensores.Sensor2 === 1 && sensores.Sensor3 === 1 && sensores.Sensor1 === 0 ) {
                  setImagem(require('./assets/Sensor2e3e4Sala1.png'));
                  setInst('Siga até a saída');
                }
                // Sensor 2 e 4
                else if (sensores.Sensor2 === 1 && sensores.Sensor1 === 1 && sensores.Sensor3 === 0) {
                  setImagem(require('./assets/Sensor1e2e4Sala1.png'));
                  setInst('Siga até a saída');
                }
                
                
                // Sensor 3 e 4
                else if (sensores.Sensor1 === 1 && sensores.Sensor3 === 1 && sensores.Sensor2 === 0) {
                  setImagem(require('./assets/Sensor1e3e4Sala1.png'));
                  setInst('Siga até a saída');
                }
                // Todos os sensores
                else if (sensores.Sensor1 === 1 && sensores.Sensor3 === 1 && sensores.Sensor2 === 1) {
                  //setImagem(require('./assets/Mapa.png'));
                  setInst('Siga até a saída\n\n Há mais oxigenio proximo ao chão!\n\n Se for atravessar o fogo esteja molhado.\n\nNão retire suas roupas caso tenha contato com fogo.\n\nMantenha a calma os bombeiros já estão indo ao seu resgate.');
                }
              }}
              //ROTAS DE FUGA PARTINDO DA SALA 2
               else if (valor === 12) {
                // Rota de fuga 1
                if (X === 0) {
                  setImagem(require('./assets/Sensor4Sala2.png'));
                  setInst('Siga até a saída');
                } else {
                  // Sensor 2
                  if (sensores.Sensor2 === 1 && sensores.Sensor3 === 0 && sensores.Sensor1 === 0) {
                    setImagem(require('./assets/Sensor2e4Sala2.png'));
                    setInst('Siga até a saída');
  
                  }
                  // Sensor 3
                  else if (sensores.Sensor3 === 1 && sensores.Sensor2 === 0 && sensores.Sensor1 === 0) {
                    setImagem(require('./assets/Sensor3e4Sala2.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 4
                  else if (sensores.Sensor1 === 1 && sensores.Sensor2 === 0 && sensores.Sensor3 === 0) {
                    setImagem(require('./assets/Sensor1e4Sala2.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 2 e 3
                  else if (sensores.Sensor2 === 1 && sensores.Sensor3 === 1 && sensores.Sensor1 === 0 ) {
                    setImagem(require('./assets/Sensor2e3e4Sala2.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 2 e 4
                  else if (sensores.Sensor2 === 1 && sensores.Sensor1 === 1 && sensores.Sensor3 === 0) {
                    setImagem(require('./assets/Sensor1e2e4Sala2.png'));
                    setInst('Siga até a saída');
                  }
                  // Todos os sensores
                  
                  // Sensor 3 e 4
                  else if (sensores.Sensor1 === 1 && sensores.Sensor3 === 1 && sensores.Sensor2 === 0) {
                    setImagem(require('./assets/Sensor1e3e4Sala2.png'));
                    setInst('Siga até a saída');
                  }
                  else if (sensores.Sensor1 === 1 && sensores.Sensor3 === 1 && sensores.Sensor2 === 1) {
                    //setImagem(require('./assets/Mapa.png'));
                  setInst('Siga até a saída\n\n Há mais oxigenio proximo ao chão!\n\n Se for atravessar o fogo esteja molhado.\n\nNão retire suas roupas caso tenha contato com fogo.\n\nMantenha a calma os bombeiros já estão indo ao seu resgate.');
                  }
                }
              }
              //ROTAS DE FUGA PARTINDO DA SALA 3
              else if (valor === 13) {
                // Rota de fuga 1
                if (X === 0) {
                  setImagem(require('./assets/Sensor4Sala3.png'));
                  setInst('Siga até a saída');
                } else {
                  // Sensor 2
                  if (sensores.Sensor2 === 1 && sensores.Sensor3 === 0 && sensores.Sensor1 === 0) {
                    setImagem(require('./assets/Sensor2e4Sala3.png'));
                    setInst('Siga até a saída');
  
                  }
                  // Sensor 3
                  else if (sensores.Sensor3 === 1 && sensores.Sensor2 === 0 && sensores.Sensor1 === 0) {
                    setImagem(require('./assets/Sensor3e4Sala3.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 4
                  else if (sensores.Sensor1 === 1 && sensores.Sensor2 === 0 && sensores.Sensor3 === 0) {
                    setImagem(require('./assets/Sensor1e4Sala3.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 2 e 3
                  else if (sensores.Sensor2 === 1 && sensores.Sensor3 === 1 && sensores.Sensor1 === 0 ) {
                    setImagem(require('./assets/Sensor2e3e4Sala3.png'));
                    setInst('Siga até a saída');
                  }
                  // Sensor 2 e 4
                  else if (sensores.Sensor2 === 1 && sensores.Sensor1 === 1 && sensores.Sensor3 === 0) {
                    setImagem(require('./assets/Sensor1e2e4Sala3.png'));
                    setInst('Siga até a saída');
                  }
                  // Todos os sensores 
                  
                  // Sensor 3 e 4
                  else if (sensores.Sensor1 === 1 && sensores.Sensor3 === 1 && sensores.Sensor2 === 0) {
                    setImagem(require('./assets/Sensor1e3e4Sala3.png'));
                    setInst('Siga até a saída');
                  }
                  else if (sensores.Sensor1 === 1 && sensores.Sensor3 === 1 && sensores.Sensor2 === 1) {
                    //setImagem(require('./assets/Mapa.png'));
                  setInst('Siga até a saída\n\n Há mais oxigenio proximo ao chão!\n\n Se for atravessar o fogo esteja molhado.\n\nNão retire suas roupas caso tenha contato com fogo.\n\nMantenha a calma os bombeiros já estão indo ao seu resgate.');
                  }
                }
              }
            
            break;
        // Outros casos
        default:
      
          setInst('');
          break;
      }
    }, [numero, valor, sensores, X]);

    console.log(valor);
  
  
    return (
      <View style={Style.containerSensor}>
        <Image style={{ height: screenWidth, width: screenWidth, resizeMode: 'contain' }} source={imagem} />
        <Text style={Style.textExiste}>{inst}</Text>
  
        {Object.keys(botoesVisiveis).map((sensor) => (
          botoesVisiveis[sensor] && (
            <View key={sensor}>
              <TouchableOpacity onPress={() => handleButtonPress(sensor.replace('botaoVisivel', ''))} style={Style.containerExiste1}>
                <Text style={Style.textExiste}>{`Fogo ${sensor.replace('botaoVisivel', '')}`}</Text>
              </TouchableOpacity>
            </View>
          )
        ))}
  
        <TouchableOpacity onPress={Voltar} style={Style.containerExiste1}>
          <Text style={Style.textExiste}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Mapa;
  
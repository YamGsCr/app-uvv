import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from '../styles/styles';
import Oceanos from '../Componentes/Oceanos';

const OceanoScreen = ({ navigation }) => {
  const [indice, setIndice] = useState(0);

  const oceanos = [
    {
      image: require('../assets/atlantico.jpeg'),
      nome: 'Oceano Atlântico',
      desc: 'É o segundo maior oceano do mundo.',
    },
    {
      image: require('../assets/pacifico.webp'),
      nome: 'Oceano Pacífico',
      desc: 'É o maior oceano do mundo.',
    },
  ];

  const proximoOceano = () => {
    setIndice((prevIndex) => (prevIndex + 1) % oceanos.length);
  };

  const anteriorOceano = () => {
    setIndice((prevIndex) => (prevIndex - 1 + oceanos.length) % oceanos.length);
  };

  const oceanoAtual = oceanos[indice];

  return (
    <SafeAreaView style={styles.container}>
      {oceanos.length > 0 && (
        <Oceanos
          nome={oceanoAtual.nome}
          image={oceanoAtual.image}
          desc={oceanoAtual.desc}
        />
      )}
      <View style={styles.containerSetinha}>
        <TouchableOpacity style={styles.containerBotao} onPress={anteriorOceano}>
          <Text style={styles.textoSecao}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerBotao} onPress={proximoOceano}>
          <Text style={styles.textoSecao}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.containerBotao} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textoSecao}>Retornar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OceanoScreen;

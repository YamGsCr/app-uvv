import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from '../styles/styles';
import Flora from '../Componentes/Oceanos';

const FloraScreen = ({ navigation }) => {
  const [indice, setIndice] = useState(0);

  const flora = [
    {
      image: require('../assets/rodoficeas.jpeg'),
      habitat: 'Oceanos',
      nome: 'Rodófitas',
      desc: 'Nos oceanos, as rodofíceas crescem desde as regiões de águas tropicais até polares, embora algumas espécies apresentem uma faixa de distribuição mais restrita. Normalmente, são encontradas crescendo desde a região entremarés até o infralitoral, nos limites mais inferiores de penetração de luz.',
    }
  ];

  const proximoFlora = () => {
    setIndice((prevIndex) => (prevIndex + 1) % flora.length);
  };

  const anteriorFlora = () => {
    setIndice((prevIndex) => (prevIndex - 1 + flora.length) % flora.length);
  };

  const floraAtual = flora[indice];

  return (
    <SafeAreaView style={styles.container}>
      {flora.length > 0 && (
        <Flora
          nome={floraAtual.nome}
          image={floraAtual.image}
          desc={floraAtual.desc}
        />
      )}
      <View style={styles.containerSetinha}>
        <TouchableOpacity style={styles.containerBotao} onPress={anteriorFlora}>
          <Text style={styles.textoSecao}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerBotao} onPress={proximoFlora}>
          <Text style={styles.textoSecao}>{'>'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.containerBotao} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textoSecao}>Retornar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FloraScreen;

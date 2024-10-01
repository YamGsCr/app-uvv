import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from '../styles/styles';
import Peixes from '../Componentes/Peixes';
import Filtro from '../Componentes/Filtro';

const PeixeScreen = ({ navigation }) => {
  const [filtro, setFiltro] = useState('Todos');
  const [indice, setIndice] = useState(0);
  const peixes = [
    {
      image: require('../assets/peixepalhaco.jpeg'),
      nome: 'Peixe-palhaço',
      habitat: ['Pacífico', 'Índico'],
      desc: 'Com coloração alaranjada e listras brancas, habita águas calmas e pouco profundas dos oceanos Pacífico e Índico. Todos os peixes-palhaços nascem machos e têm a capacidade de se tornarem fêmeas de acordo com a necessidade durante a reprodução.'
    },
    {
      image: require('../assets/marlim.webp'),
      nome: 'Marlim-azul',
      habitat: ['Atlântico', 'Pacífico'],
      desc: 'Maior peixe de bico do mundo é considerado o "rei dos mares" e pode ser encontrado na costa brasileira. Um sonho de muitos, uma realidade para poucos. É a pescaria do rei dos mares, o marlim-azul, o mais cobiçado da pesca oceânica.'
    },
    {
      image: require('../assets/Baiacu.jpg'),
      nome: 'Baiacu',
      habitat: ['Atlântico', 'Índico', 'Pacífico'],
      desc: 'Quando se assustam engolem água ou ar inflando muito o corpo e atiram pequenos espinhos. É um peixe de hábitos solitários, formando pequenos grupos apenas no verão, quando procriam.'
    },
    {
      image: require('../assets/anchova.jpg'),
      nome: 'Anchova',
      habitat: ['Atlântico'],
      desc: 'A anchova é um peixe de excelente qualidade e bastante apreciado pelo seu sabor. Facilmente encontrado em feiras, peixarias e mercados.'
    }
  ];
  const peixesFiltrados = peixes.filter(peixe => {
    return filtro === 'Todos' || peixe.habitat.some(hab => hab === filtro);
  });
  const proximoPeixe = () => {
    setIndice((prevIndex) => (prevIndex + 1) % peixesFiltrados.length);
  };
  const peixeAtual = peixesFiltrados[indice]

  return (
    <SafeAreaView style={styles.container}>
      <Filtro
        filtros={['Todos', 'Pacífico', 'Atlântico', 'Índico']}
        onSelectFiltro={setFiltro}
      />
      {peixesFiltrados.length > 0 && (
        <Peixes
          nome={peixeAtual.nome}
          image={peixeAtual.image}
          habitat={peixeAtual.habitat}
          desc={peixeAtual.desc}
        />
      )}
      <View style={styles.containerSetinha}>
      <TouchableOpacity style={styles.containerBotao} onPress={() => setIndice((prevIndex) => (prevIndex - 1 + peixesFiltrados.length)%peixesFiltrados.length)}>
        <Text style={styles.textoSecao}> {'<'} </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerBotao} onPress={proximoPeixe}>
        <Text style={styles.textoSecao}> > </Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.containerBotao} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.textoSecao}>Retornar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PeixeScreen;

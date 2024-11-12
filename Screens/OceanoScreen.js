import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import styles from '../styles/styles';
import Oceanos from '../Componentes/Oceanos';

const OceanoScreen = ({ navigation }) => {
  const [indice, setIndice] = useState(0);
  const [waveHeight, setWaveHeight] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const oceanos = [
    {
      image: require('../assets/atlantico.jpeg'),
      nome: 'Itaparica',
      desc: 'É uma das praias mais conhecidas de Vila Velha - ES.',
      latitude: -20.3297,
      longitude: -40.2925,
      timezone: 'America/Sao_Paulo'
    },
    {
      image: require('../assets/pacifico.webp'),
      nome: 'Camburi',
      desc: 'É uma das praias mais populares e famosas do estado de ES, ficando em Vitória.',
      latitude: -20.3155,
      longitude: -40.2875,
      timezone: 'America/Sao_Paulo'
    },
  ];

  const fetchWaveHeight = async (latitude, longitude, timezone) => {
    try {
      setLoading(true);
      const response = await axios.get('https://marine-api.open-meteo.com/v1/marine', {
        params: {
          latitude: latitude,
          longitude: longitude,
          current: 'wave_height',
          hourly: 'wave_height',
          daily: 'wave_height_max',
          timezone: timezone
        },
      });
      setWaveHeight(response.data.hourly.wave_height[0]);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const { latitude, longitude } = oceanos[indice];
    fetchWaveHeight(latitude, longitude);
  }, [indice]);

  const proximoOceano = () => {
    setIndice((prevIndex) => (prevIndex + 1) % oceanos.length);
  };

  const anteriorOceano = () => {
    setIndice((prevIndex) => (prevIndex - 1 + oceanos.length) % oceanos.length);
  };

  const oceanoAtual = oceanos[indice];

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <>
          {oceanos.length > 0 && (
            <Oceanos
              nome={oceanoAtual.nome}
              image={oceanoAtual.image}
              desc={oceanoAtual.desc}
            />
          )}
          <Text>Wave Height: {waveHeight}</Text>
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
        </>
      )}
    </SafeAreaView>
  );
};

export default OceanoScreen;

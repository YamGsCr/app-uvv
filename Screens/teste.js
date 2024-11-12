import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';

const MarineForecast = () => {
  const [waveHeight, setWaveHeight] = useState(null); // Estado para armazenar os dados de altura das ondas
  const [loading, setLoading] = useState(false); // Estado para indicar o carregamento
  const [error, setError] = useState(null); // Estado para armazenar erros

  // Função para buscar dados da API
  const fetchMarineData = async () => {
    const url = 'https://marine-api.open-meteo.com/v1/marine?latitude=54.544587&longitude=10.227487&hourly=wave_height';

    setLoading(true);  // Inicia o carregamento
    setError(null);    // Reseta erro anterior

    try {
      const response = await fetch(url);  // Realiza a requisição GET
      if (!response.ok) {  // Verifica se houve erro na resposta
        throw new Error('Erro ao buscar dados da API');
      }
      const data = await response.json(); // Converte a resposta para JSON

      // Armazena os dados de altura das ondas
      if (data && data.hourly && data.hourly.wave_height) {
        setWaveHeight(data.hourly.wave_height);
      } else {
        setError('Dados de altura das ondas não encontrados');
      }
    } catch (e) {
      setError('Falha ao carregar os dados: ' + e.message);
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  // Usado para buscar os dados assim que o componente for montado
  useEffect(() => {
    fetchMarineData();
  }, []); // O array vazio [] significa que será chamado uma vez, quando o componente for montado

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Previsão de Ondas</Text>

      {loading && <ActivityIndicator size="large" color="#0000ff" />}  {/* Exibe um indicador de carregamento */}

      {error && <Text style={styles.error}>{error}</Text>}  {/* Exibe erro se houver */}

      {waveHeight && (
        <View style={styles.dataContainer}>
          <Text style={styles.dataTitle}>Altura das Ondas (m):</Text>
          <Text style={styles.dataText}>{waveHeight.join(', ')}</Text> {/* Exibe os valores das ondas */}
        </View>
      )}

      <Button title="Recarregar Dados" onPress={fetchMarineData} />  {/* Botão para recarregar os dados */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dataContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  dataTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dataText: {
    fontSize: 16,
    color: '#333',
    marginTop: 10,
  },
  error: {
    color: 'red',
    fontSize: 16,
    marginTop: 20,
  },
});

export default MarineForecast;

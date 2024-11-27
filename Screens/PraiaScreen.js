import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import styles from '../styles/styles';

const PraiaScreen = () => {
  const [nomePraia, setNomePraia] = useState('');
  const [cidade, setCidade] = useState('');
  const [alturaOnda, setAlturaOnda] = useState('');
  const [alturaOndaMax, setAlturaOndaMax] = useState('');
  const [velocidadeCorrente, setVelocidadeCorrente] = useState('');
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisivel, setModalVisivel] = useState(false);

  const navigation = useNavigation();

  const buscarDadosMeteo = async (latitude, longitude) => {
    try {
      setLoading(true);
      const resposta = await axios.get('https://marine-api.open-meteo.com/v1/marine', {
        params: {
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          current: 'wave_height',
          hourly: 'wave_height,ocean_current_velocity',
          daily: 'wave_height_max',
          timezone: 'America/Sao_Paulo',
        },
      });

      const { data } = resposta;
      if (data && data.hourly) {
        const alturaOnda = data.hourly.wave_height ? data.hourly.wave_height[0] : 'N/A';
        const velocidadeCorrente = data.hourly.ocean_current_velocity
          ? data.hourly.ocean_current_velocity[0]
          : 'N/A';
        const alturaOndaMax = data.daily.wave_height_max ? data.daily.wave_height_max[0] : 'N/A';
        return { alturaOnda, alturaOndaMax, velocidadeCorrente };
      } else {
        console.error('Dados de previsão não encontrados.');
        return { alturaOnda: 'N/A', alturaOndaMax: 'N/A', velocidadeCorrente: 'N/A' };
      }
    } catch (erro) {
      console.error('Erro ao buscar dados da Open Meteo Marine API', erro);
      return { alturaOnda: 'N/A', alturaOndaMax: 'N/A', velocidadeCorrente: 'N/A' };
    } finally {
      setLoading(false);
    }
  };

  const buscarCoordenadasECidade = async (nomePraia) => {
    try {
      const resposta = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          q: nomePraia,
          format: 'json',
          addressdetails: 1,
        },
        headers: {
          'User-Agent': 'meu-app-de-praias/1.0 (meuemail@dominio.com)', // Identificação obrigatória
        },
      });

      const { data } = resposta;

      if (data && data[0]) {
        const localizacao = data[0];
        const cidade =
          localizacao.address.city || localizacao.address.town || localizacao.address.village || 'Local desconhecido';
        const latitude = localizacao.lat;
        const longitude = localizacao.lon;

        return { cidade, latitude, longitude };
      } else {
        return { cidade: 'Local desconhecido', latitude: '', longitude: '' };
      }
    } catch (erro) {
      console.error('Erro ao buscar coordenadas e cidade:', erro);
      return { cidade: 'Erro ao buscar', latitude: '', longitude: '' };
    }
  };

  useEffect(() => {
    const carregarCards = async () => {
      try {
        const cardsSalvos = await AsyncStorage.getItem('cards');
        if (cardsSalvos) {
          setCards(JSON.parse(cardsSalvos));
        }
      } catch (erro) {
        console.error('Erro ao carregar os cards do AsyncStorage', erro);
      }
    };
    carregarCards();
  }, []);

  useEffect(() => {
    const salvarCards = async () => {
      try {
        await AsyncStorage.setItem('cards', JSON.stringify(cards));
      } catch (erro) {
        console.error('Erro ao salvar os cards no AsyncStorage', erro);
      }
    };
    salvarCards();
  }, [cards]);

  const adicionarCard = async () => {
    if (!nomePraia) {
      alert('Por favor, insira o nome da praia.');
      return;
    }

    const localizacao = await buscarCoordenadasECidade(nomePraia);
    if (!localizacao.latitude || !localizacao.longitude) {
      alert('Não foi possível encontrar a praia ou cidade com o nome fornecido.');
      return;
    }

    const dadosMeteo = await buscarDadosMeteo(localizacao.latitude, localizacao.longitude);

    const novoCard = {
      id: Math.random().toString(36).substr(2, 9),
      cidade: localizacao.cidade,
      nomePraia,
      latitude: localizacao.latitude,
      longitude: localizacao.longitude,
      alturaOnda: dadosMeteo.alturaOnda,
      alturaOndaMax: dadosMeteo.alturaOndaMax,
      velocidadeCorrente: dadosMeteo.velocidadeCorrente,
    };

    setCards((prevCards) => [...prevCards, novoCard]);
    setNomePraia('');
    setModalVisivel(false);
  };

  const deletarCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };
   const handleReturn = () => {
    navigation.replace('Home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.logoTexto}>Praia</Text>
        <View style={styles.borderBelowLogo}></View>
      </View>

      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {cards.length > 0 ? (
          cards.map((card) => (
            <View key={card.id} style={styles.card}>
              <ImageBackground
                source={require('../assets/beach-background.jpg')}
                style={styles.cardBackground}
                imageStyle={styles.cardBackgroundImage}
              >
                <View style={styles.leftContainer}>
                  <Text style={styles.cardLocation}>Cidade: {card.cidade}</Text>
                  <Text style={styles.cardLocation}>Praia: {card.nomePraia}</Text>
                  <Text style={styles.cardWaveHeight}>Altura da Onda: {card.alturaOnda}m</Text>
                  <Text style={styles.cardMaxWaveHeight}>Altura Máxima da Onda: {card.alturaOndaMax}m</Text>
                  <Text style={styles.cardCurrentVelocity}>Velocidade da Corrente: {card.velocidadeCorrente} m/s</Text>
                </View>
                <TouchableOpacity onPress={() => deletarCard(card.id)} style={styles.deleteButton}>
                  <Text style={styles.deleteButtonText}>X</Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          ))
        ) : (
          <Text style={styles.noCardText}>Nenhum card adicionado ainda.</Text>
        )}
      </ScrollView>

      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisivel(true)}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      <Modal transparent={true} visible={modalVisivel} animationType="fade" onRequestClose={() => setModalVisivel(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.modalInput}
              placeholder="Nome da Praia"
              value={nomePraia}
              onChangeText={setNomePraia}
            />
            <TouchableOpacity style={styles.containerBotao} onPress={adicionarCard}>
              <Text style={styles.textoSecao}>Adicionar Card</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.containerBotao} onPress={() => setModalVisivel(false)}>
              <Text style={styles.textoSecao}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
       <TouchableOpacity style={styles.returnButton} onPress={handleReturn}>
        <Text style={styles.returnButtonText}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default PraiaScreen;

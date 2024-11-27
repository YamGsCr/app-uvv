import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from '../styles/styles';
import { Logout } from '../Componentes/Auth/AuthF';
import LoginScreen from './LoginScreen';

const HomeScreen = ({ navigation,user }) => {
  const [logado, setLogado] = useState(true);
  const [error, setError] = useState('');

  const handleLogout = async () => {
    await Logout(setLogado, setError);
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={styles.tela}>
      <Text style={styles.logoTexto}>Aero Reef</Text>
      <View style={styles.containerSecoes}>
        <Text style={styles.textoUser}>Bem vindo, {user}</Text>
        <View style={styles.containerBotao}>
          <Image
            style={styles.iconesSecao}
            source={require('../assets/iconePeixes.png')}
          />
          <TouchableOpacity style={styles.botaoSecao} onPress={() => navigation.replace('Peixes')}>
            <Text style={styles.textoSecao}>Peixes</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBotao}>
          <Image
            style={styles.iconesSecao}
            source={require('../assets/iconeAquarios.png')}
          />
          <TouchableOpacity style={styles.botaoSecao} onPress={() => navigation.replace('Praias')}>
            <Text style={styles.textoSecao}>Praias</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerBotao}>
          <Image
            style={styles.iconesSecao}
            source={require('../assets/iconeOceano.png')}
          />
          <TouchableOpacity style={styles.botaoSecao} onPress={() => navigation.replace('Flora')}>
            <Text style={styles.textoSecao}>Flora</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerBotao}>
        <TouchableOpacity style={styles.botaoSecao} onPress={handleLogout}>
          <Text style={styles.textoSecao}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

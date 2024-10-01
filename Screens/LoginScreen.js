import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from '../styles/styles';
import { Login } from '../Componentes/Auth/AuthF';

const LoginScreen = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [logado, setLogado] = useState(false);

  const handleLogin = async () => {
    try {
      await Login(user, password, setLogado, setError);
      navigation.replace('Home');
    } catch (e) {
      setError('Falha ao fazer login');
    }
  };

  return (
    <SafeAreaView style={styles.tela}>
      <Text style={styles.logoTexto}>Login</Text>
      {error ? <Text style={styles.errorTexto}>{error}</Text> : null}
      <TextInput
        style={styles.inputs}
        onChangeText={setUser}
        value={user}
        placeholder="Usuário"
        placeholderTextColor="#B0B0B0"
      />
      <TextInput
        style={styles.inputs}
        onChangeText={setPassword}
        value={password}
        placeholder="Senha"
        secureTextEntry
        placeholderTextColor="#B0B0B0"
      />
      <TouchableOpacity style={styles.containerBotao} onPress={handleLogin}>
        <Text style={styles.textoSecao}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerBotao} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.textoSecao}>Cadastrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;

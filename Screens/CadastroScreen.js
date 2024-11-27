import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import styles from '../styles/styles'; // Ajuste o caminho conforme necessário
import { Cadastro } from '../Componentes/Auth/AuthF'; // Ajuste o caminho conforme necessário

const CadastroScreen = ({ navigation }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    if (logado) {
      navigation.replace('Home');
    }
  }, [logado]);

  const handleCadastro = async () => {
    try {
      await Cadastro(user, password, setLogado, setError);
      if (logado) {
        navigation.replace('Login');
      }
    } catch (e) {
      setError('Falha ao cadastrar');
    }
  };

  return (
    <SafeAreaView style={styles.tela}>
      <Text style={styles.logoTexto}>Cadastro</Text>
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
      <TouchableOpacity style={styles.containerBotao} onPress={handleCadastro}>
        <Text style={styles.textoSecao}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.containerBotao} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.textoSecao}>Voltar ao Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CadastroScreen;

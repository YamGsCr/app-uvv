import React from 'react';
import { Text, SafeAreaView, TextInput, View, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts, Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import styles from './styles/styles';
import {Cadastro, Login, Logout} from './Componentes/Auth/AuthF';

const App = () => {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [logado, setLogado] = React.useState(false);
  const [error, setError] = React.useState('');
  const [cadastroUser, setCadastroUser] = React.useState(false);

  React.useEffect(() => {
    checkSession();
  }, []);

  const checkSession = async () => {
    try {
      const savedUser = await AsyncStorage.getItem('User');
      if (savedUser) {
        setUser(savedUser);
        setLogado(true);
      }
    } catch (error) {
      setError('Error: ' + error);
    }
  };
  const handleLogout = async () => {
    await Logout(setLogado, setCadastroUser, setError);
  };
  const handleCadastro = async () => {
    await Cadastro(user, password, setError, setLogado);
  };
  const handleLogin = async () => {
    await Login(user, password, setError, setLogado);
  };

  let [fontsLoaded] = useFonts({
    Quicksand_400Regular,
  });

  if (!fontsLoaded) {
    return null; // Ou um loader enquanto as fontes são carregadas
  }

  return (
    <View style={styles.container}>
      {logado ? (
        <View style={styles.container}>
          <SafeAreaView style={styles.tela}>
            <Text style={styles.logoTexto}>Aero Reef</Text>
            <View style={styles.containerSecoes}>
              <Text style={styles.textoUser}>Bem vindo, {user}</Text>
              <View style={styles.containerBotao}>
                <Image style={styles.iconesSecao} source={require('./assets/iconePeixes.png')} />
                <TouchableOpacity style={styles.botaoSecao}>
                  <Text style={styles.textoSecao}>Animais</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.containerBotao}>
                <Image style={styles.iconesSecao} source={require('./assets/iconeAquarios.png')} />
                <TouchableOpacity style={styles.botaoSecao}>
                  <Text style={styles.textoSecao}>Oceanos</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.containerBotao}>
                <Image style={styles.iconesSecao} source={require('./assets/iconeOceano.png')} />
                <TouchableOpacity style={styles.botaoSecao}>
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
        </View>
      ) : (
        <View style={styles.container}>
          <SafeAreaView style={styles.tela}>
            <Text style={styles.logoTexto}>Aero Reef</Text>
            {cadastroUser ? (
              <>
                <TextInput
                  style={styles.inputs}
                  onChangeText={setUser}
                  value={user}
                  placeholder="Usuário"
                />
                <TextInput
                  style={styles.inputs}
                  onChangeText={setPassword}
                  value={password}
                  placeholder="Senha"
                  secureTextEntry
                />
                <View style={styles.containerBotao}>
                  <TouchableOpacity style={styles.botaoSecao} onPress={handleCadastro}>
                    <Text style={styles.textoSecao}>Cadastrar</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.containerBotao}>
                  <TouchableOpacity style={styles.botaoSecao} onPress={() => setCadastroUser(false)}>
                    <Text style={styles.textoSecao}>Retornar ao Login</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <>
              <TextInput
                  style={styles.inputs}
                  onChangeText={setUser}
                  value={user}
                  placeholder="Usuário"
                />
                <TextInput
                  style={styles.inputs}
                  onChangeText={setPassword}
                  value={password}
                  placeholder="Senha"
                  secureTextEntry
                />
                <View style={styles.containerBotao}>
                <TouchableOpacity style={styles.botaoSecao} onPress={handleLogin}>
                    <Text style={styles.textoSecao}>Login</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.containerBotao}>
                  <TouchableOpacity style={styles.botaoSecao} onPress={() => setCadastroUser(true)}>
                    <Text style={styles.textoSecao}>Cadastrar</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </SafeAreaView>
        </View>
      )}
    </View>
  );
};

export default App;

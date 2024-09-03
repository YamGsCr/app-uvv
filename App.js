import React from 'react';
import { Text, SafeAreaView, StyleSheet, TextInput, View, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts, Quicksand_400Regular } from '@expo-google-fonts/quicksand';


const App = () => {
  const [User, setUser] = React.useState('');
  const [Password, setPassword] = React.useState('');
  //Consts do async, para criar a verificação de login é necessário uma tendo um valor booleano.
  //A de erro é apenas para ter um "try/catch"
  const [Logado, setLogado] = React.useState(false);
  const [error, setMsg] = React.useState('');

//Pelo oque parece, o useffect roda logo quando abre o app/página. No caso, não temos uma dependencia ou return ainda, porém, a const roda do mesmo jeito.
React.useEffect(()=> {
    checkSession();
  }, []);

//Const de checagem de login, utilizando o async, iremos receber o const savedUser, logo irá ter uma verificação se existe um usuário existente no armazenamento, caso tenha, o login ocorre. 
  const checkSession = async () => {
    try{
      const savedUser = await AsyncStorage.getItem('User');
      if(savedUser){
        setUser(savedUser);
        setLogado(true);
      }
    }catch(error){
      setMsg('Error:' + error);
    }
  };

//Const de login, ocorre ao clicar no botao, basicamente verifica os inputs (se espera um valor de admin),
//ocorre um set de User no savedUser, logo, o savedUser recebe o valor do login do Admin (e ocorre o set true). 
  const Login = async () => {
    if (User === 'yam' && Password === 'yam') {
      try {
        await AsyncStorage.setItem('User', User);
        setLogado(true);
      } catch (error) {
        setMsg('Error: ' + error);
      }
    } else {
      setMsg('Erro: Usuário ou senha incorretos');
    }
  };
//Const de logout, apenas limpa o User que está salvo no savedUser, e dá um set para o falso.
  const Logout = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setLogado(false);
    } catch (error) {
      setMsg('Error: ' + error);
    }
  };

//Pra importar uma fonte tive pedir pro chat, complicado demais, nem sabia que tinha que dar import
  let [fontsLoaded] = useFonts({
    Quicksand_400Regular});

//Aqui ocorre uma verificação de condição do Logado, caso seja false, teremos a tela de login. Caso seja true,
//teremos a tela do user.
  return (
  <View style={styles.container}>
    {Logado ?( 
      <View style={styles.container}>
        <SafeAreaView style={styles.tela}>
          <Text style={styles.logoTexto}>Aqua Reef</Text>
          
          <View style={styles.containerSecoes}>
            <Text style={styles.textoUser}>Bem vindo, {User}</Text>
            
            <View style={styles.containerBotao}>
            <Image style={styles.iconesSecao} source={require('./assets/iconePeixes.png')}/>
            <TouchableOpacity style={styles.botaoSecao}>
              <Text style={styles.textoSecao}>Animais</Text>
            </TouchableOpacity>
            </View>
            
            <View style={styles.containerBotao}>
            <Image style={styles.iconesSecao} source={require('./assets/iconeAquarios.png')}/>
            <TouchableOpacity style={styles.botaoSecao}>
              <Text style={styles.textoSecao}>Oceanos</Text>
            </TouchableOpacity>
            </View>
            
            <View style={styles.containerBotao}>
              <Image style={styles.iconesSecao} source={require('./assets/iconeOceano.png')}/>
              <TouchableOpacity style={styles.botaoSecao}>
                <Text style={styles.textoSecao}>Flora</Text>
              </TouchableOpacity>
            </View>

          </View>
          <View style={styles.containerBotao}>
              <TouchableOpacity style={styles.botaoSecao} onPress={Logout}>
                <Text style={styles.textoSecao}>Logout</Text>
              </TouchableOpacity>
          </View>
        </SafeAreaView>
        </View>) 

        : (
          
      <View style={styles.container}>
      <LinearGradient colors={['#007ACC','#A2D9FF' ,'#48C774']} style={styles.background} />
      <SafeAreaView style={styles.tela}>
        <Text style={styles.logoTexto}>Aqua Reef</Text>
        <TextInput
          style={styles.inputs}
          onChangeText={setUser}
          value={User}
          placeholder="Usuário"
        />
        <TextInput
          style={styles.inputs}
          onChangeText={setPassword}
          value={Password}
          placeholder="Senha"
        />
        <View style={styles.containerBotao}>
              <TouchableOpacity style={styles.botaoSecao} onPress={Login}>
                <Text style={styles.textoSecao}>Login</Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
      </View>
        )}
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoTexto:{
    fontSize: 50,
    fontFamily: 'Quicksand_400Regular',
    color: '#FFFFFF',
    margin: 15,
  },
  tela: {
    flex: 1,
    width: '100%',
    background: 'linear-gradient(135deg, rgba(0, 178, 226, 0.6) 5%, rgba(0, 102, 204, 0.6) 90%)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs: {
    width: '60%',
    textAlign: 'center',
    color: '#FFFFFF',
    borderWidth: 2,
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    borderColor: '#B0B0B0',
    shadowColor: 'white',
    shadowOffset: { width: 6, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  textoUser: {
    textAlign: 'center',
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  containerSecoes:{
    justifyContent: 'center',
    textAlign: 'center',
    width: '70%',
    height: '50%',
    background: 'linear-gradient(135deg, #A0E7E5 15%, #00B0FF 80%)',
    backgroundColor: 'rgba(77, 208, 225, 0.9)',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  containerBotao: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    background: 'linear-gradient(155deg, #A0E7E5 9%, #00B0FF 80%)',
    borderRadius: 25,
    shadowColor: '#FFFFFF',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  botaoSecao:{
    textAlign: 'center',
    flex: 1,
  },
  textoSecao:{
    fontFamily: 'Quicksand_400Regular',
    fontSize: 18,
    color: '#FFFFFF',
  },
  iconesSecao: {
    width: 30,
    height: 30,
    borderRadius: 30,
    marginRight: 10,
  },
});

export default App;

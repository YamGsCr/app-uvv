import AsyncStorage from '@react-native-async-storage/async-storage';

// Função de Cadastro
export const Cadastro = async (user, password, setLogado, setError) => {
  try {
    const cadastradosJson = await AsyncStorage.getItem('cadastrados');
    let cadastrados = cadastradosJson ? JSON.parse(cadastradosJson) : {};
    if (cadastrados[user]) {
      setError('Usuário já cadastrado');
      return;
    }
    cadastrados[user] = password;
    await AsyncStorage.setItem('cadastrados', JSON.stringify(cadastrados));
    setLogado(true);
  } catch (error) {
    setError('Error: ' + error.message);
  }
};

// Função de Login
export const Login = async (user, password, setLogado, setError) => {
  try {
    const cadastradosJson = await AsyncStorage.getItem('cadastrados');
    let cadastrados = cadastradosJson ? JSON.parse(cadastradosJson) : {};

    if (cadastrados[user] === password) {
      await AsyncStorage.setItem('User', user);
      setLogado(true);
    } else {
      setError('Erro no usuário ou senha');
    }
  } catch (error) {
    setError('Error: ' + error.message);
  }
};

// Função de Logout
export const Logout = async (setLogado, setError) => {
  try {
    await AsyncStorage.removeItem('User');
    setLogado(false);
  } catch (error) {
    setError('Error: ' + error.message);
  }
};

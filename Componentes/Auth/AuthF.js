import AsyncStorage from '@react-native-async-storage/async-storage';

// Função de Cadastro
export const Cadastro = async (user, password, setError, setLogado) => {
  try {
    const cadastradosJson = await AsyncStorage.getItem('cadastrados');
    let cadastrados = cadastradosJson ? JSON.parse(cadastradosJson) : {};
    if (cadastrados[user]) {
      setError('Usuário já existente.');
      return;
    }
    cadastrados[user] = password;
    await AsyncStorage.setItem('cadastrados', JSON.stringify(cadastrados));
    setLogado(true);
  } catch (error) {
    setError('Error: ' + error);
  }
};

// Função de Login
export const Login = async (user, password, setError, setLogado) => {
  try {
    const cadastradosJson = await AsyncStorage.getItem('cadastrados');
    let cadastrados = cadastradosJson ? JSON.parse(cadastradosJson) : {};
    if (cadastrados[user] === password) {
      await AsyncStorage.setItem('User', user);
      setLogado(true);
    } else {
      setError('Erro no usuário e senha');
    }
  } catch (error) {
    setError('Error: ' + error);
  }
};

// Função de Logout
export const Logout = async (setLogado, setCadastroUser, setError) => {
  try {
    await AsyncStorage.removeItem('User');
    setLogado(false);
    setCadastroUser(false);
  } catch (error) {
    setError('Error: ' + error);
  }
};

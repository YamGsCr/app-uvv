import AsyncStorage from '@react-native-async-storage/async-storage';

const validateInput = (user, password, setError) => {
  if (!user || !password) {
    setError('Usuário e senha são obrigatórios');
    return false;
  }
  return true;
};

export const Cadastro = async (user, password, setLogado, setError) => {
  if (!validateInput(user, password, setError)) return;
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

export const Login = async (user, password, setLogado, setError) => {
  if (!validateInput(user, password, setError)) return;
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
export const Logout = async (setLogado, setError) => {
  try {
    await AsyncStorage.removeItem('User');
    setLogado(false);
  } catch (error) {
    setError('Erro ao fazer logout: ' + error.message);
  }
};
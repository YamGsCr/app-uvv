import {StyleSheet} from 'react-native';

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

export default styles;

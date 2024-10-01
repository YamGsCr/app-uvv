import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 178, 226, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoTexto: {
    fontSize: 50,
    fontFamily: 'Quicksand_400Regular',
    color: '#FFFFFF',
    margin: 15,
  },
  tela: {
    flex: 1,
    width: '100%',
    backgroundColor: 'rgba(0, 102, 204, 0.6)',
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
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 6, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  textoUser: {
    textAlign: 'center',
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  containerSecoes: {
    justifyContent: 'center',
    textAlign: 'center',
    width: '70%',
    height: '50%',
    backgroundColor: 'rgba(77, 208, 225, 0.9)',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
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
    backgroundColor: 'rgba(160, 231, 229, 0.9)',
    borderRadius: 25,
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  botaoSecao: {
    textAlign: 'center',
    flex: 1,
  },
  textoSecao: {
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
   peixeContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  peixeName: {
    fontFamily: 'Quicksand_400Regular',
    fontSize: 20,
    color: '#6D6D6D',
    marginBottom: 5,
  },
  peixeImage: {
    width: 220,
    height: 220,
    borderRadius: 20,
    marginBottom: 10,
  },
  peixeHabitat: {
    fontFamily: 'Quicksand_400Regular',
    fontSize: 15,
    color: '#6D6D6D',
  },
  peixeDesc: {
    fontFamily: 'Quicksand_400Regular',
    fontSize: 18,
    color: '#6D6D6D',
    textAlign: 'center',
    marginTop: 10,
  },
  botaoFiltro: {
  width: '70%',
  margin: 10,
},

botaoFiltroToggle: {
  backgroundColor: 'rgba(160, 231, 229, 0.9)',
  borderRadius: 25,
  padding: 10,
  alignItems: 'center',
  marginBottom: 10,
  shadowColor: '#FFFFFF',
  shadowOffset: { width: 5, height: 5 },
  shadowOpacity: 0.3,
  shadowRadius: 10,
},

botaoFiltroContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
},

botaoFiltroItem: {
  backgroundColor: 'rgba(160, 231, 229, 0.9)',
  borderRadius: 25,
  padding: 10,
  margin: 5,
  shadowColor: '#FFFFFF',
  shadowOffset: { width: 5, height: 5 },
  shadowOpacity: 0.3,
  shadowRadius: 10,
  alignItems: 'center',
  justifyContent: 'center',
},

  errorTexto: {
    color: '#FF0000',
    fontSize: 16,
    marginBottom: 10,
  },

  containerSetinha:{
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
});

export default styles;

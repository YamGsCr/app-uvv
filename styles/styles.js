import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 102, 204, 0.6)',
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
    color: 'white',
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
    color: 'white',
  },
  peixeDesc: {
    fontFamily: 'Quicksand_400Regular',
    fontSize: 20,
    color: 'white',
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
  inputContainer: {
    margin: 10,
  },
  buttonContainer: {
    margin: 10,
  },
  topContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  borderBelowLogo: {
    height: 2,
    width: '90%',
    backgroundColor: '#000',
    marginVertical: 10,
  },
  cardsContainer: {
    alignItems: 'center',
  },
  card: {
    width: 300,
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardBackground: {
    padding: 20,
  },
  cardBackgroundImage: {
    borderRadius: 10,
    opacity: 0.8,
  },
  leftContainer: {
    justifyContent: 'center',
  },
  rightContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  cardLocation: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardWaveHeight: {
    fontSize: 16,
    color: '#fff',
  },
  cardMaxWaveHeight: {
    fontSize: 16,
    color: '#fff',
  },
  cardCurrentVelocity: {
    fontSize: 16,
    color: '#fff',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(160, 231, 229, 0.9)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 30,
    lineHeight: 30,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  returnButton: {
    position: 'absolute',
    left: 20,
    bottom: 20,
    backgroundColor: 'rgba(160, 231, 229, 0.9)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  returnButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Quicksand_400Regular',
  },
  modalInput: {
  fontSize: 16,
  color: '#000',
  padding: 10,
  marginBottom: 15,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
  backgroundColor: '#f0f0f0', // Destacando o campo não editável
  opacity: 0.6, // Menos opacidade para indicar que é só para exibição
},
// Estilo para o botão de delete
deleteButton: {
  position: 'absolute',
  bottom: 10,
  right: 10,
  backgroundColor: 'rgba(77, 208, 225, 0.9)',
  paddingVertical: 5,
  paddingHorizontal: 10,
  borderRadius: 5,
},
deleteButtonText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: 'bold',
}
});

export default styles;

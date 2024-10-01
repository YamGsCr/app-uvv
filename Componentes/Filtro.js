import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

const Filtro = ({ filtros, onSelectFiltro }) => {
  const [visivel, setVisivel] = useState(false);

  return (
    <View style={styles.botaoFiltro}>
      <TouchableOpacity
        style={styles.botaoFiltroToggle}
        onPress={() => setVisivel(!visivel)}
      >
        <Text style={styles.textoSecao}>
          {visivel ? 'Ocultar filtros' : 'Mostrar filtros'}
        </Text>
      </TouchableOpacity>
      {visivel && (
        <View style={styles.botaoFiltroContainer}>
          <Text style={styles.textoSecao}>Filtrar por:</Text>
          {filtros.map(filtro => (
            <TouchableOpacity
              key={filtro}
              style={styles.botaoFiltroItem}
              onPress={() => onSelectFiltro(filtro)}
            >
              <Text style={styles.textoSecao}>{filtro}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Filtro;



import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from '../styles/styles';

const Peixes = ({ image, nome, habitat, desc }) => {
  return (
    <View style={styles.peixeContainer}>
      <Text style={styles.peixeName}>{nome}</Text>
      <Image style={styles.peixeImage} source={image} />
      <Text style={styles.peixeHabitat}>Habitat: {habitat.join(', ')}</Text>
      <Text style={styles.peixeDesc}>{desc}</Text>
    </View>
  );
};

export default Peixes;

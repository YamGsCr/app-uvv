import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from '../styles/styles';

const Oceanos = ({ image, nome, desc }) => {
  return (
    <View style={styles.peixeContainer}>
      <Text style={styles.peixeName}>{nome}</Text>
      <Image style={styles.peixeImage} source={image} />
      <Text style={styles.peixeDesc}>{desc}</Text>
    </View>
  );
};

export default Oceanos;

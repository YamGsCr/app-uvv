import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import styles from '../styles/styles';

const Oceanos = ({ image, nome, desc, latitude, longitude, timezone }) => {
  return (
    <View style={styles.peixeContainer}>
      <Text style={styles.peixeName}>{nome}</Text>
      <Image style={styles.peixeImage} source={image} />
      <Text style={styles.peixeDesc}>{desc}</Text>
      <Text style={styles.peixeDesc}>{latitude}</Text>
      <Text style={styles.peixeDesc}>{longitude}</Text>
      <Text style={styles.peixeDesc}>{timezone}</Text>
    </View>
  );
};

export default Oceanos;

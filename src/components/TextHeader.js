import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TextHeader = ({labelText}) => {
  return <Text style={styles.textTopHeader}>{labelText}</Text>;
};

const styles = StyleSheet.create({
  textTopHeader: {
    backgroundColor: '#5db57d',
    color: '#ffffff',
    fontSize: 25,
    textAlign:'center',
    justifyContent:'center',
    borderColor: '#5db57d',
    fontWeight: 'bold',
    height: 40
  },
});

export default TextHeader;

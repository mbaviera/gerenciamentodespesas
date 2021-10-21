import React from 'react';
import {StyleSheet,  View, Text, TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonDetails = ({onPressButton, nameIcon, textLabel}) => {
  return (
    <View>
      <TouchableOpacity style={styles.pedidosBtn} onPress={onPressButton}>
        {/* <Text style={styles.buttonText}>{translate('comfazrtr')}</Text> */}
        <Icon name={nameIcon} style={styles.iconTouchable} />
      </TouchableOpacity>
      <Text style={{alignSelf: 'center', letterSpacing: 1, color: '#666666'}}>
        {textLabel}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  //style container principal
  buttonText: {
    //textos dos botoes
    fontSize:18,
    fontWeight: 'bold',
    color: "#000000",
    textAlign:'center'
  },
  pedidosBtn: {
    //botao de pedido
    width: 100,
    backgroundColor: '#dbdbdb',
    borderRadius: 25,
    height: 50,
    justifyContent: 'center',      
  },
  iconTouchable: {
    //icone cheveron
    position: 'absolute',
    color: '#636363',
    alignSelf:'center',
    fontSize:25
  },
});

export default ButtonDetails;

import AsyncStorage from '@react-native-community/async-storage';
import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, TouchableOpacity, Image, Alert} from 'react-native';
import {AuthContext} from '../../providers/auth';
import Api from '../../services/Api';
import {styles} from './styles';

export default function Login({navigation}) {
  const {setTokenAuth} = React.useContext(AuthContext);
  const [email, setEmail] = useState('');  

  async function Entrar(email) {  
    if (!email) {
      Alert.alert('', 'Preencha o Campo Email!');
    } else {      
      try {
        const response = await Api.get(`start/${email}`);
        if (response.status === 200) { 
          const {token} = response.data;
          setTokenAuth(token)                  
          navigation.navigate('Home');
        }
      } catch (error) {
        console.log(error);
        Alert.alert("Ocorreu um erro","Tente Novamente")
      }
    }
  }

  return (
    <View style={styles.containerView}>
      <Image
        style={styles.imageStyle}
        source={require('../../assets/iconLogin.png')}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Informe o Email"
          maxLength={100}
          onChangeText={text => setEmail(text)}></TextInput>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => Entrar(email)}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

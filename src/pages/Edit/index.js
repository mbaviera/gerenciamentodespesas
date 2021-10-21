import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {AuthContext} from '../../providers/auth';
import Api from '../../services/Api';
import {styles} from './styles';
import Moment from 'moment';
import {MaskedTextInput} from 'react-native-mask-text';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TextHeader from '../../components/TextHeader';

export default function Edit({navigation, route}) {
  const [value, setValue] = useState();
  const [date, setDate] = useState('');
  const [item, setItem] = useState('');
  const [complement, setComplement] = useState('');
  const {idExpense} = route.params;
  const {tokenAuth} = React.useContext(AuthContext);

  const config = {
    headers: {
      Authorization: 'Bearer ' + tokenAuth,
      'Content-Type': 'application/json',
    },
  };

  const bodyParameters = {
    item,
    value,
    date,
    additionalInfo: {
      complement,
    },
  };

  async function editExpense() {
    if (!date || !value || !item || !complement) {
      Alert.alert('', 'Preencha Todos os Campos!');
    } else {
      try {
        const response = await Api.put(
          '/expenses/' + idExpense,
          bodyParameters,
          config,
        );
        if (response.status === 200) {
          Alert.alert(
            '',
            'Editado Com Sucesso!',
            [
              {
                text: 'OK',
                onPress: () => navigation.navigate('Home'),
              },
            ],
            {cancelable: false},
          );
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <View style={styles.container}>
      <TextHeader labelText={'Editar Despesa'} />
      <ScrollView style={styles.containerForm}>
        <Text style={styles.textLabelInput}>Item: </Text>
        <TextInput
          style={styles.input}
          placeholder="Item o Item"
          maxLength={100}
          onChangeText={text => setItem(text)}
        />

        <Text style={styles.textLabelInput}>Data: </Text>
        <MaskedTextInput
          mask="99-99-9999"
          onChangeText={text =>
            setDate(Moment(text, 'DD-MM-YYYY').format('YYYY-MM-DD'))
          }
          style={styles.input}
          keyboardType="number-pad"
          placeholder="DD-MM-AAAA"
        />

        <Text style={styles.textLabelInput}>Valor: </Text>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          placeholder="Informe o valor"
          maxLength={100}
          onChangeText={text => setValue(text)}></TextInput>

        <Text style={styles.textLabelInput}>Complemento: </Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o complemento"
          maxLength={100}
          onChangeText={text => setComplement(text)}></TextInput>
      </ScrollView>

      <View style={styles.viewPrimaria}>
        <TouchableOpacity onPress={() => editExpense()}>
          <Icon name={'check'} style={styles.iconStyle} />
          <Text style={styles.textBottom}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

import React, {useState} from 'react';
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

export default function Create({navigation}) {
  const [value, setValue] = useState();
  const [date, setDate] = useState('');
  const [item, setItem] = useState('');
  const [complement, setComplement] = useState('');
  const {tokenAuth, setTokenAuth} = React.useContext(AuthContext);

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

  async function createExpense() {
    if (!date || !value || !item || !complement) {
      Alert.alert('', 'Preencha Todos os Campos!');
    } else {
      try {
        const response = await Api.post('/expenses', bodyParameters, config);
        Alert.alert(
          '',
          'Adicionado Com Sucesso!',
          [{text: 'OK', onPress: () => navigation.navigate('Home')}],
          {cancelable: false},
        );
      } catch (error) {
        console.log(error);
        Alert.alert('Ocorreceu um Erro', 'Tente Novamente');
      }
    }
  }

  return (
    <View style={styles.container}>
      <TextHeader labelText={'Cadastrar Nova Despesa'} />
      <ScrollView style={styles.containerForm}>
        <Text style={styles.textLabelInput}>Itens da Despesa: </Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o Item"
          maxLength={100}
          onChangeText={text => setItem(text)}></TextInput>

        <Text style={styles.textLabelInput}>Data da Despesa: </Text>
        <MaskedTextInput
          mask="99-99-9999"
          onChangeText={text =>
            setDate(Moment(text, 'DD-MM-YYYY').format('YYYY-MM-DD'))
          }
          style={styles.input}
          keyboardType="number-pad"
          placeholder="DD-MM-AAAA"
        />

        <Text style={styles.textLabelInput}>Valor da Despesa: </Text>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          placeholder="Informe o Valor"
          maxLength={100}
          onChangeText={text => setValue(text)}></TextInput>

        <Text style={styles.textLabelInput}>Informações Adicionais: </Text>
        <TextInput
          style={styles.input}
          placeholder="Informe o complemento"
          maxLength={100}
          onChangeText={text => setComplement(text)}></TextInput>
      </ScrollView>

      <View style={styles.viewPrimaria}>
        <TouchableOpacity onPress={() => createExpense()}>
          <Icon name={'check'} style={styles.iconStyle} />
          <Text style={styles.textBottom}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

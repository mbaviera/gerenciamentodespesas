import React, {useEffect, useState} from 'react';
import {Text, View, Alert} from 'react-native';
import {AuthContext} from '../../providers/auth';
import Api from '../../services/Api';
import {styles} from './styles';
import Moment from 'moment';
import ButtonDetails from '../../components/ButtonDetails';
import TextHeader from '../../components/TextHeader';

export default function Details({navigation, route}) {
  const [data, setData] = useState([]);
  const {idDespesa} = route.params;
  const {pComplement} = route.params;
  const {tokenAuth} = React.useContext(AuthContext);

  useEffect(() => {
    Api.get('/expenses/' + idDespesa, config)
      .then(response => {
        if (response.status === 200) {
          setData(response.data);
        }
      })
      .catch(err => {
        console.error('opssss! ocorreu um erro: ' + err);
      });
  }, []);

  var config = {
    headers: {
      Authorization: 'Bearer ' + tokenAuth,
      'Content-Type': 'application/json',
    },
  };  

  function askDelet(id) {
    Alert.alert(
      '',
      'Deseja Excluir a Despesa?',
      [
        {text: 'Sim', onPress: () => deleteExpense(id)},
        {text: 'Não', onPress: () => {}, style: 'cancel'},
      ],
      {cancelable: true},
    );
  }

  async function deleteExpense(id) {
    try {
      const response = await Api.delete('/expenses/' + id, config);
      if (response.status === 200) {
        Alert.alert(
          '',
          'Excluído Com Sucesso!',
          [{text: 'OK', onPress: () => navigation.navigate('Home')}],
          {cancelable: false},
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={{flex: 1}}>
      <TextHeader labelText={'Detalhes da Despesa'} />
      <View style={styles.viewItens}>
        <Text style={styles.textDetailsItem}> Item: {data.item}</Text>
        <Text style={styles.textDetails}>
          Data: {Moment(data.date, 'YYYY-MM-DD').format('DD-MM-YYYY')}
        </Text>
        <Text style={styles.textDetails}> Valor: {data.value}</Text>

        <Text style={styles.textDetails}> Adicional: {pComplement}</Text> 
      </View>

      <View style={styles.containerViewButton}>
        <ButtonDetails
          nameIcon={'edit'}
          textLabel={'Editar'}
          onPressButton={() =>
            navigation.navigate('Edit', {idExpense: data._id})
          }
        />

        <ButtonDetails
          onPressButton={() => askDelet(data._id)}
          nameIcon={'trash'}
          textLabel={'Deletar'}
        />
      </View>
    </View>
  );
}

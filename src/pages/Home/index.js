import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  FlatList,
} from 'react-native';
import SearchHeader from '../../components/SearchHeader';
import { AuthContext } from '../../providers/auth';
import Api from '../../services/Api';
import {styles} from './styles';
import Moment from 'moment';
import {useIsFocused} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import TextHeader from '../../components/TextHeader';

export default function Home({navigation}) {
  const {tokenAuth} = React.useContext(AuthContext);
  const [page] = useState(1);
  const [perPage] = useState(10);
  const [data, setUser] = useState([]);
  const [filteredData, setFilteredData] = useState([]);  
  const isFocused = useIsFocused();

  var config = {
    headers: {
      Authorization: 'Bearer ' + tokenAuth,
      'Content-Type': 'application/json',
    },
    params: {
      page,
      perPage,
    },
  };

  useEffect(() => {
    console.log('tokenHome: ' + tokenAuth);
    Api.get('/expenses', config)
      .then(response => {
        if (response.status === 200) {
          setUser(response.data);
          setFilteredData(response.data);
        }
      })
      .catch(err => {
        console.error('ops! ocorreu um erro' + err);
      });
  }, [isFocused]);

  function filterSearch(text) {
    setFilteredData(data.filter(i => i.item.includes(text)));
  }

  return (
    <View style={{flex: 1}}>
      <TextHeader labelText={"Minhas Despesas"}/>
      <SearchHeader
        onChangeSearch={text => filterSearch(text)}
        valueSearch={text => filterSearch(text)}
        placeholderSearch={'Filtrar Por Item'}
        keyboardTypeSearch={'default'}
      />      
      {filteredData.length > 0 && (
          <FlatList
            data={filteredData}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => (
              <TouchableOpacity key={index} onPress={() => navigation.navigate('Details', {idDespesa: item._id, pComplement: item.additionalInfo.complement})}>
                <View style={styles.row}>
                  <View>
                    <View style={styles.nameContainer}>
                      {/* <Text style={styles.nameTxt}>ID: {item._id}</Text> */}
                      <Text style={styles.nameTxtItem}>Item: {item.item}</Text>
                      <Text style={styles.nameTxt}>Data: {Moment(item.date, 'YYYY-MM-DD').format('DD-MM-YYYY')}</Text>                      
                      <Text style={styles.nameTxt}>Valor: {item.value}</Text>
                      <Text style={styles.nameTxt}>Complemento: {item.additionalInfo.complement} </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
      )}

      <View style={styles.viewPrimaria}>
          <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Icon name={'plus'} style={styles.iconStyle} />
            <Text style={styles.textBottom}>Nova Despesa</Text>
          </TouchableOpacity>
      </View>      
    </View>
  );
}

import React from 'react';
import {SearchBar} from 'react-native-elements';

const SearchHeader = ({onChangeSearch, valueSearch, placeholderSearch, keyboardTypeSearch}) => {
  return (
    <SearchBar
        placeholder={placeholderSearch}
        onChangeText={onChangeSearch}  
        value={valueSearch}  
        keyboardType={keyboardTypeSearch}
        containerStyle={{
          backgroundColor:"#5db57d",
          borderBottomColor: '#5db57d',
          borderTopColor: '#5db57d',
          elevation:2
        }}
        inputContainerStyle={{
          backgroundColor: '#fff',
          borderRadius:15,
          height:45,
        }}
      />
  );
};

export default SearchHeader;
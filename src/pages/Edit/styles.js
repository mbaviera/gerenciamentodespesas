import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({  
  container:{
    flex: 1, 
    backgroundColor:'#ebebeb'
  },
  viewPrimaria:{ 
    height: 60,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle:{
    color: '#5db57d', 
    fontSize: 28, 
    alignSelf: 'center'
  },
  textBottom:{
    color: '#545454',
    fontSize: 13.5,
    fontWeight:'bold'
  },
  textLabelInput: {
    fontWeight:'bold', 
    fontSize:19, 
    marginTop:30,
    marginBottom:3,
    color:'#545454'
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    height:50,
    fontWeight:'bold',
    borderRadius:3,
    backgroundColor:'#ffffff'
  },
  containerForm:{
    margin:30,
  },
});

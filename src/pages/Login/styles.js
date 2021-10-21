import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  input: {
    height: 50,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  button: {
    width: '75%',
    borderWidth: 1,
    borderColor: '#ffffff',
    height: 50,
    fontWeight: 'bold',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5db57d',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#ffffff',
    fontSize: 20,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: '75%',
    height: 50,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    width: 200,
    height: 200,
    marginBottom:50
  },
  containerView:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});

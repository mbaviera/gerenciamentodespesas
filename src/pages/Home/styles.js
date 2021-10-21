import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  titleStyle: {
    color: '#3a3a3a',
    fontWeight: 'bold',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  subtitleStyle: {
    color: '#3a3a3a',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  viewPrimaria:{    
    position: 'absolute',
    bottom: 2,
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
    fontSize: 15,
    fontWeight:'bold'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  nameContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    color: '#545454',
    fontSize: 17,
  },
  nameTxtItem: {
    fontWeight: 'bold',
    color: '#545454',
    fontSize: 22,
    paddingVertical:5
  },
});

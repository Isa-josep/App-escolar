import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text >Ajustes screen </Text>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
    color: '#000000',
    fontWeight: 'bold',
    padding: 30,
  },
  texto: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
    paddingLeft:15,
    paddingRight:15,
  },
  deg: {
    width: 180,
    height: 180,
  },
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    marginTop: 30,
  },
  input: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    margin: 1,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  contenedor: {
    width: 200,
    alignItems: 'center',
    marginTop: 25,
  },
  modal: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  modalTxt: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    padding: 10,
  },
  ico: {
    height: 40,
    width: 40,
    borderColor: '#ddd',
  },
  content_ico: {
    marginTop: 20,
    alignItems: 'flex-end',
    marginRight: 20,
  },
  card: {
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 170,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingStart: 5,
    paddingEnd: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
  },
  menu:{
    height: 50, 
    width: 230,
  },
  text:{
    height:20,
    fontWeight: 'bold',
  },
})
;

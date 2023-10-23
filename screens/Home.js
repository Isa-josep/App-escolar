import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,Image  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';


const Home=()=>{
    
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../src/tec-logo.png')}
      />
      <Text style={styles.titulo}>Inicio</Text>
      <View style={styles.ntc}>
      <Text style={styles.cartxt}>{`El cecytem Agradece el 
compromiso de los alumnos 
Cesar Vazques Torres Y
Eleasar. "Grandes" `} </Text>
      <Image source={require('../src/ajedrez.jpg')} style={styles.ico} />
      </View>
      
      <View style={styles.ntc2}>
      <Text style={styles.cartxt}>{`Felicitamos a nuestros Alumnos 
Alexis Torres Torres Y Brayan
ortega Renteria Por su Entrega
y perseverancia.`} </Text>
      <Image source={require('../src/omi2.jpg')} style={styles.ico} />
      </View>
      <View style={styles.ntc3}>
      <Text style={styles.cartxt}>{`Rumbo a la omi, Nuestros 
alumnos estan en preparacion 
para la olimpiada mexicana de
informatica.`} </Text>
      <Image source={require('../src/omi3.jpg')} style={styles.ico} />
      </View>

      <View style={styles.ntc4}>
      <Text style={styles.cartxt}>{`Felicitamos a nuestros 
estudiantes,Brayam Ortega 
Alexis Torres Torres; 
su entrenador, Isauro Paredes; 
y su Asesora, la Mtra. Carmelina`} </Text>
      <Image source={require('../src/omi4.jpg')} style={styles.ico} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

export default Home;
const styles = StyleSheet.create({
  titulo: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
    color: '#000000',
    fontWeight: 'bold',
    marginVertical:-10,
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
    backgroundColor: '#f1f1f1',
    marginTop: 30,
    justifyContent:'center',
    textAlign:'center',
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
  modalTxt: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    padding: 10,
  },
  ico: {
    left:15,
    top:20,
    height: 70,
    width: 70,
    borderColor: '#ddd',
    borderRadius:10,
    position:'absolute',
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
  ntc:{
    position: 'absolute',
    width: 330,
    height: 107,
    left: 13,
    right:13,
    top: 150,
    backgroundColor:'#fff',
    borderRadius:10,
  },
  ntc2:{
    position: 'absolute',
    width: 330,
    height: 107,
    left: 13,
    right:13,
    top: 280,
    backgroundColor:'#fff',
    borderRadius:10,
  },
  ntc3:{
    position: 'absolute',
    width: 330,
    height: 107,
    left: 13,
    right:13,
    top: 410,
    backgroundColor:'#fff',
    borderRadius:10,
  },
  ntc4:{
    position: 'absolute',
    width: 330,
    height: 107,
    left: 13,
    right:13,
    top: 540,
    backgroundColor:'#fff',
    borderRadius:10,
  },
  cartxt:{
    left:100,
    top:10,
    fontWeight: 'bold',
  },
  logo: {
    margin: 5,
    width: 355,
    height: 110,
    left: -5,
    top: -5,
    marginRight: 90,
  },
  
})
;

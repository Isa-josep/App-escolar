import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Keyboard, FlatList, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { userData } from './Login';
//import { mod1, mod2, probabilidad, filosofia, propedeutica1, propedeutica2, prom, setHide } from './Login';
const Info = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../src/tec-logo.png')}
      />
      <Text style={styles.titulo}>Mis Calificaciones</Text>
      <View style={styles.tabla}>
        <View style={styles.fila}>
          <LinearGradient
            colors={['#E116F9', '#f1f1f1']}
            start={{ x: -1, y: 2 }}
            end={{ x: 1, y: 0 }}
            style={styles.celda1}
          >
            <Text >Mat aplicadas:</Text>
          </LinearGradient>

          <LinearGradient
            colors={['#E116F9', '#f1f1f1']}
            start={{ x: 2, y: 1 }}
            end={{ x: 0, y: 1 }}
            style={styles.celda2}
          >
            <Text>{userData.matAplicada}</Text>
          </LinearGradient>


        </View>
        <View style={styles.fila}>
          <LinearGradient
            colors={['#E116F9', '#f1f1f1']}
            start={{ x: -1, y: 2 }}
            end={{ x: 1, y: 0 }}
            style={styles.celda1}
          >
            <Text >Calculo:</Text>
          </LinearGradient>

          <LinearGradient
            colors={['#E116F9', '#f1f1f1']}
            start={{ x: 2, y: 1 }}
            end={{ x: 0, y: 1 }}
            style={styles.celda2}
          >
            <Text>{userData.mod2}</Text>
          </LinearGradient>
        </View>
        <View style={styles.fila}>

          <LinearGradient
            colors={['#E116F9', '#f1f1f1']}
            start={{ x: -1, y: 2 }}
            end={{ x: 1, y: 0 }}
            style={styles.celda1}
          >
            <Text >Programacion</Text>
          </LinearGradient>

          <LinearGradient
            colors={['#E116F9', '#f1f1f1']}
            start={{ x: 2, y: 1 }}
            end={{ x: 0, y: 1 }}
            style={styles.celda2}
          >
            <Text>{userData.probabilidad}</Text>
          </LinearGradient>
        </View>
        <View style={styles.fila}>


          <LinearGradient
            colors={['#E116F9', '#f1f1f1']}
            start={{ x: -1, y: 2 }}
            end={{ x: 1, y: 0 }}
            style={styles.celda1}
          >
            <Text >Investigacion:</Text>
          </LinearGradient>

          <LinearGradient
            colors={['#E116F9', '#f1f1f1']}
            start={{ x: 2, y: 1 }}
            end={{ x: 0, y: 1 }}
            style={styles.celda2}
          >
            <Text>{userData.filosofia}</Text>
          </LinearGradient>

        </View>
        <View style={styles.fila}>


          <LinearGradient
            colors={['#E116F9', '#f1f1f1']}
            start={{ x: -1, y: 2 }}
            end={{ x: 1, y: 0 }}
            style={styles.celda1}
          >
            <Text >Administracion</Text>
          </LinearGradient>

          <LinearGradient
            colors={['#E116F9', '#f1f1f1']}
            start={{ x: 2, y: 1 }}
            end={{ x: 0, y: 1 }}
            style={styles.celda2}
          >
            <Text>{userData.propedeutica1}</Text>
          </LinearGradient>
        </View>

        <View style={styles.fila}>

          <LinearGradient
            colors={['#E116F9', '#f1f1f1']}
            start={{ x: -1, y: 2 }}
            end={{ x: 1, y: 0 }}
            style={styles.celda1}
          >
            <Text >promedio:</Text>
          </LinearGradient>

          <LinearGradient
            colors={['#E116F9', '#f1f1f1']}
            start={{ x: 2, y: 1 }}
            end={{ x: 0, y: 1 }}
            style={styles.celda2}
          >
            <Text>{userData.prom}</Text>
          </LinearGradient>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

export default Info;
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
    paddingLeft: 15,
    paddingRight: 15,
  },
  container: {
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
  menu: {
    height: 50,
    width: 230,
  },
  text: {
    height: 20,
    fontWeight: 'bold',
  },
  tabla: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 35,
  },
  fila: {
    flexDirection: 'row',
  },
  celda1: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    width: 125
  },
  celda2: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'lightgreen',
    width: 200
  },
  logo: {
    margin: 5,
    width: 355,
    height: 110,
    left: 40,
    top: -5,
    marginRight: 90,
  },
});
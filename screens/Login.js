import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, Image, StatusBar, Modal, TextInput, TouchableOpacity, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import data from '../Data';
export const userData = {
  usuarioLogueado: null,
  gmail: null,
  especialidad: null,
  ico: null,
  ncontrol: null,
  grupo: null,
  bachi: null,
  matAplicada: null,
  mod2: null,
  probabilidad: null,
  filosofia: null,
  propedeutica1: null,
  propedeutica2: null,
  prom: null
};

const Login = () => {
  const [mod, setHide] = useState(true);
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const iniciar = () => {
    if (usuario === '' || password === '') {
      Alert.alert('Error', 'Usuario No Encontrado', [
        {
          text: 'Registrate',
          onPress: () => console.log('despues presionado'),
        },
        {
          text: 'cancelar',
          onPress: () => console.log('cancelar presionado'),
          style: 'cancel',
        },
        {
          text: 'aceptar',
          onPress: () => console.log('aceptado presionado'),
        },
      ]);
    } else {
      const usuarioEncontrado = data.find((n) => n.correo === usuario);
      if (usuarioEncontrado && usuarioEncontrado.password === password) {
        setHide(false);
        userData.usuarioLogueado = usuarioEncontrado.usuario;
        userData.gmail = usuarioEncontrado.correo;
        userData.especialidad = usuarioEncontrado.especialidad;
        userData.ico = usuarioEncontrado.icono;
        userData.ncontrol = usuarioEncontrado.no_control;
        userData.grupo = usuarioEncontrado.grupo;
        userData.bachi = usuarioEncontrado.bachillerato;
        userData.matAplicada = usuarioEncontrado.matAplicadas;
        userData.mod2 = usuarioEncontrado.Calculo;
        userData.probabilidad = usuarioEncontrado.programacion;
        userData.filosofia = usuarioEncontrado.investigacion;
        userData.propedeutica1 = usuarioEncontrado.administracion;
        userData.propedeutica2 = usuarioEncontrado.propedeutico_2;
        userData.prom = usuarioEncontrado.Promedio;
      }
    }
  };


  return (
    <View style={styles.container}>

      <View style={styles.modal}>
        <Modal visible={mod} animationType="slide">
          <View style={styles.maincontenedor}>
            <View style={styles.container}>
              <Image style={styles.logo} source={require('../src/tec-logo.png')}
              />
              <Text style={styles.titulo}>Bienvenido</Text>
              <Text style={styles.subTitulo}>inicia sesion para continuar
              </Text>
              <TextInput style={styles.input}
                placeholder="email"
                onChangeText={setUsuario}
                value={usuario}
              />
              <TextInput style={styles.input}
                placeholder="contraseña"
                secureTextEntry={true}
                onChangeText={setPassword}
                value={password}
              />
              <Text style={styles.txtPass}>¿Olvido su contraseña?</Text>
              <TouchableOpacity style={styles.contenedor} onPress={iniciar}>
                <LinearGradient
                  colors={['#64E9FF', '#103CE7']}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={styles.button}
                >
                  <Text style={styles.text}>Inicia sesión</Text>
                </LinearGradient>
              </TouchableOpacity>
              <Text style={styles.txtregistrate}>Registrate!!!</Text>
              <StatusBar style="auto" />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}
export default Login;
const styles = StyleSheet.create({
  maincontenedor: {
    backgroundColor: '#f1f1f1',
    width: '100%',
    height: '100%',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 2,
  },
  titulo: {
    fontSize: 45,
    color: '#34434d',
    fontWeight: 'bold',
    marginTop: 15,
  },
  titulo2: {
    fontSize: 32,
    color: '#34434d',
    fontWeight: 'bold',
  },
  subTitulo: {
    fontSize: 20,
    color: 'gray',
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
  txtPass: {
    fontSize: 14,
    color: 'grey',
    marginTop: 20,
  },
  txtregistrate: {
    fontSize: 14,
    color: 'grey',
    marginTop: 50,
  },
  logo: {
    margin: 5,
    width: 355,
    height: 110,
    left: 40,
    top: 30,
    marginRight: 90,
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  contenedor: {
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
    
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  
});
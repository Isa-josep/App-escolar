import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Keyboard, Modal, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import Login, { userData } from './Login';
import data from '../Data';
//import { usuarioLogueado, gmail, especialidad, ico, ncontrol, grupo, bachi, } from './Login';
import UserAvatar from 'react-native-user-avatar';
const Usuarios = () => {
  const [mod, setHide] = useState(false);
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const logOut=()=>{
    setHide(true);
  }
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
        setUsuario('');
        setPassword('');
        userData.usuarioLogueado = usuarioEncontrado.usuario;
        userData.gmail = usuarioEncontrado.correo;
        userData.especialidad = usuarioEncontrado.especialidad;
        userData.ico = usuarioEncontrado.icono;
        userData.ncontrol = usuarioEncontrado.no_control;
        userData.grupo = usuarioEncontrado.grupo;
        userData.bachi = usuarioEncontrado.bachillerato;
        userData.mod1 = usuarioEncontrado.m5s1;
        userData.mod2 = usuarioEncontrado.m5s2;
        userData.probabilidad = usuarioEncontrado.probabilidad;
        userData.filosofia = usuarioEncontrado.filosofia;
        userData.propedeutica1 = usuarioEncontrado.propedeutico_1;
        userData.propedeutica2 = usuarioEncontrado.propedeutico_2;
        userData.prom = usuarioEncontrado.promedio;
        
      }
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('../src/tec-logo.png')}
        />
      </View>
      <Text style={styles.titulo}>Mi Perfil</Text>
      <UserAvatar size={110} name={userData.usuarioLogueado} src={userData.ico} style={styles.avatar} />
      <View style={styles.tabla}>
      <View style={styles.fila}>
      <LinearGradient
          colors={['#64E9FF', '#f1f1f1']}
          start={{ x: -1, y: 2 }}
          end={{ x: 1, y: 0 }}
          style={styles.celda1}
        >
          <Text >No Control:</Text>
        </LinearGradient>
        
        <LinearGradient
          colors={['#64E9FF', '#f1f1f1']}
          start={{ x: 2, y: 1 }}
          end={{ x: 0, y: 1 }}
          style={styles.celda2}
        >
          <Text>{userData.ncontrol}</Text>
        </LinearGradient>
      </View>
      
      <View style={styles.fila}>
      <LinearGradient
          colors={['#64E9FF', '#f1f1f1']}
          start={{ x: -1, y: 2 }}
          end={{ x: 1, y: 0 }}
          style={styles.celda1}
        >
        <Text>Nombre:</Text>
        </LinearGradient>
        <LinearGradient
          colors={['#64E9FF', '#f1f1f1']}
          start={{ x: 2, y: 1 }}
          end={{ x: 0, y: 1 }}
          style={styles.celda2}
        >
          <Text>{userData.usuarioLogueado}</Text>
        </LinearGradient>
      </View>
      <View style={styles.fila}>
      <LinearGradient
          colors={['#64E9FF', '#f1f1f1']}
          start={{ x: -1, y: 2 }}
          end={{ x: 1, y: 0 }}
          style={styles.celda1}
        >
        <Text style>Grupo:</Text>
        </LinearGradient>
        <LinearGradient
          colors={['#64E9FF', '#f1f1f1']}
          start={{ x: 2, y: 1 }}
          end={{ x: 0, y: 1 }}
          style={styles.celda2}
        >
          <Text>{userData.grupo}</Text>
        </LinearGradient>
      </View>
      <View style={styles.fila}>
      <LinearGradient
          colors={['#64E9FF', '#f1f1f1']}
          start={{ x: -1, y: 2 }}
          end={{ x: 1, y: 0 }}
          style={styles.celda1}
        >
        <Text>correo:</Text>
        </LinearGradient>
        <LinearGradient
          colors={['#64E9FF', '#f1f1f1']}
          start={{ x: 2, y: 1 }}
          end={{ x: 0, y: 1 }}
          style={styles.celda2}
        >
          <Text>{userData.gmail}</Text>
        </LinearGradient>
      </View>
    </View>

      <TouchableOpacity style={styles.contenedor} onPress={logOut} >
        <LinearGradient
          colors={['#64E9FF', '#103CE7']}
          start={{ x: 1, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.button}
        >
          <Text style={styles.text}>Cerrar Sesión</Text>
        </LinearGradient>
      </TouchableOpacity>
      
      <StatusBar style={styles.status} />
      <View style={styles.modal}>
        <Modal visible={mod} animationType="slide">
          <View style={styles.maincontenedor}>
            <View style={styles.container}>
              <Image style={styles.logo} source={require('../src/tec-logo.png')}
              />
              <Text style={styles.tlt}>Bienvenido</Text>
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
              <TouchableOpacity style={styles.contenedor2} onPress={iniciar}>
                <LinearGradient
                  colors={['#64E9FF', '#103CE7']}
                  start={{ x: 1, y: 0 }}
                  end={{ x: 0, y: 1 }}
                  style={styles.button}
                >
                  <Text style={styles.text}>Login</Text>
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

export default Usuarios;
const styles = StyleSheet.create({
  maincontenedor: {
    backgroundColor: '#f1f1f1',
    width: '100%',
    height: '100%',
  },
  titulo: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
    color: '#000000',
    fontWeight: 'bold',
    padding: 30,
    marginVertical:-40
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
  deg: {
    width: 180,
    height: 180,
  },
  container: {
    width: '100%',
    height: '100%',
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
    width: '150%',
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  contenedor: {
    width: 200,
    alignItems: 'center',
    marginTop: 5,
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
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  tabla: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 15,
  },
  fila: {
    flexDirection: 'row',
  },
  celda1: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    width: 120
  },
  celda2: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#ff00a7',
    width: 200
  },
  avatar:{
  margin:15,
  },
  logo: {
    margin: 5,
    width: 355,
    height: 110,
    left: 40,
    top: -5,
    marginRight: 90,
  },
  //  header:{
  //   backgroundColor:'#d9d9d9',
  //  },
  subTitulo: {
    fontSize: 20,
    color: 'gray',
  },
  contenedor2: {
    width: 200,
    alignItems: 'center',
    marginTop: 30,
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
  tlt: {
    fontSize: 45,
    color: '#34434d',
    fontWeight: 'bold',
  },
})
;

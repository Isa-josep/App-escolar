import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Buttong(){
  return(
    <TouchableOpacity style={styles.contenedor}>
    <LinearGradient
        colors={['#FFB677', '#FF3CBD']}
        start={{x:1,y:0}}
        end={{x:0,y:1}}
        style={styles.button}
        >
        <Text style={styles.text}>Login</Text>
    </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contenedor:{
    
    width:200,
    alignItems:'center',
    marginTop: 60,
  },
  text:{
    fontSize: 14,
    color:'#fff',
    fontWeight: 'bold',
  },
  button:{
    width: '80%',
    height: 50,
    borderRadius: 30,
    alignItems:'center',
    justifyContent: 'center'
  },
 
});

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer  } from "@react-navigation/native";
import { View, Text, StyleSheet, Button, Image,StatusBar,Dimensions, TextInput } from 'react-native'; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import { Ionicons } from '@expo/vector-icons';
import Info from "./screens/Info";
import Usuarios from "./screens/Usuarios";
import { FontAwesome } from '@expo/vector-icons';
import Login from "./screens/Login";
import Tmp from "./screens/tmp";
import { GlobalStateContext } from "./screens/funtionMod";
import { MaterialCommunityIcons } from '@expo/vector-icons';
const ScreenPatallas=createNativeStackNavigator();

function Myscreens(){
    return(
        <ScreenPatallas.Navigator initialRouteName="HomeScreen">
            <ScreenPatallas.Screen name="Home" component={Home} options={{headerShown:false}}  />
        </ScreenPatallas.Navigator>

    );
}
const Tab=createBottomTabNavigator();

function Mytabs(){
    
    return(
        
        <Tab.Navigator screenOptions={{
        tabBarActiveTintColor:'purple'
        ,tabBarStyle: {
            backgroundColor: 'white', // Color de fondo de la barra de pestañas
            height:60,
          },
          tabBarLabelStyle: {
            fontSize: 14, // Tamaño de la etiqueta de texto
            padding:15,
          },
          tabBarIconStyle: {
            marginBottom: -15, // Ajustar el espacio entre el icono y la etiqueta
          },
          }}>
            <Tab.Screen name="Homes" component={Myscreens} options={{
                tabBarLabel:'Inicio', 
                tabBarIcon:({ color,size })=>(
                <Ionicons name="ios-home-sharp" size={size} color={color} />
                ),
                tabBarBadge:" ",
                headerShown:false //oculta el ttulo
                }}/>
                
            <Tab.Screen name="Usuario" component={Usuarios} options={{
                tabBarLabel:'Usuario',
                tabBarIcon:({ color,size })=>(
                    <FontAwesome name="user" size={size} color={color} />
                    ),
                    headerShown:false
            }} />

                <Tab.Screen name="Info" component={Info} options={{
                tabBarLabel:'Info',
                tabBarIcon:({ color,size })=>(
                    <MaterialCommunityIcons name="note-edit" size={24} color={color} />
                    
                    ),
                    
                    headerShown:false
            }} />

                <Tab.Screen name="Tmp" component={Tmp} options={{
                tabBarLabel:'Horario',
                tabBarIcon:({ color,size })=>(
                    <Ionicons name="ios-information-circle-outline" size={size} color={color} />
                    ),
                    
                    
                    headerShown:false
            }}/>
        </Tab.Navigator>
    );
}


export default function Navigation(){
    
    return(
        <NavigationContainer>
            
            <Login/>
            <Mytabs/>
        </NavigationContainer>
        
    );
}

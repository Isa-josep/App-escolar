import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
const coloresMaterias = {
  'Administración': '#ff00a7',
  'Programación': '#00ff00',
  'Ética': '#0099ff',
  'Mts Discretas': '#ff9900',
  'Cálculo': '#9900ff',
  'Investigación': '#64E9FF',
  'Tutorias': 'red',
};
const HorarioClases = () => {
  const horas = [
    '1:00 PM \nA \n2:00 PM',
    '2:00 PM \nA \n3:00 PM',
    '3:00 PM \nA \n4:00 PM',
    '4:00 PM \nA \n5:00 PM',
    '5:00 PM \nA \n6:00 PM',
    '6:00 PM \nA \n7:00 PM',
  ];

  const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

  const clases = [
    { dia: 'Lunes', materia: 'Administración', horaInicio: '1:00 PM \nA \n2:00 PM', horaFin: '2:00 PM' },
    { dia: 'Lunes', materia: 'Administración', horaInicio: '2:00 PM \nA \n3:00 PM', horaFin: '3:00 PM' },
    { dia: 'Lunes', materia: 'Programación', horaInicio: '3:00 PM \nA \n4:00 PM', horaFin: '4:00 PM' },
    { dia: 'Lunes', materia: 'Programación', horaInicio: '4:00 PM \nA \n5:00 PM', horaFin: '5:00 PM' },
    { dia: 'Lunes', materia: 'Ética', horaInicio: '5:00 PM \nA \n6:00 PM', horaFin: '6:00 PM' },
    { dia: 'Lunes', materia: 'Ética', horaInicio: '6:00 PM \nA \n7:00 PM', horaFin: '7:00 PM' },
    
    { dia: 'Martes', materia: 'Mts Discretas', horaInicio: '1:00 PM \nA \n2:00 PM', horaFin: '2:00 PM' },
    { dia: 'Martes', materia: 'Mts Discretas', horaInicio: '2:00 PM \nA \n3:00 PM', horaFin: '3:00 PM' },
    { dia: 'Martes', materia: 'Cálculo', horaInicio: '3:00 PM \nA \n4:00 PM', horaFin: '4:00 PM' },
    { dia: 'Martes', materia: 'Administración', horaInicio: '4:00 PM \nA \n5:00 PM', horaFin: '5:00 PM' },
    { dia: 'Martes', materia: 'Administración', horaInicio: '5:00 PM \nA \n6:00 PM', horaFin: '6:00 PM' },

    { dia: 'Miércoles', materia: 'Tutorias', horaInicio: '1:00 PM \nA \n2:00 PM', horaFin: '2:00 PM' },
    { dia: 'Miércoles', materia: 'Programación', horaInicio: '2:00 PM \nA \n3:00 PM', horaFin: '3:00 PM' },
    { dia: 'Miércoles', materia: 'Programación', horaInicio: '3:00 PM \nA \n4:00 PM', horaFin: '4:00 PM' },
    { dia: 'Miércoles', materia: 'Programación', horaInicio: '4:00 PM \nA \n5:00 PM', horaFin: '5:00 PM' },
    { dia: 'Miércoles', materia: 'Ética', horaInicio: '5:00 PM \nA \n6:00 PM', horaFin: '6:00 PM' },
    { dia: 'Miércoles', materia: 'Ética', horaInicio: '6:00 PM \nA \n7:00 PM', horaFin: '7:00 PM' },

    { dia: 'Jueves', materia: 'Mts Discretas', horaInicio: '1:00 PM \nA \n2:00 PM', horaFin: '3:00 PM' },
    { dia: 'Jueves', materia: 'Mts Discretas', horaInicio: '2:00 PM \nA \n3:00 PM', horaFin: '3:00 PM' },
    { dia: 'Jueves', materia: 'Investigación', horaInicio: '3:00 PM \nA \n4:00 PM', horaFin: '4:00 PM' },
    { dia: 'Jueves', materia: 'Investigación', horaInicio: '4:00 PM \nA \n5:00 PM', horaFin: '5:00 PM' },
    { dia: 'Jueves', materia: 'Cálculo', horaInicio: '5:00 PM \nA \n6:00 PM', horaFin: '6:00 PM' },
    { dia: 'Jueves', materia: 'Cálculo', horaInicio: '6:00 PM \nA \n7:00 PM', horaFin: '7:00 PM' },

    { dia: 'Viernes', materia: 'Mts Discretas', horaInicio: '1:00 PM \nA \n2:00 PM', horaFin: '2:00 PM' },
    { dia: 'Viernes', materia: 'Investigación', horaInicio: '2:00 PM \nA \n3:00 PM', horaFin: '3:00 PM' },
    { dia: 'Viernes', materia: 'Investigación', horaInicio: '3:00 PM \nA \n4:00 PM', horaFin: '4:00 PM' },
    
  ];

  return (
    <ScrollView horizontal contentContainerStyle={styles.container}>
      <View style={styles.hourColumn}>
        {horas.map((hora, i) => (
          <View key={i} style={styles.horaCell}>
            <Text style={styles.horaText}>{hora}</Text>
          </View>
        ))}
      </View>
      {diasSemana.map((dia, index) => (
        <View key={index} style={styles.dayColumn}>
          <Text style={styles.dayText}>{dia}</Text>
          {horas.map((hora, i) => (
            <View key={i} style={styles.horaCell}>
              {clases
                .filter((clase) => clase.dia === dia && clase.horaInicio === hora)
                .map((clase, j) => (
                  <View key={j} style={[styles.celda, { backgroundColor: coloresMaterias[clase.materia] }]}>
                    <Text style={styles.materiaText}>{clase.materia}</Text>
                  </View>
                ))
              }
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 70,
  },
  celda: {
    marginVertical:-10,
    padding: 5,
    alignItems: 'center',
    height:79,
    width:85,
  },
  materiaText: {
    textAlign: 'center',
  },
  hourColumn: {
    width: 85,
    height:476,
    marginVertical:24,
    flexDirection: 'column',
    borderWidth: 1,
    borderRightWidth: 1, 
    // backgroundColor: '#ff00a7', 
  },
  dayColumn: {
    width: 85,
    height: 500,
    borderWidth: 1,
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  horaCell: {
    width: 85,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    padding: 10,
    height:79,
    alignItems: 'center',
  },
  horaText: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default HorarioClases;

import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Image } from 'react-native';
import { styles } from './styles';

const About = () => {
  const desarrollador = {
    nombre: "Jese Arreola",
    profesion: "Ingeniero en Sistemas",
    experiencia: 24,
    ciudad: "Barra de Navidad, Jalisco",
    fechaNacimiento: "8 de mayo de 2001"
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Acerca del Desarrollador</Text>
        
        <View style={styles.ejercicio}>
          <Text style={styles.subtitle}>Datos Personales</Text>
          <Text style={styles.text}>**Nombre:** {desarrollador.nombre}</Text>
          <Text style={styles.text}>**Profesión:** {desarrollador.profesion}</Text>
          <Text style={styles.text}>**Experiencia:** {desarrollador.experiencia} años</Text>
          <Text style={styles.text}>**Ubicación:** {desarrollador.ciudad}</Text>
          <Text style={styles.text}>**Fecha de Nacimiento:** {desarrollador.fechaNacimiento}</Text>
          
          <Text style={[styles.text, {marginTop: 20, fontStyle: 'italic'}]}>
            "Apasionado por el desarrollo móvil y el aprendizaje continuo de JavaScript."
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
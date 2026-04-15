import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { styles } from "./styles";

const Ejercicio1 = () => {
    const nombre = "Juan";
    const edad = 25;
    const altura = 1.75;

    const gustos = ["leer", "viajar", "programar"];

    const persona = {
        ciudad: "La Huerta, Jalisco",
        profesion: "Licenciado en Sistemas",
        experiencia: 16, // años de experiencia
    };

    const saludar = () => {
        return `Hola, mi nombre es ${nombre}`;
    }

    const fechaNacimiento = new Date(1977,7,6);//6 de agosto de 1977
    return (
        <View style={styles.ejercicio}>
            <Text style={styles.subtitle}>Ejercicio 1 - Variables y tipos de datos</Text>
            <Text style={styles.text}>
                En Javascript, podemos manejar diferentes tipos de datos como:
            </Text>
            <Text style={[styles.text, {marginTop:10}]}> Tipos primitivos:</Text>
            <Text style={styles.text}>- Cadena de texto: {nombre} (Tipo: {typeof nombre})</Text>
            <Text style={styles.text}>- Número: {edad} (Tipo: {typeof edad})</Text>
            <Text style={styles.text}>- Número decimal: {altura} (Tipo: {typeof altura})</Text>
            <Text style={[styles.text, {marginTop:10}]}> Tipo compuesto:</Text>
            <Text style={styles.text}>- Arreglo: {JSON.stringify(gustos)} (Tipo: {typeof gustos})</Text>
            <Text style={styles.text}>- Objeto: {JSON.stringify(persona)} (Tipo: {typeof persona})</Text>
            <Text style={[styles.text, {marginTop:10}]}> Tipo función:</Text>
            <Text style={styles.text}>- Función saludar(): {saludar()} (Tipo: {typeof saludar})</Text>
            <Text style={[styles.text, {marginTop:10}]}> Tipo fecha:</Text>
            <Text style={styles.text}>- Fecha de nacimiento: {fechaNacimiento.toDateString()} (Tipo: {typeof fechaNacimiento})</Text>
            <Text style={[styles.text, {marginTop:10, fontStyle:"italic"}]}>
                Nota: Los tipos de datos en JavaScript son dinámicos, lo que significa que una variable puede cambiar de tipo durante la ejecución del programa.
            </Text>
        </View>
    );
};

export default Ejercicio1;

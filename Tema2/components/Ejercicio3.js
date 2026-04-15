import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { styles } from "./styles";

const Ejercicio3= () => {
  const a = 10;
    const b = 3;
    const c = "10";
    return (
        <View style={styles.ejercicio}>
            <Text style={styles.subtitle}>Ejercicio 3: Información sobre estructuras de control</Text>
            <Text style={styles.text}>  
                A continuación, se describen las principales estructuras de control:
            </Text>
            <Text style={[styles.text, {marginTop:10}]}>1. Estructuras Condicionales:</Text>
            <Text style={styles.text}>- if: Ejecuta un bloque de código si una condición es verdadera.</Text>
            <Text style={styles.text}>- if...else: Ejecuta un bloque de código si una condición es verdadera y otro bloque si es falsa.</Text>
            <Text style={styles.text}>- else if: Permite verificar múltiples condiciones en secuencia.</Text>
            <Text style={styles.text}>- switch: Selecciona uno de varios bloques de código para ejecutar, basado en el valor de una expresión.</Text>   
            <Text style={[styles.text, {marginTop:10}]}>2. Estructuras de Repetición:</Text>
            <Text style={styles.text}>- for: Repite un bloque de código un número específico de veces.</Text>
            <Text style={styles.text}>- while: Repite un bloque de código mientras una condición sea verdadera.</Text>  
            <Text style={styles.text}>- do...while: Ejecuta un bloque de código al menos una vez y luego repite mientras una condición sea verdadera.</Text>
            <Text style={[styles.text, {marginTop:10}]}>3. Control de Flujo Adicional:</Text>
            <Text style={styles.text}>- break: Termina la ejecución de un bucle o switch.</Text>
            <Text style={styles.text}>- continue: Salta a la siguiente iteración de un bucle.</Text>
            <Text style={styles.text}>- return: Sale de una función y opcionalmente devuelve un valor.</Text>
            <Text style={[styles.text, {marginTop:10}]}>Ejemplo Práctico:</Text>
            <Text style={styles.text}>
                Consideremos las variables a = 10 (número), b = 3 (número) y c = "10" (cadena de texto). A continuación, se muestra un ejemplo utilizando estructuras condicionales y de repetición:    
            </Text>
            <Text style={styles.text}>
                - Estructura if...else: 
                {a == c ? `La variable a (${a}) es igual a la variable c ("${c}").` : `La variable a (${a}) no es igual a la variable c ("${c}").`}
            </Text>
            <Text style={styles.text}>  
                - Estructura for:
                {Array.from({ length: b }, (_, i) => (` Iteración ${i + 1} `)).join(', ')}
            </Text>
        </View>
    );
};
export default Ejercicio3;
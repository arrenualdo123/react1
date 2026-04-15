import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { styles } from "./styles";

const Ejercicio2= () => {
  const x = 15;
    const y = 4;
    const z = "15";

    return (
        <View style={styles.ejercicio}>
            <Text style={styles.subtitle}>Ejercicio 2: Operadores y coercion de Tipos</Text>
            <Text style={styles.text}>
                En Javascript, los operadores pueden comportarse de manera diferente según los tipos de datos involucrados. A continuación, se muestran algunos ejemplos utilizando las variables x = 15 (número), y = 4 (número) y z = "15" (cadena de texto):
            </Text>
            <Text style={[styles.text, {marginTop:10}]}>Operadores Aritméticos:</Text>
            <Text style={styles.text}>- Suma (x + y): {x + y} (Tipo: {typeof (x + y)})</Text>
            <Text style={styles.text}>- Resta (x - y): {x - y} (Tipo: {typeof (x - y)})</Text>
            <Text style={styles.text}>- Multiplicación (x * y): {x * y} (Tipo: {typeof (x * y)})</Text>
            <Text style={styles.text}>- División (x / y): {x / y} (Tipo: {typeof (x / y)})</Text>
            <Text style={styles.text}>- Módulo (x % y): {x % y} (Tipo: {typeof (x % y)})</Text>
            <Text style={[styles.text, {marginTop:10}]}>Coerción de Tipos con Operadores:</Text>
            <Text style={styles.text}>- Suma con cadena (x + z): {x + z} (Tipo: {typeof (x + z)})</Text>
            /* Coerción de tipos */
            <Text style={[styles.text, {marginTop:10}]}>Coerción de Tipos:</Text>
            <Text style={styles.text}>- Suma con cadena (x + z): {x + z} (Tipo: {typeof (x + z)})</Text>
            <Text style={styles.text}>- Resta con cadena (x - z): {x - z} (Tipo: {typeof (x - z)})</Text>
            <Text style={styles.text}>- Multiplicación con cadena (x * z): {x * z} (Tipo: {typeof (x * z)})</Text>
            <Text style={styles.text}>- División con cadena (x / z): {x / z} (Tipo: {typeof (x / z)})</Text>
            /* Operadores relacionales  */
            <Text style={[styles.text, {marginTop:10}]}>Operadores Relacionales:</Text>
            <Text style={styles.text}>- Igualdad (x == z): {(x == z).toString()} (Tipo: {typeof (x == z)})</Text>
            <Text style={styles.text}>- Identidad (x === z): {(x === z).toString()} (Tipo: {typeof (x === z)})</Text>
            <Text style={styles.text}>- Desigualdad (x != y): {(x != y).toString()} (Tipo: {typeof (x != y)})</Text>
            <Text style={styles.text}>- {x} {'>'} {y}: {(x > y).toString()} (Tipo: {typeof (x > y)})</Text>
            <Text style={styles.text}>- Menor que (x {'<'} y): {(x < y).toString()} (Tipo: {typeof (x < y)})</Text>
            /* Operadores lógicos */
            <Text style={[styles.text, {marginTop:10}]}>Operadores Lógicos:</Text>
            <Text style={styles.text}>- AND (x {'>'} 10 && y {'<'} 10): {(x > 10 && y < 10).toString()} (Tipo: {typeof (x > 10 && y < 10)})</Text>
            <Text style={styles.text}>- OR (x {'<'} 10 || y {'<'} 10): {(x < 10 || y < 10).toString()} (Tipo: {typeof (x < 10 || y < 10)})</Text>
            <Text style={styles.text}>- NOT (!(x {'>'} y)): {(!(x > y)).toString()} (Tipo: {typeof (!(x > y))})</Text>
        </View>
    );
}
export default Ejercicio2;
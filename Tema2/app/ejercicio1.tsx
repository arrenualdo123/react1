import { ScrollView, SafeAreaView } from 'react-native';
import Ejercicio1 from '../components/Ejercicio1';
import { styles } from '../components/styles';
import { Stack } from 'expo-router';

export default function PaginaEjercicio1() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Esto pone el título en la barra superior */}
      <Stack.Screen options={{ title: "Variables" }} /> 
      <ScrollView contentContainerStyle={styles.content}>
        <Ejercicio1 />
      </ScrollView>
    </SafeAreaView>
  );
}
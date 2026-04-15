import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Importamos tus componentes existentes
import Ejercicio1 from '../../components/Ejercicio1';
import Ejercicio2 from '../../components/Ejercicio2';
import Ejercicio3 from '../../components/Ejercicio3'; 
import AboutScreen from '../../components/About'; 

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    // NOTA: No uses <NavigationContainer> aquí
    <Tab.Navigator 
      screenOptions={{
        headerShown: true, // Para ver el título arriba
        tabBarStyle: { backgroundColor: '#f8f9fa' },
        tabBarActiveTintColor: '#2196F3',
      }}
    >
      <Tab.Screen 
        name="Variables" 
        component={Ejercicio1} 
        options={{ title: 'Ejercicio 1' }} 
      />
      <Tab.Screen 
        name="Operadores" 
        component={Ejercicio2} 
        options={{ title: 'Ejercicio 2' }} 
      />
      <Tab.Screen 
        name="Control" 
        component={Ejercicio3} 
        options={{ title: 'Ejercicio 3' }} 
      />
      <Tab.Screen 
        name="Perfil" 
        component={AboutScreen}
        options={{ title: 'Desarrollador' }} 
      />
    </Tab.Navigator>
  );
}
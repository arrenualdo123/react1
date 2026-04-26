import { Text, View, StyleSheet, Button, Alert } from "react-native";
import { Link } from "expo-router";
import { usePushNotifications, sendLocalNotification, sendPushNotification } from "../../hooks/usePushNotifications";

export default function About() {
  const { expoPushToken, notification, permissionStatus } = usePushNotifications();

  const handleNotification = () => {
    Alert.alert(
      ' Notificación',
      `Título: ${notification?.request.content.title || 'N/A'}\nCuerpo: ${notification?.request.content.body || 'N/A'}`,
      [{ text: 'OK' }]
    );
  };

  const handleSendLocalNotification = async () => {
    try {
      await sendLocalNotification(
        '¡Hola desde StikerSmash! ',
        'Esta es una notificación local de prueba',
        { screen: 'about', action: 'test' }
      );
      Alert.alert(' Enviado', 'Notificación local enviada correctamente');
    } catch (error) {
      Alert.alert(' Error', 'No se pudo enviar la notificación');
    }
  };

  const handleSendPushNotification = async () => {
    if (!expoPushToken) {
      Alert.alert(' Sin token', 'Aún no se ha obtenido el token de notificaciones');
      return;
    }

    try {
      await sendPushNotification(
        expoPushToken,
        '¡Notificación Push! 📬',
        'Has recibido una notificación push desde el servidor de Expo',
        { screen: 'about', action: 'push' }
      );
      Alert.alert(' Enviado', 'Notificación push enviada correctamente');
    } catch (error) {
      Alert.alert(' Error', 'No se pudo enviar la notificación push');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Notificaciones Push</Text>
      
      <View style={styles.section}>
        <Text style={styles.label}>Estado de permisos:</Text>
        <Text style={styles.value}>{permissionStatus}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Token:</Text>
        <Text style={styles.token} numberOfLines={3}>
          {expoPushToken ? expoPushToken.substring(0, 50) + '...' : 'Obteniendo...'}
        </Text>
      </View>

      {notification && (
        <View style={styles.section}>
          <Text style={styles.label}>Última notificación:</Text>
          <Text style={styles.value}>
            {notification.request.content.title}
          </Text>
          <Text style={styles.subValue}>
            {notification.request.content.body}
          </Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <Button 
          title="📬 Enviar Notificación Local" 
          onPress={handleSendLocalNotification}
          color="#4CAF50"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="📨 Enviar Notificación Push" 
          onPress={handleSendPushNotification}
          color="#2196F3"
        />
      </View>

      <Link href="./" style={styles.link}>
        ← Volver a Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    backgroundColor: "#16213e",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  label: {
    color: "#aaa",
    fontSize: 14,
    marginBottom: 5,
  },
  value: {
    color: "#fff",
    fontSize: 16,
  },
  subValue: {
    color: "#888",
    fontSize: 14,
    marginTop: 5,
  },
  token: {
    color: "#4CAF50",
    fontSize: 12,
    fontFamily: "monospace",
  },
  buttonContainer: {
    marginVertical: 8,
  },
  link: {
    color: "#4CAF50",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});
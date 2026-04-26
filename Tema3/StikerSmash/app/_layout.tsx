import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { View, ActivityIndicator, Alert } from "react-native";
import { usePushNotifications, sendLocalNotification } from "../hooks/usePushNotifications";

SplashScreen.preventAutoHideAsync();

function NotificationProvider({ children }: { children: React.ReactNode }) {
  const { expoPushToken, notification, permissionStatus } = usePushNotifications();

  useEffect(() => {
    if (notification) {
      console.log(' Notificación recibida en layout raíz');
      console.log('Título:', notification.request.content.title);
      console.log('Cuerpo:', notification.request.content.body);
    }
  }, [notification]);

  useEffect(() => {
    if (expoPushToken) {
      console.log(' Token de notificaciones listo');
    }
  }, [expoPushToken]);

  useEffect(() => {
    if (permissionStatus !== 'unknown') {
      console.log(' Estado de permisos:', permissionStatus);
    }
  }, [permissionStatus]);

  return <>{children}</>;
}

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (isReady) {
      SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
      }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NotificationProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false }}
        />
      </Stack>
    </NotificationProvider>
  );
}
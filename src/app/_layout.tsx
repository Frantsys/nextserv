import { useEffect, useState } from "react";
import { Stack, useRouter } from "expo-router"; // Importamos useRouter
import * as SplashScreen from 'expo-splash-screen';
import { View, ActivityIndicator, Text } from "react-native";
import { colors, fonts } from "@/theme";

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';
import {
  Manrope_400Regular,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from '@expo-google-fonts/manrope';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  
  // mock de estado de autenticação
  const [isAuthenticated] = useState(false); 

  const [fontsLoaded, error] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
    Manrope_400Regular,
    Manrope_600SemiBold,
    Manrope_700Bold,
    Manrope_800ExtraBold,
  });

  useEffect(() => {
    if (fontsLoaded || error) {
      SplashScreen.hideAsync();

      if (isAuthenticated) {
        router.replace("/(tabs)/home");
      } else {
        router.replace("/");
      }
    }
  }, [fontsLoaded, error, isAuthenticated]);

  if (!fontsLoaded && !error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background["DEFAULT"] }}>
        <ActivityIndicator size="large" color={colors.primary["DEFAULT"]} />
        <Text style={{ 
          marginTop: 16, 
          fontFamily: fonts.sans.medium 
        }}>Carregando aplicativo...</Text>
      </View>
    );
  }

  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          presentation: 'modal', 
          headerShown: false 
        }} 
      />

      <Stack.Screen 
        name="login" 
        options={{ 
          presentation: 'pageSheet', 
          headerShown: false 
        }} 
      />

      <Stack.Screen 
        name="signup" 
        options={{ 
          presentation: 'pageSheet', 
          headerShown: false 
        }} 
      />

      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }} 
      />
    </Stack>
  );
}
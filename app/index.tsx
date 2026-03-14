import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors, FontSize, Spacing } from './constants/theme';

export default function SplashScreen() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkSetup();
  }, []);

  const checkSetup = async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      const saved = await AsyncStorage.getItem('kanutsananfx_state');
      if (saved) {
        const state = JSON.parse(saved);
        if (state.isMetaApiConnected && state.isAiConnected) {
          router.replace('/(tabs)/chat');
          return;
        }
      }
      router.replace('/screens/setup');
    } catch {
      router.replace('/screens/setup');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>📊</Text>
        <Text style={styles.title}>KanutsananFX</Text>
        <Text style={styles.subtitle}>Forex Trading AI Agent</Text>
      </View>
      <ActivityIndicator size="large" color={Colors.accentGold} style={styles.loader} />
      <Text style={styles.version}>v1.0.0-beta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: Spacing.xxl,
  },
  logoText: {
    fontSize: 80,
    marginBottom: Spacing.md,
  },
  title: {
    fontSize: FontSize.title,
    fontWeight: 'bold',
    color: Colors.accentGold,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontSize: FontSize.lg,
    color: Colors.textSecondary,
  },
  loader: {
    marginTop: Spacing.xl,
  },
  version: {
    position: 'absolute',
    bottom: Spacing.xxl,
    color: Colors.textMuted,
    fontSize: FontSize.sm,
  },
});

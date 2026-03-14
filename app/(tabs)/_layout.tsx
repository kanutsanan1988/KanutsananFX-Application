import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/theme';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.accentGold,
        tabBarInactiveTintColor: Colors.textMuted,
        tabBarStyle: {
          backgroundColor: Colors.surface,
          borderTopColor: Colors.border,
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 8,
          paddingTop: 4,
        },
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: Colors.text,
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Tabs.Screen
        name="chat"
        options={{
          title: 'แชท AI',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" size={size} color={color} />
          ),
          headerTitle: 'KanutsananFX - แชท AI',
        }}
      />
      <Tabs.Screen
        name="trade"
        options={{
          title: 'เทรด',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="trending-up" size={size} color={color} />
          ),
          headerTitle: 'คำสั่งเทรด',
        }}
      />
      <Tabs.Screen
        name="skills"
        options={{
          title: 'ปรับแต่งสกิล',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
          headerTitle: 'ปรับแต่งสกิลการเทรด',
        }}
      />
      <Tabs.Screen
        name="guide"
        options={{
          title: 'คู่มือ',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
          headerTitle: 'คู่มือการใช้งาน',
        }}
      />
      <Tabs.Screen
        name="developer"
        options={{
          title: 'ผู้พัฒนา',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
          headerTitle: 'ข้อมูลผู้พัฒนา',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'ตั้งค่า',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cog" size={size} color={color} />
          ),
          headerTitle: 'ตั้งค่า',
        }}
      />
    </Tabs>
  );
}

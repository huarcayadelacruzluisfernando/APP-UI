import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-800">
      <TouchableOpacity className="bg-teal-500 p-3 rounded-lg">
        <Text className="text-white text-3xl font-bold">Hello Luis!!</Text>
      </TouchableOpacity>
      <StatusBar style="light" />
    </View>
  );
}


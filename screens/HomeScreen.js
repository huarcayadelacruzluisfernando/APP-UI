import React from 'react';
import {StyleSheet, Text, SafeAreaView, TouchableOpacity, View} from 'react-native';
import { themeColors } from '../theme';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';

 
export default function HomeScreen() {
  const handleLogout = async ()=>{
    await signOut(auth);
  }
  return (
    <SafeAreaView 
    className="flex-1 flex justify-center space-y-3 items-center"
    style={{backgroundColor:themeColors.bg}}>
      <Text className="text-xl font-semibold text-white">Home content:</Text>
      <TouchableOpacity 
      className="p-1 bg-yellow-400 rounded-lg"
      onPress={handleLogout}>
        <Text className="text-white text-2xl p-2 font-bold ">Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
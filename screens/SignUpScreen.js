//Importar los elemento necesarios
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, TextInput , SafeAreaView} from 'react-native';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import {ArrowLeftIcon} from 'react-native-heroicons/solid';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const SignUpScreen = ({route}) =>{ 
    const navigation = useNavigation();
    const [email, setEmail]= useState('');
    const [password, setPassword]=useState('');
    const handleSubmit = async ()=>{
        if(email && password){
            try{
                await createUserWithEmailAndPassword(auth, email, password);
            }catch(err){
                console.log('got error: ', err.message)
            }
        }
    }
    return(
        <View className="flex-1  pt-12" style={{ backgroundColor: themeColors.bg}}>
            {/*Header*/}
            <SafeAreaView className="flex p-1">
                {/*Boton regreso*/}
                <View className="flex-row justify-start">
                    <TouchableOpacity onPress={()=>navigation.goBack()}
                        className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4 ">
                        <ArrowLeftIcon size="20" color="black"/>
                    </TouchableOpacity>
                </View>
                {/* imagen */}
                <View className="flex-row justify-center">
                    <Image source={require("../assets/images/signup.png")}
                        style={{height:150, width:150}}/>
                </View>
            </SafeAreaView>
            <View className="flex-1 bg-white px-8 pt-8"
                style={{borderTopLeftRadius:50, borderTopRightRadius:50}}>
                {/*Form Login*/}
                <View className="form space-y-2">
                        {/*Full Name input*/}
                        <Text className="text-gray-700 ml-4">Full Name</Text>
                        <TextInput
                            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                            //keyboardType=""
                            //value={username}
                            placeholder='Username'
                        />
                        {/*Email input*/}
                        <Text className="text-gray-700 ml-4">Email Adrress</Text>
                        <TextInput
                            className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={value=>setEmail(value)}
                            placeholder='Example@mail.com'
                        />
                        {/*Password input*/}
                        <Text className="text-gray-700 ml-4">Password</Text>
                        <TextInput
                            className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-7"
                            secureTextEntry
                            value={password}
                            onChangeText={value=>setPassword(value)}
                            placeholder='password'
                        />
                        {/*Boton login*/}
                        <TouchableOpacity 
                            className="py-3 bg-yellow-400 rounded-xl"
                            onPress={handleSubmit}>
                            <Text className="font-xl font-bold text-center text-gray-700">
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                </View>
                {/*Divider*/}
                
                <View className="flex flex-row justify-center space-x-4">
                    <View className="border-t border-gray-200 my-auto w-1/3" />
                    <Text className="text-xl text-gray-700 font-semibold py-5">
                        Or
                    </Text>
                    <View className="border-t border-gray-200 my-auto w-1/3" />
                </View>

                
                {/*Cajon de app de login*/}
                <View className="flex-row justify-center space-x-12">
                        {/*Boton Google*/}
                        <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                            <Image source={require('../assets/icons/google.png')}
                                className="w-10 h-10"/>
                        </TouchableOpacity>
                        {/*Boton Facebook*/}
                        <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                            <Image source={require('../assets/icons/facebook.png')}
                                className="w-10 h-10"/>
                        </TouchableOpacity>
                        {/*Boton Apple*/}
                        <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                            <Image source={require('../assets/icons/apple.png')}
                                className="w-10 h-10"/>
                        </TouchableOpacity>
                </View>

                {/*Comentario Sign In*/}
                <View className="flex-row justify-center mt-7">
                    <Text className="text-gray-700 font-semibold">
                    Already have an account?
                    </Text>
                    <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                        <Text className="text-yellow-400 font-semibold"> Login
                        </Text>
                    </TouchableOpacity>
                </View>
                    
            </View>
            
        </View>
    )   
}

export default SignUpScreen;
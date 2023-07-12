import React from 'react';
import { Text, TouchableOpacity, View, Image, SafeAreaView} from 'react-native';
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() { 
    const navigation = useNavigation();
    return(
        <SafeAreaView className="flex-1" 
            style={{backgroundColor: themeColors.bg}}>
            <View className="flex-1 flex justify-around my-4">
                {/*Titulo*/}
                <Text className ="text-white font-bold text-4xl text-center">
                    Let's Get Started
                </Text>
                {/*imagen inicio*/}
                <View className="flex-row justify-center">
                    <Image source={require("../assets/images/welcome.png")}
                        style={{width: 350, height:350}}/>
                </View>
                <View className="space-y-4">
                    {/*Boton Sign Up*/}
                    <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}
                        className="py-3 bg-yellow-400 mx-7 rounded-xl">
                            <Text className="text-xl font-bold text-center text-gray-700">
                                Sign Up</Text>
                    </TouchableOpacity>
                    {/*Comentario Login*/}
                    <View className="flex-row justify-center">
                        <Text className="text-white font-semibold">Already have an account? </Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                            <Text className="text-yellow-400 font-semibold"> Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>        
            </View>
        </SafeAreaView>
    )   
}
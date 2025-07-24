import { View, TextInput, Text, TouchableOpacity, KeyboardAvoidingView , Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import { Mail, Lock } from 'lucide-react-native'

const BackIcon = () => (
    <View className="w-6 h-6 flex-shrink-0 items-center justify-center">
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path d="M6 8L2 12L6 16" stroke="#3B3232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M2 12H22" stroke="#3B3232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    </View>
);


export default function InputField() {
    return (
        <SafeAreaView className="w-full px-4 my-4">
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                className="w-full"
            >
            <View className="flex-row items-center mb-6 mt-[20px]">
                <TouchableOpacity className="mr-auto">
                    <BackIcon />
                </TouchableOpacity>
                {/* 9:41 ve pil göstergesi gibi üst çubuk öğeleri burada eklenebilir. */}
            </View>
            <View className='justify-center h-full '>
                <Text className="mb-2 text-gray-700 text-base">Kullanıcı Adı</Text>
                <View className="flex-row items-center bg-gray-100 rounded-lg px-4 py-3 border border-gray-300 w-full">
                    <Mail size={24} color="#6B7280" className="mr-3" />
                    <TextInput
                        className="flex-1 mb-1 text-gray-700 px-2 text-base"
                        placeholder="E-posta adresinizi girin"
                        placeholderTextColor="#A0AEC0"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>
                <Text className="mb-2 mt-2 text-gray-700 text-base">Şifre</Text>
                <View className="flex-row items-center bg-gray-100 rounded-lg px-4 py-3 border border-gray-300 w-full">
                    <Lock size={24} color="#6B7280" className="mr-3" />
                    <TextInput
                        className="flex-1 mb-1 text-gray-700 px-2 text-base"
                        placeholder="Şifrenizi Giriniz"
                        placeholderTextColor="#A0AEC0"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        secureTextEntry={true}
                    />
                </View>
            </View>
            
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

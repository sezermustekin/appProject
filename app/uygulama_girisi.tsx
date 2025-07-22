import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import PolicyText from "../src/components/PolicyText";
import SocialButton from "../src/components/SocialButton";

export default function giris_2(){
    return (
        <View className=" w-full h-full items-center justify-start bg-krem-100 px-5 pt-10 ">
      <Image
        source={require("../assets/images/nevada.png")}
        className="w-[197px] h-[134px] mb-[44px] mt-[99px]"
        resizeMode="contain"
      />
      {/* Description Text */}
      <Text className="text-base text-coffee-green text-center mb-4">
        Hesabını seçerek kayıt olabilir veya giriş yapabilirsin.
      </Text>
       <SocialButton icon="google" text="Google ile Devam Et" />
       <SocialButton icon="apple" text="Apple ile Devam Et" />
       <SocialButton icon="facebook" text="Facebook ile Devam Et" />
       <SocialButton icon="twitter" text="Twitter ile Devam Et" />

       <TouchableOpacity className="bg-green-100 rounded-xl py-3 mb-3 mt-[50px] w-[350px]">
        <Text className="text-white-100 text-center bg-green text-lg font-bold ">Kayit Ol</Text>
        </TouchableOpacity>
        <TouchableOpacity className="border border-green-100  rounded-xl w-[350px] py-3">
        <Text className="text-coffee-green text-center text-lg font-bold">Giris Yap</Text>
        </TouchableOpacity>

        <View className="flex-row mt-6">
        <PolicyText text="Gizlilik Politikası" />
        <View className="w-1.5 h-1.5 rounded-full bg-[#898989] mx-2 self-center" /> 
        <PolicyText text="Kullanım Şartları" />
        </View>
      </View>
      
    );
}
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function giris(){
    return (
        <View className="w-full h-full items-center bg-krem-100 justify-center">
      <Image
        source={require("../assets/images/image2.jpg")}
        className="w-full h-56 rounded-xl px-4 "
        resizeMode="cover"
      />
      {/* Başlık */}
      <Text className="text-2xl font-bold text-coffee-green text-center mt-8 mb-2">
        En iyi kahve deneyimi
      </Text> 
      {/* Açıklama */}
      <Text className="text-base text-coffee-green text-center mt-">
        Arkadaşlarla vakit geçirirken eşlik edecek en güzel fikir: {"\n"}
        iyi demlenmiş bir kahve.
      </Text> 
      <Image
        source={require("../assets/images/Frame 21348.png")}
        className="mb-8 mt-6 "
      />
      <Image
        source={require("../assets/images/Line 4.png")}
        className="mb-6 mt-12 px-4"
      />
      {/* Butonlar */}
      <TouchableOpacity className="bg-green-100 rounded-xl py-3 mb-3  w-[370px] ">
        <Text className="text-white-100 text-center bg-green text-lg font-bold ">İleri</Text>
      </TouchableOpacity>
      <TouchableOpacity className="border border-green-100 rounded-xl w-[370px] py-3">
        <Text className="text-coffee-green text-center text-lg font-bold">Atla</Text>
      </TouchableOpacity>
      
    </View>
    );
}
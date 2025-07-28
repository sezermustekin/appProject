import { View, Text, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import { CalendarDaysIcon } from 'react-native-heroicons/outline'; // Gerekli ikonlar
import { PencilSquareIcon } from 'react-native-heroicons/solid'; // Dolu kalem ikonu
import Svg, { Path } from 'react-native-svg';
import React, { useState } from 'react';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal'; // Country ve CountryCode tiplerini import ettik

// Özel ChevronLeft ikonu bileşeni
const MyCustomChevronLeftIcon = ({ size = 24, color = 'black' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M6 8L2 12L6 16" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M2 12H22" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

// Özel ChevronDown ikonu bileşeni (ChevronDownIcon bulunamadığı için oluşturuldu)
const MyCustomChevronDownIcon = ({ size = 24, color = 'black' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path d="M6 9L12 15L18 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

export default function App() {
  // State değişkenleri ve başlangıç değerleri
  const [name, setName] = useState('Nevada Coffee');
  const [phoneNumber, setPhoneNumber] = useState('000 000 00 00');
  // countryCode state'ini CountryCode tipiyle tanımladık
  const [countryCode, setCountryCode] = useState<CountryCode>('TR');
  // country state'ini Country tipiyle veya null olarak tanımladık
  const [country, setCountry] = useState<Country | null>(null);
  const [withCountryPickerVisible, setWithCountryPickerVisible] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState('10/10/1992');

  // Ülke seçimi yapıldığında çalışacak fonksiyon
  // selectedCountry parametresini Country tipiyle tanımladık
  const onSelectCountry = (selectedCountry: Country) => {
    setCountryCode(selectedCountry.cca2);
    setCountry(selectedCountry);
    setWithCountryPickerVisible(false); // Seçim yapıldıktan sonra modalı kapat
  };

  return (
    <SafeAreaView className="w-full h-full bg-yellow-50"> {/* Arka plan rengi ve tam ekran */}
      {/* Üst kısım: Geri butonu */}
      <View className="flex-row items-center p-4">
        <TouchableOpacity>
          <MyCustomChevronLeftIcon size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Başlık ve açıklama */}
      <View className="px-4 mt-4">
        <Text className="text-3xl font-bold text-gray-800">Profilini Tamamla</Text>
        <Text className="mt-2 text-gray-600">
          Kahve dükkanımızın bir parçası olduğun için teşekkür ederiz. Keyfini çıkar!
        </Text>
      </View>

      {/* Profil resmi alanı */}
      <View className="relative w-32 h-32 rounded-full bg-gray-300 self-center my-8 justify-center items-center">
        {/* Buraya kullanıcı profil resmi gelecek, şimdilik boş */}
        {/* <Image source={{ uri: 'https://placehold.co/128x128/ccc/white?text=Avatar' }} className="w-full h-full rounded-full" /> */}
        <TouchableOpacity className="absolute bottom-0 right-0 p-2 bg-orange-500 rounded-full">
          <PencilSquareIcon size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Ana form containerı */}
      <View className="p-5 bg-white rounded-lg  mx-2"> {/* mx-4 ekleyerek yanlardan boşluk bıraktık */}
        {/* Ad Soyad */}
        <View className="mb-5">
          <Text className="text-base font-bold mb-2 text-gray-800">
            Ad Soyad <Text className="text-red-500">*</Text>
          </Text>
          <TextInput
            className="border border-gray-300 items-center rounded-lg p-3 text-base bg-gray-100"
            onChangeText={setName}
            placeholder="Adınızı ve Soyadınızı Girin"
          />
        </View>

        {/* Telefon Numarası */}
        <View className="mb-5">
          <Text className="text-base font-bold mb-2 text-gray-800">
            Telefon Numarası <Text className="text-red-500">*</Text>
          </Text>
          <View className="flex-row items-center border border-gray-300 rounded-lg bg-gray-50">
            <TouchableOpacity
              onPress={() => setWithCountryPickerVisible(true)}
              // p-3 CountryPicker'a ve ikona dikey padding sağlar
              className="flex-row items-center pr-3 border-r border-gray-200 p-1"
            >
              {/* CountryPicker bileşeni */}
              <CountryPicker
                countryCode={countryCode} // countryCode artık doğru tipte
                onSelect={onSelectCountry}
                withCallingCodeButton={true}
                withFilter={true}
                withFlag={true}
                visible={withCountryPickerVisible}
                onClose={() => setWithCountryPickerVisible(false)}
                onOpen={() => setWithCountryPickerVisible(true)}
                // containerButtonStyle kaldırıldı, üstteki TouchableOpacity padding'i hallediyor
              />
              {/* ChevronDownIcon yerine özel ikonumuzu kullandık */}
              <MyCustomChevronDownIcon size={16} color="black" />
            </TouchableOpacity>
            <TextInput
              className="flex-1 p-3 items-center "
              
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              placeholder="Numaranızı Giriniz"
            />
          </View>
        </View>

        {/* Doğum Tarihi */}
        <View className="mb-5">
          <Text className="text-base font-bold mb-2 text-gray-800">
            Doğum Tarihi <Text className="text-red-500">*</Text>
          </Text>
          <TouchableOpacity className="flex-row items-center border border-gray-300 rounded-lg bg-gray-50 pr-3">
            <TextInput
              className="flex-1 p-4 items-center"
              
              onChangeText={setDateOfBirth}
              placeholder="GG/AA/YYYY"
              editable={false} // Kullanıcının direkt yazmasını engelle
            />
            <CalendarDaysIcon size={24} color="gray" /> {/* Takvim ikonu */}
          </TouchableOpacity>
          {/* Burada bir DatePicker modal açmak için bir onPress olayı ekleyebilirsiniz */}
        </View>
      </View>
        <View className="flex-1 justify-center items-center px-4">
      <TouchableOpacity className="bg-green-100 w-full  justify-center rounded-xl w-[370px] py-3 mb-3">
        <Text className="text-white-100 text-center text-lg font-bold">İleri</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}
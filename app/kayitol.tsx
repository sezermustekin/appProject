import React from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// NativeWind artık TailwindProvider'a ihtiyaç duymaz, bu satırı kaldırabilirsiniz.
// import { TailwindProvider } from 'tailwindcss-react-native'; // Bunu kaldırdık

// 1. react-native-svg kütüphanesini import edin
import Svg, { Path } from 'react-native-svg';

// -----------------------------------------------------------------------------
// İKON BİLEŞENLERİ
// Tüm ikonların Svg bileşenini react-native-svg'den alması gerekiyor.
// -----------------------------------------------------------------------------

// Geri Oku İkonu (image_5009dc.png)
const BackIcon = () => (
  <View className="w-6 h-6 flex-shrink-0 items-center justify-center">
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M6 8L2 12L6 16" stroke="#3B3232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M2 12H22" stroke="#3B3232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  </View>
);

// E-posta İkonu (image_500d43.png)
const EmailIcon = () => (
  <View className="w-6 h-6 flex-shrink-0 items-center justify-center">
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M20 4.5H4C2.89543 4.5 2 5.39543 2 6.5V18.5C2 19.6046 2.89543 20.5 4 20.5H20C21.1046 20.5 22 19.6046 22 18.5V6.5C22 5.39543 21.1046 4.5 20 4.5Z" stroke="#6C7484" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M22 7.5L13.03 13.2C12.7213 13.3985 12.3659 13.5 12 13.5C11.6341 13.5 11.2787 13.3985 10.97 13.2L2 7.5" stroke="#6C7484" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  </View>
);

// LockIcon (Kilit ikonu için uygun SVG yolu ile değiştirildi)
const LockIcon = () => (
  <View className="w-6 h-6 flex-shrink-0 items-center justify-center">
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B3232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M19 11.5H5C3.89543 11.5 3 12.3954 3 13.5V20.5C3 21.6046 3.89543 22.5 5 22.5H19C20.1046 22.5 21 21.6046 21 20.5V13.5C21 12.3954 20.1046 11.5 19 11.5Z" stroke="#6C7484" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <Path d="M7 11.5V7.5C7 6.17392 7.52678 4.90215 8.46447 3.96447C9.40215 3.02678 10.6739 2.5 12 2.5C13.3261 2.5 14.5979 3.02678 15.5355 3.96447C16.4732 4.90215 17 6.17392 17 7.5V11.5" stroke="#6C7484" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  </View>
);


// Göz İkonu (Şifre gösterme/gizleme için) - Daha gerçekçi bir SVG göz ikonu
const EyeIcon = () => (
  <View className="w-6 h-6 flex-shrink-0 items-center justify-center">
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3B3232" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M1 12s4-8 11-8s11 8 11 8s-4 8-11 8s-11-8-11-8z"></Path>
      <Path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></Path>
    </Svg>
  </View>
);

// -----------------------------------------------------------------------------
// INPUTFIELD BİLEŞENİ (TypeScript ile tiplendirildi)
// -----------------------------------------------------------------------------

// IconComponent için doğru tipi belirleyelim.
// React bileşenleri genellikle React.ComponentType veya React.ElementType tipindedir.
type IconComponentType = React.ComponentType<any>; // Veya daha spesifik bir prop tipi olan bileşenler için

// InputField bileşeninin prop'ları için bir arayüz tanımlayın.
interface InputFieldProps {
  placeholder?: string;
  icon?: IconComponentType; // 'icon' prop'u artık tiplendirildi
  isPassword?: boolean;
  showEyeIcon?: boolean;
  value?: string; // TextInput için value prop'u
  onChangeText?: (text: string) => void; // TextInput için onChangeText prop'u
}

const InputField: React.FC<InputFieldProps> = ({ // React.FC kullanarak tip ataması
  placeholder,
  icon: IconComponent, // icon prop'unu IconComponent olarak yeniden adlandırarak destructure ediyoruz
  isPassword = false,
  showEyeIcon = false,
  value,
  onChangeText,
}) => {
  return (
    <View className="flex flex-row items-center gap-x-1.5 px-3 py-3 border border-gray-900 rounded-lg bg-[#F0F1F5] w-full"> {/* w-[398px] yerine w-full kullanıldı, daha esnek */}
      {IconComponent && <IconComponent />}
      <TextInput
        className="flex-1 text-base font-normal text-[#ABABCBC] h-[29px]"
        placeholder={placeholder}
        placeholderTextColor="#ABABCB"
        secureTextEntry={isPassword}
        value={value}
        onChangeText={onChangeText}
      />
      {showEyeIcon && <EyeIcon />}
    </View>
  );
};

// -----------------------------------------------------------------------------
// KAYIT OL EKRANI BİLEŞENİ
// -----------------------------------------------------------------------------

export default function SignUpScreen() {
  // TextInput değerlerini yönetmek için state kullanmak önemlidir
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [referralCode, setReferralCode] = React.useState('');
  const [acceptTerms, setAcceptTerms] = React.useState(false);

  const handleSignUp = () => {
    console.log('Kayıt Ol Butonuna Basıldı!');
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Referral Code:', referralCode);
    console.log('Kullanım Şartları Kabul Edildi:', acceptTerms);
    // Burada API çağrısı veya navigasyon işlemleri yapılabilir.
  };

  return (
    // TailwindProvider artık NativeWind v3+ için gerekli değildir.
    // Doğrudan SafeAreaView ile başlayabilirsiniz.
    <SafeAreaView className="w-full h-full bg-krem-100">
      <ScrollView className="px-5 py-4">
        {/* Header */}
        <View className="flex-row items-center mb-6 mt-[20px]">
          <TouchableOpacity className="mr-auto">
            <BackIcon />
          </TouchableOpacity>
          {/* 9:41 ve pil göstergesi gibi üst çubuk öğeleri burada eklenebilir. */}
        </View>

        {/* Hesap Oluştur Başlık (image_5009a2.png) */}
        <Text className="text-black text-2xl font-bold mt-[50px]  self-stretch mb-2">
          Hesap Oluştur
        </Text>

        {/* Açıklama Metni (image_5009fe.png) */}
        <Text className="text-black text-m font-normal  self-stretch leading-[20px] mb-6">
          Kahve dükkanımızın ayrıcalıklarından yararlanmak için bir hesap oluştur.
        </Text>

        {/* E-posta Adresi Alanı (image_500a5b.png ve image_500a3a.png) */}
        <View className="flex flex-col items-start gap-y-1.5 w-full mt-[50px] mb-4">
          <Text className="text-black text-base font-bold ">
            E-posta Adresi<Text className="text-red-500">*</Text>
          </Text>
          <InputField
            placeholder="E-posta adresinizi girin"
            icon={EmailIcon}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Şifre Alanı (image_500d9d.png) */}
        <View className="flex flex-col items-start gap-y-1.5 w-full mb-4">
          <Text className="text-black text-base font-bold ">
            Şifre<Text className="text-red-500">*</Text>
          </Text>
          <InputField
            placeholder="Şifrenizi girin"
            icon={LockIcon}
            isPassword={true}
            showEyeIcon={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Referans Kodu Alanı */}
        <View className="flex flex-col items-start gap-y-1.5 w-full mb-6">
          <Text className="text-black text-base font-bold ">
            Referans Kodu<Text className="text-red-500">*</Text>
          </Text>
          <InputField
            placeholder="Referans kodunu girin"
            value={referralCode}
            onChangeText={setReferralCode}
          />
        </View>

        {/* Checkbox ve Metin */}
        <View className="flex-row items-center mb-6">
          <TouchableOpacity
            className={`w-5 h-5 border rounded-sm mr-2 justify-center items-center ${
              acceptTerms ? 'bg-black border-black' : 'border-gray-400'
            }`}
            onPress={() => setAcceptTerms(!acceptTerms)}
          >
            {acceptTerms && (
              <Text className="text-white text-base">✓</Text> // Basit bir tik işareti
            )}
          </TouchableOpacity>
          <Text className="text-black text-base font-normal  flex-1">
            Nevada kullanım şartlarını kabul ediyorum.
          </Text>
        </View>

        {/* Zaten bir hesabın var mı? Giriş Yap */}
        <View className="flex-row justify-center mt-[60px] mb-8">
          <Text className="text-black text-base font-normal ">
            Zaten bir hesabın var mı?{' '}
          </Text>
          <TouchableOpacity>
            <Text className="text-black text-base font-bold ">
              Giriş Yap
            </Text>
          </TouchableOpacity>
        </View>

        {/* Kayıt Ol Butonu */}
        <TouchableOpacity className="bg-green-100 rounded-xl py-3 mb-3 w-[370px]">
        <Text className="text-white-100 text-center bg-green text-lg font-bold ">Kayit Ol</Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
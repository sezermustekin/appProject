// src/components/PolicyText.tsx (Bu dosyayı oluşturun veya kontrol edin)
import React from 'react';
import { Linking, Text, TouchableOpacity } from 'react-native';

interface PolicyTextProps {
  text: string;
  linkUrl?: string; // İsteğe bağlı, eğer her zaman bir link olmayacaksa
  onPress?: () => void; // LinkUrl yerine özel bir fonksiyon çalıştırmak isterseniz
  className?: string; // Tailwind CSS sınıfları için
  linkClassName?: string; // Link metnine özel stil için
}

const PolicyText: React.FC<PolicyTextProps> = ({
  text,
  linkUrl,
  onPress,
  className,
  linkClassName = 'text-blue-500 underline', // Varsayılan link stili
}) => {
  // Eğer react-navigation kullanıyorsanız ve dahili sayfalara yönlendirecekseniz
  // const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress();
    } else if (linkUrl) {
      // Eğer URL bir http/https adresi ise Linking ile aç
      if (linkUrl.startsWith('http://') || linkUrl.startsWith('https://')) {
        Linking.openURL(linkUrl).catch(err => console.error('An error occurred', err));
      } else {
        // Dahili bir sayfa ise (örneğin 'PrivacyPolicyScreen')
        // navigation.navigate(linkUrl as never); // 'as never' tipi eşleşmesi için
        console.warn(`Internal link not handled: ${linkUrl}. Implement navigation.`);
        // TODO: Buraya kendi uygulamanızın dahili navigasyon mantığını ekleyin
      }
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} disabled={!linkUrl && !onPress}>
      <Text className={`text-center text-gray-600 text-sm ${className} ${linkUrl || onPress ? linkClassName : ''}`}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default PolicyText;
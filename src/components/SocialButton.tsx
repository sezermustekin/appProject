// src/components/SocialButton.tsx
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

// Prop'ların tipini tanımlayan arayüz
interface SocialButtonProps {
  icon: string; // İkon adını temsil edecek (örn: "google")
  text: string; // Buton metni
  onPress?: () => void; // Butona basıldığında çalışacak isteğe bağlı fonksiyon
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, text, onPress }) => {
  // İkon adına göre doğru görseli seçme fonksiyonu
  const getIconSource = (iconName: string) => {
    switch (iconName) {
      case 'google':
        // Bu yolun, SocialButton.tsx dosyasına göre doğru olduğundan emin olun.
        // Örneğin, SocialButton.tsx src/components içinde ve resimler assets/images içinde ise,
        // "../../assets/images/google.png" doğru olabilir.
        return require('../../assets/images/google.png');
        case 'apple':
        return require('../../assets/images/apple.png');
        case 'facebook':
        return require('../../assets/images/facebook.png');
        case 'twitter':
        return require('../../assets/images/twitter.png');
      // Gelecekte farklı ikonlar için buraya 'case' ekleyebilirsiniz (örn: 'facebook', 'apple')
      default:
        return null; // Tanımsız ikonlar için boş dönebilir veya varsayılan bir ikon gösterebilirsiniz.
    }
  };

  const iconSource = getIconSource(icon);

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {iconSource && <Image source={iconSource} style={styles.icon} />}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

// Bileşenin stil tanımları
const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF8E6',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#000000',
    justifyContent: 'center',
    width: '90%', // Buton genişliğini ayarlayabilirsiniz
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: 'contain',
  },
  text: {
    color: '#424242',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SocialButton;
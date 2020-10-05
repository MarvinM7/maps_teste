import { Linking } from 'react-native';

export default function openWhatsapp(whatsapp: string) {
    Linking.openURL('whatsapp://send?text=hello&phone=' + whatsapp);
}
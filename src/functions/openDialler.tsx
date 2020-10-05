import { Linking } from 'react-native';

export default function openDialler(number: string) {
    Linking.openURL('tel:${'+ number + '}');
}
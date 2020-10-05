import { Linking } from 'react-native';

export default function openInstagram(instagram: string) {
    Linking.openURL('instagram://user?username=' + instagram);
}
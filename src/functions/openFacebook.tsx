import { Linking } from 'react-native';

export default function openDialler(facebook: string) {
    Linking.openURL('fb://page/' + facebook);
}
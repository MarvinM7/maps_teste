import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileIndex from './index';

const Stack = createStackNavigator();

class ProfileRoutes extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Perfil" headerMode="none">
                <Stack.Screen name="Perfil" component={ProfileIndex} />
            </Stack.Navigator>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default ProfileRoutes;

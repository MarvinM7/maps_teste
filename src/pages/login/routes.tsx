import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginIndex from './index';

const Stack = createStackNavigator();

class LoginRoutes extends Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Login" headerMode="none">
                <Stack.Screen name="Login" component={LoginIndex} />
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

export default LoginRoutes;
